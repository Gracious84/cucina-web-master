export const nameToSlug = name =>
  name
    .toLowerCase()
    .split(' ')
    .join('-');
