import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Fragment } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60 * 1000,
      gcTime: 24 * 60 * 60 * 1000 + 10000,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NextNProgress />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Layout>
      </QueryClientProvider>
    </Fragment>
  );
}
