import React from "react";
import UserContext from "../utiles/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, clss } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Hello Azad I am Learning React - {clss}</h1>
        <h2>
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </h2>
        <h2>I am {name}</h2>
        <h2>I am from : {location}</h2>
        <h2>count : {count}</h2>
        <button
          className="border border-black px-3"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h3>ID : @Vanshujjainwal</h3>
      </div>
    );
  }
}

export default UserClass;
