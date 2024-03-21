import React from 'react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {HelmetProvider} from "react-helmet-async";
import {hydrate, render} from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>, rootElement);
} else {
    render(<React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>, rootElement);
}
