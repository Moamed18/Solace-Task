import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', 
  cache: new InMemoryCache(),
});
const App: React.FC = () => {

  return <>
    <ApolloProvider client={client}>
      <div className="flex h-screen bg-gray-100">
        <div className="fixed h-full bg-white shadow-lg"> 
          <Navbar />
        </div>
        <div className="flex flex-col flex-grow bg-gray-100  ml-20 pl-8 h-full w-full"> 
          <Header />
          <Profile />
        </div>
      </div>
    </ApolloProvider>
  </>
};
export default App

