import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="font-bold p-2 m-2 text-2xl">
      {/* <h1>This is About page</h1>
      <User
        name={"Bunty Function"}
        Location={"New Delhi"}
        fun={"Function Component"}
      /> */}
      <UserClass
        name={"Bunty Ujjainwal"}
        location={"New Delhi"}
        clss={"Class Component"}
      />
    </div>
  );
};

export default About;
