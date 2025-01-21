import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl">Home page</h1>
      <button className="border p-4">Click</button>
      <Link to="/about"> About </Link>
    </div>
  );
};

export default Home;
