const BASE_URL =
  process.env.REACT_APP_SWAPI_BASE_URL || 'https://swapi.py4e.com/api';

export async function fetchApiRoot() {
  const response = await fetch(BASE_URL + '/');
  if (!response.ok) throw new Error('Failed to fetch API root');
  return response.json();
}

export async function fetchResourceList(resource: string) {
  const response = await fetch(`${BASE_URL}/${resource}/`);
  if (!response.ok) throw new Error('Not found');
  return response.json();
}

export async function fetchResource(resource: string, id: string) {
  const response = await fetch(`${BASE_URL}/${resource}/${id}/`);
  if (!response.ok) throw new Error('Not found');
  return response.json();
}
