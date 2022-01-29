export const isBrowser = () => {
  return typeof window !== 'undefined';
};

/**
 *  simple, get a next js file path
 * you return the "slug" it would have
 * for instance, as next js currently works:
 * src/pages/something/sth/t.jsx
 */
export const getRouteFromPath = (path) => {
  return path.replace('src/pages/', '').replace('.jsx', '');
};
