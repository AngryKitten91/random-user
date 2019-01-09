import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  

  render() {
     const {data} =this.props
    return (
      <div>
        <img className="profile-img" src={data} alt="" />
      </div>
    );
  }
}

export default Image;
