import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard/Dashboard";
const Home = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <Dashboard></Dashboard>
    </div>
  );
};

export default Home;
