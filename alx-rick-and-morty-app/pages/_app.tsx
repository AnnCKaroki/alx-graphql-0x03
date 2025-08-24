import "@/styles/globals.css";
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorProneComponent from "@/components/ErrorProneComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <ErrorProneComponent />
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  )
}
