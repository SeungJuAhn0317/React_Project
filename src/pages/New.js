import React,{useState,useCallback} from 'react';
import logo from '../logo.svg';
import '../News.css';
import Header from '../components/Header';
import Contents from '../components/Contents';
import NewsList from '../components/NewsList';

const New = () => { 

  return (
     <div className="New">
     <Header/>
     <h1 className="NewsTitle"> NEWS TODAY </h1>
    {<NewsList />}
    </div>
   );
}

export default New;
