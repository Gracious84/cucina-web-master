import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import fetch from 'isomorphic-unfetch';
import * as camelCase from 'camelcase';

if (!process.browser) {
  global.fetch = fetch;
  // eslint-disable-next-line global-require
  global.Headers = require('node-fetch').Headers;
}

const restLink = new RestLink({
  uri: 'https://api.altacucina.co',
  fieldNameNormalizer: key => camelCase(key),
});

let apolloClient = null;

function create(initialState) {
  return new ApolloClient({
    link: restLink,
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    cache: new InMemoryCache({
      cacheRedirects: {
        Query: {
          recipe: (_, args, { getCacheKey }) =>
            getCacheKey({
              __typename: 'Recipe',
              id: args.id,
            }),
        },
      },
    }).restore(initialState || {}),
  });
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
