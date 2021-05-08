import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Main from "../Main";
import Profile from "../Profile";
import EarthQuakeDetails from "../EarthQuakeDetails";

import { getProfile } from "../../services/profile";

import { Routes } from "../../constants";

const App = () => {
  const [currentProfile, setProfile] = useState(null);

  useEffect(() => {
    // In the real world this would be async and you would need to handle errors
    setProfile(getProfile());
  }, []);

  return (
    <BrowserRouter>
      <Header profile={currentProfile} />
      <Switch>
        <Route exact path={Routes.HOME}>
          <Main />
        </Route>
        <Route path={Routes.PROFILE}>
          <Profile profile={currentProfile} />
        </Route>
        <Route
          path={Routes.EARTH_QUAKE_DETAILS}
          component={EarthQuakeDetails}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
