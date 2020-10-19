import React, { Component } from "react";
import { FaBars, FaSearch, FaTools, FaChromecast, FaUserCircle, FaHome, FaPlus, FaPlay } from 'react-icons/fa';

import '../style/movie-overview.css';

import img from "../images/hero.jpg"

export default class MovieContainer extends Component {

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
              <div className="movieInfo">
                <div className="movieInfoLeft">
                    <img src={img}/>
                </div>
                <div className="movieInfoRight">
                    <h2>Black Eagle</h2>
                    <h3 className="year">1988</h3>
                    <div className="duration">
                        <p>1 hr 44 min</p>
                        <span className="age">15</span>
                        <span className="rating">
                            <div id="rating-icon"></div>
                            16%
                        </span>
                    </div>
                    <div className="buttonSection">
                        <a href="/watch">
                            <button>
                                <FaPlay/>
                                PLAY
                            </button>
                        </a>
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="plex-icon-toolbar-mark-played-560" aria-hidden="true" class="PlexIcon-plexIcon-8Tamaj ActionButton-icon-3yhx5u"><path d="M24 44.4C12.7333 44.4 3.59998 35.2666 3.59998 24C3.59998 12.7333 12.7333 3.59998 24 3.59998C35.2666 3.59998 44.4 12.7333 44.4 24C44.4 35.2666 35.2666 44.4 24 44.4ZM24 40.8C33.2784 40.8 40.8 33.2784 40.8 24C40.8 14.7216 33.2784 7.19998 24 7.19998C14.7216 7.19998 7.19998 14.7216 7.19998 24C7.19998 33.2784 14.7216 40.8 24 40.8ZM22.9177 33.9317L13.5646 28.5317L15.3646 25.414L21.6 29.014L30 14.4648L33.1177 16.2648L22.9177 33.9317Z"></path></svg>
                        </button>
                        <button>...</button>
                    </div>

                    <p className="movie-desc">CIA agent must outrace KGB agent in searching of super weapon lost in Mediterranean.</p>

                    <div className="directedBy"></div>
                </div>
              </div>
              <div className="cast"></div>
              <div className="extra-videos"></div>
              <div className="similar-titles"></div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
