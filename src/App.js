import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ReactPageScroller from "react-page-scroller";

import './App.css';

import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Footer from "./components/footer";
import SideNav from "./components/side-nav";

const pages =[
  {
    hash: "home",
    title: "Home",
    isActive: false,
    isObserved: false,
  },
  {
    hash: "about",
    title: "About",
    isActive: false,
    isObserved: false,
  },
  {
    hash: "news",
    title: "News",
    isActive: false,
    isObserved: false,
  }
]
class App extends React.Component {

  goToPage = (pageNumber) => {
    return this.reactPageScroller.goToPage(pageNumber)
  }

  pageOnChange = (pageNumber) => {
    console.log("current page", pageNumber)
  }

  renderMain = () => {
    return (
    <React.Fragment>
      <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
          <div className="child">
            <Home />
          </div>
          <div className="child">
            <About />
          </div>
          <div className="child">
            <News />
          </div>
      </ReactPageScroller>
      <SideNav pages={pages} goToPage={this.goToPage} />
      <Footer />
    </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => this.renderMain()} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
