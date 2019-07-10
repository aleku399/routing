/* eslint-disable no-restricted-globals */
import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import styled, { css } from 'styled-components';
// import Home from "../home";
// import About from "../about";
// import News from "../news";

import "./side.css";

class SideNav extends React.Component {

  constructor(props) {
    super(props)
    this.timer = null;
    this.observer = null
    this.state = {
      pages: this.props.pages
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.observerCallback, {threshold: 0.7});
    // we delay adding components to observer because react page scroller delays adding them to DOM
    setTimeout(() => this.addObserverToTargets(), 1000);
  }

  componentWillUnmount () {
    this.observer = null
    clearTimeout(this.timer);
  }

  observerCallback = (entries, observer) => {
    // console.log(observer);
    const activeTargets = entries.map( (entry) => {
      if (entry.intersectionRatio > 0 ) {
        return entry.target.id;
      }
      return entry.target
    });
    // console.log("activeTargets", activeTargets);
    if (activeTargets.length !== this.props.pages.length) {
      const activeHash = activeTargets[0];
      // console.log("activeHasevent.target.dataset.valueh", activeHash);
      const pages = this.state.pages.map(obj => {
       return obj.hash === activeHash ? { ...obj, isActive: true } : {...obj, isActive: false}
      })
      this.setState({ pages })
      this.hideLabels();
      this.addObserverToTargets();
    }

  }

  addObserverToTargets = () => {
    const pages = this.state.pages.map((anc) => {
      const target = document.getElementById(anc.hash);

      if (target && !anc.isObserved) {
        this.observer.observe(target);
        return { ...anc, isObserved: true}
      }

      return anc;
    });
    this.setState({ pages })
  }


  hideLabels () {
    this.timer = setTimeout(() => {
      const pages = this.state.pages.map(obj => {
        return {...obj, isActive: false};
       });
      this.setState({ pages });
    }, 700);
  }

  render () {
    return (
      <div>
          <ul className="sidebar">
          {
            this.state.pages.map(anc => (
            <li className="link" key={anc.hash}>
              <div id="btn1" className={`${anc.isActive ? "r" :  "u"}`}></div>
              <a
                className={`label ${anc.isActive ? "active" : "hidden"}`}
                href={`#${anc.hash}`}
                data-value={anc.hash}
                onClick={this.handleClick}
              >
                {anc.title}
              </a>
            </li>
            ) )
          }
          </ul>
      </div>
    );
  }
}

export default SideNav;
