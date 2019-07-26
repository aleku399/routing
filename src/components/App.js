import React from "react";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import Home from "./home";
import About from "./about";
import News from "./news"
// import SideNav from "./side-bar";
// import SideNav from "./side-bar";

// const pages =[
//   {
//     hash: "home",
//     title: "Home",
//     isActive: false,
//     isActiveBar: false,
//     isObserved: false,
//   },
//   {
//     hash: "about",
//     title: "About",
//     isActive: false,
//     isActiveBar: false,
//     isObserved: false,
//   },
//   {
//     hash: "news",
//     title: "News",
//     isActive: false,
//     isActiveBar: false,
//     isObserved: false,
//   }
// ]


class App extends React.Component {
  render() {
    return (
    <Fullpage>
      <FullPageSections>
          <FullpageSection>
              <Home />
          </FullpageSection>
          <FullpageSection>
              <About />
          </FullpageSection>
          <FullpageSection>
              <News />  
          </FullpageSection>
      </FullPageSections>
    </Fullpage>
    );
  }
}

export default App;
