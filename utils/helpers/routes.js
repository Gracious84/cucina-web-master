import { nameToSlug } from './helpers';

const routes = {
  recipe: {
    url: id => `/recipe?id=${id}`,
    mask: (slug, id) => `/recipes/${nameToSlug(slug)}~${id}`,
  },

  cookNow: {
    url: id => `/cook-now?id=${id}`,
    mask: (slug, id) => `/cook-now/${nameToSlug(slug)}~${id}`,
  },
};

export default routes;
