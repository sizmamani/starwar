import { ErrorMessage, Loading, LoadMore, NoData } from 'components';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchResourceList } from 'services/api';
import { resourceLabels } from 'utils/resourceLabels';
import {
  Person,
  Planet,
  Film,
  Starship,
  Vehicle,
  Species,
  ApiRootResponse,
} from 'services/types';

type ResourceType = Person | Planet | Film | Starship | Vehicle | Species;

export const ResourceList: React.FC = () => {
  const { resource } = useParams<{ resource: keyof ApiRootResponse }>();
  const navigate = useNavigate();
  const [data, setData] = useState<ResourceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef<IntersectionObserver>(null);

  const lastElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (loadingMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting && nextPage) {
            loadMore();
          }
        }
      );
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadingMore, nextPage]
  );

  const resourceName =
    resourceLabels[resource ?? ''] || resource?.toUpperCase();

  useEffect(() => {
    if (!resource) return;
    setLoading(true);
    setData([]);
    setNextPage(null);
    fetchResourceList<ResourceType>(resource)
      .then((json) => {
        setData(json.results || []);
        setNextPage(json.next);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [resource]);

  const loadMore = async () => {
    if (!nextPage || loadingMore) return;
    setLoadingMore(true);
    try {
      const response = await fetch(nextPage);
      const json = await response.json();
      setData((prev) => [...prev, ...json.results]);
      setNextPage(json.next);
    } catch (error) {
      console.error('Failed to load more:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!data.length) return <NoData />;

  return (
    <div className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl p-8 mt-8">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white uppercase">
        {resourceName} List
      </h2>
      <ul className="list-none p-0">
        {data.map((item, idx) => {
          const idMatch = item.url && item.url.match(/\/(\d+)\/?$/);
          const id = idMatch ? idMatch[1] : idx + 1;
          const isLastElement = idx === data.length - 1;
          return (
            <li
              key={id}
              className="mb-3"
              ref={isLastElement ? lastElementRef : undefined}
            >
              <button
                className="text-yellow-500 dark:text-yellow-300 underline cursor-pointer bg-transparent border-none p-0"
                onClick={() => navigate(`/${resource}/${id}`)}
              >
                {'name' in item ? item.name : item.title}
              </button>
            </li>
          );
        })}
      </ul>
      {loadingMore && <LoadMore />}
    </div>
  );
};
