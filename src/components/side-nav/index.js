/* eslint-disable no-restricted-globals */
import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import styled, { css } from 'styled-components';
// import Home from "../home";
// import About from "../about";
// import News from "../news";

import "./side.css";

class SideNav extends React.Component {
  observe = null;

  constructor(props) {
    super(props)
    this.state = {
      anchors: this.props.anchors
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.observerCallback, {threshold: 0.7});
    this.addObserverToTargets();
  }

  observerCallback = (entries, observer) => {
    // console.log(observer);
    const activeIds = entries.map( (entry) => {
      if (entry.intersectionRatio > 0 ) {
        return entry.target.id;
      }
      return entry.target
    });
    // console.log("activeIds", activeIds);
    if (activeIds.length !== this.props.anchors.length) {
      const activeHash = activeIds[0];
      // console.log("activeHasevent.target.dataset.valueh", activeHash);
      const anchors = this.state.anchors.map(obj => {
       return obj.hash === activeHash ? { ...obj, isActive: true } : {...obj, isActive: false}
      })
      this.setState({ anchors })
    }
    this.hideLabels();
  }

  hideLabels () {
    setTimeout(() => {
      const anchors = this.state.anchors.map(obj => {
        return {...obj, isActive: false};
       });
      this.setState({ anchors });
    }, 3000);
  }

  addObserverToTargets = () => {
    this.props.anchors.forEach((anc) => {
      const target = document.getElementById(anc.hash);
      this.observer.observe(target);
    });
  }
  
  // handleScroll = () => {
  //     this.state.anchors.forEach((obj) => {
  //       const tab = document.getElementById(obj.hash);
  //     })
  // }

  render () {
    return (
      <div>
          <ul className="sidebar">
          {
            this.state.anchors.map(anc => (
            <li className="link" key={anc.hash}>
              <div id="btn1"  className={`${anc.isActive ? "r" :  "u"}`}></div>
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
