import React,{useState,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import NewsList from './components/NewsList';



const App = () => { 

  return (
    <div className="App">
    <Header/>

    <Contents/>
    {/* <NewsList /> */}
    </div>
  );
}

export default App;