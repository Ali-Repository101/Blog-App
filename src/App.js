import React from 'react'
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";


import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Footer from './Components/Footer';
import SinglePost from './Pages/SinglePost';
import { BASE_URL } from './Api/Query';


// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       return alert(`Graphql error ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: BASE_URL }),
// ]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: BASE_URL,
});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route path="/blog/:slug" element={<SinglePost />} />
            {/* <Route exact path="/post/:id" render={(props) => <SinglePost {...props} posts={this.state.posts} />} /> */}

          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App



