/* eslint-disable no-restricted-globals */
import React from 'react';

import "./bar.scss";

class SideNav extends React.Component {

  constructor(props) {
    super(props)
    this.hideLabelsTimer = null;
    this.showActiveLabelTimer = null;
    this.observer = null
    this.observed = [];
    this.triggerRender = true;
    this.state = {
      pages: this.props.pages
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.observerCallback, {threshold: 0.7});
    // we delay adding components to observer because react page scroller delays adding them to DOM
    setTimeout(() => this.addObserverToTargets(), 1000);
  }.scrolled-to, html {
    scroll-behavior: smooth;
  }
  
  .active {
    border-bottom: 1px solid #333;
  }
  
  .sidebar {
    list-style-type: none;
    position: fixed;
    display: block;
    left: 0;
    margin-top: -78px;	
    top: 30%; 
    transform: translateY(-50%);
    z-index: 5;
    margin: 0 0 8px;
    padding: 0;
  }
  
  .link {
    cursor: pointer;
    margin: 0;
    position: relative;
    width: 60px;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  
  .u {
    background-color: red;
    margin-left: 13px;
    opacity: .25;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  .r {
    background-color: red;
    margin-left: 13px;
    opacity: 1;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  
  .dot {
    background-color: red;
    margin-left: 13px;
    opacity: 1;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  li:active .u {
    background-color: red;
    margin-left: 13px;
    opacity: 1;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  .label {
    animation: fadeout 2s ease .2s;
    color: red;
    float: left;
    font-size: 10px;
    font-weight: 400;
    left: 0;
    letter-spacing: .02em;
    margin-left: 24px;
    opacity: 0;
    /* pointer-events: none;  */
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transition: opacity .1s ease;
    width: 300px;
  }
  
  .active  {
    animation: fadeout 2s ease .2s;
    color: red;
    float: left;
    font-size: 10px;
    font-weight: 400;
    left: 0;
    letter-spacing: .02em;
    margin-left: 24px;
    opacity: 1;
    /* pointer-events: none;  */
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transition: opacity .1s ease;
    width: 300px;
  }
  
  .label:hover {
    animation: fadeout 2s ease .2s;
    color: red;
    float: left;
    font-size: 10px;
    font-weight: 400;
    left: 0;
    letter-spacing: .02em;
    margin-left: 24px;
    opacity: 1;
    /* pointer-events: none; */
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transition: opacity .1s ease;
    width: 300px;
  }

  componentWillUnmount () {
    clearTimeout(this.showLabel);
    clearTimeout(this.hideLabelsTimer);
  }

  observerCallback = (entries, _observer) => {
    const activeTargets = entries.map( (entry) => {
      if (entry.intersectionRatio > 0 ) {
        return entry.target.id;
      }
      return entry.target
    });

    if (activeTargets.length !== this.props.pages.length) {
      const activeHash = activeTargets[0];
      const page = this.state.pages.find(obj => {
       return obj.hash === activeHash
      })
      this.observed = [...this.observed, page]

      if (this.triggerRender) {
        this.triggerRender = false;
        this.showLabel();
      }

      this.addObserverToTargets();
    }
  }.scrolled-to, html {
    scroll-behavior: smooth;
  }
  
  .active {
    border-bottom: 1px solid #333;
  }
  
  .sidebar {
    list-style-type: none;
    position: fixed;
    display: block;
    left: 0;
    margin-top: -78px;	
    top: 30%; 
    transform: translateY(-50%);
    z-index: 5;
    margin: 0 0 8px;
    padding: 0;
  }
  
  .link {
    cursor: pointer;
    margin: 0;
    position: relative;
    width: 60px;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  
  .u {
    background-color: red;
    margin-left: 13px;
    opacity: .25;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  .r {
    background-color: red;
    margin-left: 13px;
    opacity: 1;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  
  .dot {
    background-color: red;
    margin-left: 13px;
    opacity: 1;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  li:active .u {
    background-color: red;
    margin-left: 13px;
    opacity: 1;
    width: 3px;
    height: 23px;
    position: relative;
    transition: height .2s ease;
    margin: 5px 0 0 14px;
  }
  
  .label {
    animation: fadeout 2s ease .2s;
    color: red;
    float: left;
    font-size: 10px;
    font-weight: 400;
    left: 0;
    letter-spacing: .02em;
    margin-left: 24px;
    opacity: 0;
    /* pointer-events: none;  */
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transition: opacity .1s ease;
    width: 300px;
  }
  
  .active  {
    animation: fadeout 2s ease .2s;
    color: red;
    float: left;
    font-size: 10px;
    font-weight: 400;
    left: 0;
    letter-spacing: .02em;
    margin-left: 24px;
    opacity: 1;
    /* pointer-events: none;  */
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transition: opacity .1s ease;
    width: 300px;
  }
  
  .label:hover {
    animation: fadeout 2s ease .2s;
    color: red;
    float: left;
    font-size: 10px;
    font-weight: 400;
    left: 0;
    letter-spacing: .02em;
    margin-left: 24px;
    opacity: 1;
    /* pointer-events: none; */
    position: absolute;
    text-transform: uppercase;
    top: 0;
    transition: opacity .1s ease;
    width: 300px;
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

  showLabel = () => {
    this.showActiveLabelTimer = setTimeout(() => {
      this.triggerRender = true;
      const active = this.observed[this.observed.length - 1]
      const pages = this.state.pages.map(obj => {
        return active.hash === obj.hash
          ? { ...obj, isActive: true, isActiveBar: true } : {...obj, isActive: false, isActiveBar: false};
       });
      this.setState({ pages });
      this.hideLabels();
    }, 600);
  }

  hideLabels = () => {
    this.hideLabelsTimer = setTimeout(() => {
      const pages = this.state.pages.map(obj => {
        return {...obj, isActive: false};
       });
      this.setState({ pages });
    }, 1000);
  }

  // handleClick = (pageNumber) => (event) => {
  //   console.log("page to navigate to", pageNumber)
  //   this.props.goToPage(pageNumber);
  //   event.preventDefault();
  // }

  render () {
    return (
      <div>
          <ul className="sidebar">
          {
            this.state.pages.map((anc, index) => (
            <li className="link" key={anc.hash}>
              <div id="btn1" className={`${anc.isActiveBar ? "r" :  "u"}`}></div>
              <a
                className={`label ${anc.isActive ? "active" : "hidden"}`}
                data-value={anc.hash}
                href={`#${anc.hash}`}
                // onClick={this.handleClick(index)}
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
