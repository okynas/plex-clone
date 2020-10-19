import React, { Component } from "react";
import { FaBars, FaSearch, FaTools, FaChromecast, FaUserCircle, FaHome, FaPlus, FaPlayCircle } from 'react-icons/fa';

import '../style/browse.css';

import img from "../images/hero.jpg"

export default class BrowseContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      home: "active",
      add: "",
    }
  }

  render() {
    return(
      <>
        <header>
          <div className="leftSection">
            <div className="icon">
              <FaBars/>
            </div>
            <img src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"/>
            <div className="searchWrapper">
              <div className="icon">
                <FaSearch/>
              </div>
              <input type="text" className="search"/>
            </div>
          </div>

          <div className="rightSection">
            <button>GO PREMIUM</button>
            <div className="right-settings">
              <div className="icon">
                <FaTools/>
              </div>
              <div className="icon">
                <FaChromecast/>
              </div>
              <div className="icon">
                <FaUserCircle/>
              </div>
            </div>
          </div>
        </header>

        <div className="content">
          <aside>
            <a href="#" className={this.state.home} onClick={() => { this.setState({home: "active",add: ""}) }}>
              <FaHome/>
            </a>
            <a href="#" className={this.state.add} onClick={() => { this.setState({home: "",add: "active"}) }}>
              <FaPlus/>
            </a>
          </aside>
          <main>
            <div className="row">
              <h2>Recently Added</h2>
              <div className="movies">

                <a className="movie" href="/movie">
                  <div className="overlay">
                    <FaPlayCircle/>
                  </div>

                  <img src={img}/>
                  TITLE
                </a>

              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
