import React from "react";
import { Outlet } from "react-router-dom";
import CategoryDirectory from "../../components/categories-directory/categories-directory.component";
const Home = () => {
  

  return (
    <div>
      <CategoryDirectory  />
      <Outlet />
    </div>
  );
};

export default Home;
