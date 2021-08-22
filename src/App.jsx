import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import CoursePage from "./Components/Pages/CoursePage";
import BlogPage from "./Components/Pages/BlogPage";
import ContactPage from "./Components/Pages/ContactPage";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/course" component={CoursePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
