import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const clientUri = 'http://3.144.108.4:2318/graphql';
// const serverUri = 'https://microservicehsemeasurement.onrender.com/graphql';
const uriDynamo = 'https://testmicroservicehsemeasurement.onrender.com/graphql';

const client = new ApolloClient({
  uri: uriDynamo,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
