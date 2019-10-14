import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import AddCard from './AddCard';
import { Authentication } from './functions/authentication';
import SuccessFeedBack from './Animations/SuccessFeedBack';
import './styles/navbar.css';

class Navbar extends Component {

      showModal(e){
            e.preventDefault();
            const node = ReactDOM.findDOMNode(this);
            if (node instanceof HTMLElement) {
                  const modal = document.querySelector('.modal');
                  modal.classList.add("is-active");
           }
           
      }

      closeModal(){
            const node = ReactDOM.findDOMNode(this);
            if( node instanceof HTMLElement){
                  const modal = document.querySelector(".modal");
                  modal.classList.remove('is-active');
            }
      }

      logOut(e){
        e.preventDefault();
        Authentication.signout(() => {
            localStorage.clear();
            this.props.history.push(`/login`)
        })
      }



    render() {
        return (
            <div>
            	<div id="app">
            	    
            	<nav className="nav has-shadow">
            	  <div className="container">
            	    <div className="nav-left">
            	      <a className="nav-item" href="#">
            	        Flash Cards
            	      </a>
            	    </div>
            	    <label htmlFor="menu-toggle" className="nav-toggle">
            	      <span></span>
            	      <span></span>
            	      <span></span>
            	    </label>
            	    <input type="checkbox" id="menu-toggle" className="is-hidden"/>
            	    <div className="nav-right nav-menu">
            	      <a className="nav-item is-tab is-hidden-tablet" href="#" id="showModal"  onClick={this.showModal.bind(this)}>
            	        <span className="icon"><i className="fa fa-plus" aria-hidden="true"></i></span> Add Card
            	      </a>
            	      <a className="nav-item is-tab is-hidden-tablet" href="#">
            	        <span className="icon"><i className="fa fa-files-o" aria-hidden="true"></i></span> Cards
            	      </a>
            	      <a className="nav-item is-tab is-hidden-tablet" href="#">
            	        <span className="icon"><i className="fa fa-cog"></i></span> Settings
            	      </a>
            	      
            	      <Link className="nav-item is-tab is-active" to="/profile">
            	        <span className="icon"><i className="fa fa-user"></i></span>
            	      </Link>
            	      <a className="nav-item is-tab" href="#" onClick={this.logOut.bind(this)}>
            	        <span className="icon"><i className="fa fa-sign-out"></i></span>
            	      </a>
            	    </div>
            	  </div>
            	</nav>

            	<section className="main-content columns is-fullheight">
            	  
            	  <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            	    <p className="menu-label is-hidden-touch">Navigation</p>
            	    <ul className="menu-list">
            	      <li>
            	        <a href="#" className="" onClick={this.showModal.bind(this)}>
            	          <span className="icon"><i className="fa fa-plus" aria-hidden="true"></i></span> Add Card
            	        </a>
            	      </li>
            	      <li>
            	        <a href="#" className="is-active">
            	          <span className="icon"><i className="fa fa-files-o" aria-hidden="true"></i></span> Cards
            	        </a>
            	      </li>
            	      <li>
            	        <a href="#" className="">
            	          <span className="icon"><i className="fa fa-cog"></i></span> Settings
            	        </a>
            	      </li>
            	      <li>
            	        <a href="#" className="">
            	          <span className="icon"><i className="fa fa-info"></i></span> About
            	        </a>
            	      </li>
            	    </ul>
            	  </aside>
                  <div className="container column is-10">

                  </div>
            	</section>


                  <div className="container" id="modal-container">
                    <div className="modal">
                      <div className="modal-background"></div>
                      <div className="modal-content">
                        <AddCard />
                      </div>
                      <button className="modal-close" onClick={this.closeModal.bind(this)}></button>
                    </div>
                    <p>
                    </p>
                  </div>

            	  </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
