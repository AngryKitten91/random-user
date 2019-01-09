import React, { Component } from "react";
import "./User.css";

import Image from "components/Image";

class User extends Component {
  render() {
    const {
      name: { first, last },
      picture: { large },
      email,
      gender,
      dob: { age }
    } = this.props.person;

    return (
      <div className="flex user user-container">
        <div>
          <p className="name">
            {`${capitalLetter(first)} ${capitalLetter(last)}`} 
          </p>
          <a className="mail" href={`mailto:${email}`}>
            {email}
          </a>
          <p className="age">Age: {age} Gender: {gender === "male" ? "♂️" : "♀️"}</p>
        </div>
        <div>
          <Image data={large} />
        </div>
      </div>
    );
  }
}

function capitalLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default User;
