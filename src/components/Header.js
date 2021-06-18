import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../News.css';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <header className ="header">
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brands" href="/News">COVID-19</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="navbar-brand" aria-current="page" href="/News">확진자 현황</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/Patients">환자 관리</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/New">뉴스</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/Rules">방역수칙</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
