import "./Home.css";

import React, { useEffect } from "react";
import FormOrdo from "../../component/formOrdo/FormOrdo";

const Home = () => {
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="home">
      <FormOrdo />
    </div>
  );
};

export default Home;
