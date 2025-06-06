import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatDate, swapiUrlToRoute, getIdFromRoute } from 'utils/textUtils';
import { fetchResource } from 'services/api';
import { Loading, ErrorMessage } from 'components';
import { ApiRootResponse, ResourceType, Film } from 'services/types';
import { useResourceName } from 'context/ResourceNameContext';

export const ResourceDetail: React.FC = () => {
  const { resource, id } = useParams<{
    resource: keyof ApiRootResponse;
    id: string;
  }>();
  const [data, setData] = useState<ResourceType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { setResourceName } = useResourceName();

  useEffect(() => {
    if (!resource || !id) return;
    setLoading(true);
    fetchResource<ResourceType>(resource, id)
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [resource, id]);

  useEffect(() => {
    if (data) {
      const resource = data as { name?: string; title?: string };
      setResourceName(resource.name || resource.title || id);
    }
    return () => setResourceName(undefined);
  }, [data, id, setResourceName]);

  function renderValue(value: string | string[] | number) {
    if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T/)) {
      return formatDate(value);
    }
    if (
      Array.isArray(value) &&
      value.length &&
      typeof value[0] === 'string' &&
      value[0].startsWith('http')
    ) {
      return value.map((url: string, idx: number) => {
        const route = swapiUrlToRoute(url);
        return (
          <span key={url}>
            <Link
              to={route}
              className="text-yellow-500 dark:text-yellow-300 underline"
            >
              {getIdFromRoute(route)}
            </Link>
            {idx < value.length - 1 ? ', ' : ''}
          </span>
        );
      });
    }
    if (typeof value === 'string' && value.startsWith('http')) {
      const route = swapiUrlToRoute(value);
      return (
        <Link
          to={route}
          className="text-yellow-500 dark:text-yellow-300 underline"
        >
          {getIdFromRoute(route)}
        </Link>
      );
    }
    return String(value);
  }

  if (loading) return <Loading />;
  if (error || !data) return <ErrorMessage />;

  return (
    <div className="mt-8 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl p-8">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white uppercase">
        {resource?.toUpperCase()} Detail
      </h2>
      <ul className="list-none p-0">
        {Object.entries(data).map(([key, value]) =>
          key === 'url' ? null : (
            <li key={key} className="mb-2">
              <strong>{key}:</strong> {renderValue(value)}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
