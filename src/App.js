import React from 'react';
import {Home} from './components/Home'
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import { EmployeeDetail } from './components/EmployeeDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import GlobalProvider from './Context/GlobalState'
import "bootswatch/dist/quartz/bootstrap.min.css";

function App() {
  return (
    <div >
      <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-employee/_add" component={AddEmployee} />
          <Route exact path="/add-employee/:id" component={EditEmployee} />
          <Route exact path="/view-employee/:id" component={EmployeeDetail} />
        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
