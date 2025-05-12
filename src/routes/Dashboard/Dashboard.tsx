import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faRocket,
  faGlobe,
  faFilm,
  faCar,
  faDragon,
} from '@fortawesome/free-solid-svg-icons';
import { fetchApiRoot } from 'services/api';
import { Loading, SectionCard } from 'components';

const sectionMeta: Record<
  string,
  { name: string; icon: React.ReactNode; route: string; description: string }
> = {
  people: {
    name: 'Characters',
    icon: <FontAwesomeIcon icon={faUser} />,
    route: '/people',
    description: 'Some details about the characters',
  },
  starships: {
    name: 'Starships',
    icon: <FontAwesomeIcon icon={faRocket} />,
    route: '/starships',
    description: 'Some details about the starships',
  },
  planets: {
    name: 'Planets',
    icon: <FontAwesomeIcon icon={faGlobe} />,
    route: '/planets',
    description: 'Some details about the planets',
  },
  films: {
    name: 'Films',
    icon: <FontAwesomeIcon icon={faFilm} />,
    route: '/films',
    description: 'Some details about the films',
  },
  vehicles: {
    name: 'Vehicles',
    icon: <FontAwesomeIcon icon={faCar} />,
    route: '/vehicles',
    description: 'Some details about the vehicles',
  },
  species: {
    name: 'Species',
    icon: <FontAwesomeIcon icon={faDragon} />,
    route: '/species',
    description: 'Some details about the species',
  },
};

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchApiRoot()
      .then((data) => {
        if (!isMounted) return;
        setSections(Object.keys(data));
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setSections([]);
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <Loading />;
  if (!sections.length) return null;

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {sections
          .filter((section) => sectionMeta[section])
          .map((section) => (
            <SectionCard
              key={section}
              section={section}
              meta={sectionMeta[section]}
              onClick={() => navigate(sectionMeta[section].route)}
            />
          ))}
      </div>
    </div>
  );
};
