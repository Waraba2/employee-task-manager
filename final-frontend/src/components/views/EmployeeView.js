import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import {Box, Button} from "@mui/material";



const EmployeeView = (props) => {
    const theme = useTheme();
    const customStyles = {
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  };

     const customButtonStyles = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.button.fontSize,
    fontFamily: theme.typography.fontFamily,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'background-color 250ms ease-in-out',

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  };

  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div>      
      <h1>{employee.firstname}</h1>
      <h3>{employee.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <Box style={customStyles} >Assigned tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.description}</h4>
            </Link>
            <Button style={customButtonStyles} onClick={() => editTask({id:task.id, employeeId: null})}>x</Button>
            </div>
          );
        })}</Box>
        <div>Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.description}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default EmployeeView;