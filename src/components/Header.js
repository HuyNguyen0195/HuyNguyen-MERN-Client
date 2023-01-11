import React  from 'react';
import { NavLink } from 'react-router-dom';

const pages = [
  {href:"/", text:"Home",className:"fa fa-sm fa-home"},
  {href:"/mongo", text:"Mongo", className:"fa fa-sm fa-list"},
  {href:"/gomoku", text:"Gomoku", className:"fa fa-sm fa-info"},
  {href:"/redux", text:"Redux", className:"fa fa-sm fa-list"},
  {href:"/movie", text:"Movie", className:"fa fa-sm fa-home"},
];
const createNavItem = ({href,text,className}) => (
  <li>
    <NavLink className="nav-link" to={href} >
      <i className={className} /> {text}
    </NavLink>
  </li>
);

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
          <img 
          src="../assets/images/logo192.png" 
          alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            HuyNguyen
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              {pages.map((page)=>createNavItem(page))}

              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Login</button>

              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

