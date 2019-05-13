import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import { appWithTranslation } from '../i18n';

import withApollo from '../utils/apollo/withApollo';

import Page from '../sections/Page';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(appWithTranslation(MyApp));
