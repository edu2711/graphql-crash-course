import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

