import React, { Component } from "react";
import userIcon from "./../style/lib/icons/user-icon.svg";
import bottomArrow from "./../style/lib/icons/bottom-arrow.svg";

class User extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Jan Kowalski"
    };
  }

  render() {
    return (
      <div className="user border">
        <img src={userIcon} alt="user-icon" />
        <span>{this.state.userName}</span>
        <img src={bottomArrow} alt="bottom-arrow" />
      </div>
    );
  }
}

export default User;
