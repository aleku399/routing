/* eslint-disable no-restricted-globals */
import React from 'react';

import "./side.css";

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
          ? {...obj, isActive: true} : {...obj, isActive: false};
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
    }, 700);
  }

  handleClick = (pageNumber) => (event) => {
    console.log("page to navigate to", pageNumber)
    this.props.goToPage(pageNumber);
    event.preventDefault();
  }

  render () {
    return (
      <div>
          <ul className="sidebar">
          {
            this.state.pages.map((anc, index) => (
            <li className="link" key={anc.hash}>
              <div id="btn1" className={`${anc.isActive ? "r" :  "u"}`}></div>
              <a
                className={`label ${anc.isActive ? "active" : "hidden"}`}
                data-value={anc.hash}
                href={`#${anc.hash}`}
                onClick={this.handleClick(index)}
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
