import { ApiListResponse, ApiRootResponse } from './types';

const BASE_URL =
  process.env.REACT_APP_SWAPI_BASE_URL || 'https://swapi.py4e.com/api';

export async function fetchApiRoot(): Promise<ApiRootResponse> {
  const response = await fetch(BASE_URL + '/');
  if (!response.ok) throw new Error('Failed to fetch API root');
  return response.json();
}

export async function fetchResourceList<T>(
  resource: keyof ApiRootResponse
): Promise<ApiListResponse<T>> {
  const response = await fetch(`${BASE_URL}/${resource}/`);
  if (!response.ok) throw new Error('Not found');
  return response.json();
}

export async function fetchResource<T>(
  resource: keyof ApiRootResponse,
  id: string
): Promise<T> {
  const response = await fetch(`${BASE_URL}/${resource}/${id}/`);
  if (!response.ok) throw new Error('Not found');
  return response.json();
}
