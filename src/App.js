import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teacherss from "./pages/teacher";
import Headers from "./layout/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
    <div className="app">
      <Router>
        <Headers />
        <div className="main_content">
          <Switch>
            <Route exact path="/">
              <h1>Trang home</h1>
            </Route>
            <Route path="/giang-vien">
              <Teacherss />
            </Route>
          </Switch>
        </div>

        
      </Router>
    </div>
    </Provider>
  );
};

export default App;
