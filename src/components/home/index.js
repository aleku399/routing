import React from 'react'
import App from '../Carousel'

import j2 from "../../static/images/jul23.jpg"
import j3 from "../../static/images/jul28.jpg"
import j4 from "../../static/images/jul31.jpg"

const sectionStyle = {
  padding: '2.5vw 3.5vw 12vh 3.5vw',
  boxSizing: 'border-box',
  height: '100vh',
};


const arrImages =  [j2, j3, j4]

class Home extends React.Component {
    render() {
      return (
      <div className="container" id="home" style={sectionStyle} ref={this.props.forwardedRef}> 
        <div className="content-wrap"> 
          <App images={arrImages} />
        </div>
      </div> 
    )
  }
}

export default React.forwardRef((props, ref) => {
  return <Home {...props} forwardRef={ref} />
});
