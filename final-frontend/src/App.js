import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  EmployeeContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  NewTaskContainer,
  EditTaskContainer
} from './components/containers';
import AllEmployeesView from "./components/views/AllEmployeesView";

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/employees" component={AllEmployeesContainer} />
            <Route exact path="/employee/:id" component={EmployeeContainer} />
            <Route exact path="/tasks" component={AllTasksContainer} />
            <Route exact path="/newtask" component={NewTaskContainer} />
            <Route exact path="/task/:id" component={TaskContainer} />
            <Route exact path="/edittask/:id" component={EditTaskContainer} />
          </Switch>
        </div>
      </ThemeProvider>
  );
}

export default App;

