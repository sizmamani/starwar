import { ErrorMessage, Loading, NoData } from 'components';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchResourceList } from 'services/api';
import { resourceLabels } from 'utils/resourceLabels';

export const ResourceList: React.FC = () => {
  const { resource } = useParams<{ resource: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const resourceName =
    resourceLabels[resource ?? ''] || resource?.toUpperCase();

  useEffect(() => {
    if (!resource) return;
    setLoading(true);
    fetchResourceList(resource)
      .then((json) => setData(json.results || []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [resource]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!data.length) return <NoData />;

  return (
    <div className="max-w-3xl bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl p-8 mt-8">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white uppercase">
        {resourceName} List
      </h2>
      <ul className="list-none p-0">
        {data.map((item, idx) => {
          const idMatch = item.url && item.url.match(/\/(\d+)\/?$/);
          const id = idMatch ? idMatch[1] : idx + 1;
          return (
            <li key={id} className="mb-3">
              <button
                className="text-yellow-500 dark:text-yellow-300 underline cursor-pointer bg-transparent border-none p-0"
                onClick={() => navigate(`/${resource}/${id}`)}
              >
                {item.name || item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
