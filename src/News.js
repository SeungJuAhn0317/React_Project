import React,{useState,useCallback} from 'react';
import logo from './logo.svg';
import './News.css';
import Header from './components/Header';
import Contents from './components/Contents';
import NewsList from './components/NewsList';
import routes from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function News() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            {routes.map(route => {
              return (
                <Route 
                  key={route.path} 
                  path={route.path} 
                  exact
                >
                  <route.component />
                </Route>
              )
            })}
            <div className="App">
    <Header/>

    <Contents/>
    {/* <NewsList /> */}
    </div>
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
  
}

// const News = () => { 

//   return (
//     <div className="App">
//     <Header/>

//     <Contents/>
//     {/* <NewsList /> */}
//     </div>
//   );
// }

export default News;