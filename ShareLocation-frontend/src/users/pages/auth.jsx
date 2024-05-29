import React, { useState, useContext } from "react";
import { Tabs, Tab } from "@material-ui/core";

import Card from "../../shared/components/UIElements/Card";
import Login from "../components/login";
import SignUp from "../components/signUp";

import { AuthContext } from "../../shared/context/authContext";

import "./auth.css";

const Auth = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const auth = useContext(AuthContext);

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Card className="authentication">
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Login" disableRipple />
        <Tab label="Sign Up" disableRipple />
      </Tabs>
      {selectedTab === 0 ? <Login auth={auth} /> : <SignUp auth={auth} />}
    </Card>
  );
};

export default Auth;
