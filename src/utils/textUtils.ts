export function formatDate(value: string) {
  return new Date(value).toLocaleString();
}

export function swapiUrlToRoute(url: string) {
  const match = url.match(/api\/([^/]+)\/(\d+)\/?$/);
  return match ? `/${match[1]}/${match[2]}` : url;
}

export function getIdFromRoute(route: string) {
  const parts = route.split('/');
  return parts[parts.length - 1] || parts[parts.length - 2];
}
