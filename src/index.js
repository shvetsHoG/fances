import React from 'react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {HelmetProvider} from "react-helmet-async";
import {hydrate, render} from "react-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <HelmetProvider>
                        <App/>
                    </HelmetProvider>
                </Provider>
            </QueryClientProvider>
        </React.StrictMode>
        , rootElement);
} else {
    render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <HelmetProvider>
                        <App/>
                    </HelmetProvider>
                </Provider>
            </QueryClientProvider>
        </React.StrictMode>
        , rootElement);
}
