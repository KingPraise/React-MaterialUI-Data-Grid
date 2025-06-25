import { Button, Card, CardHeader } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AssignmentLateRoundedIcon from "@mui/icons-material/AssignmentLateRounded";
import DatagridToolbar from "./DatagridToolbar";

// This component fetches and displays a list of todos in a data grid format.
// Each todo can be clicked to view its details on a separate page.
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    renderCell: (params) => {
      return (
        <Link
          to={`/${params.value}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="body2" color="textSecondary">
            {params.value}
          </Typography>
        </Link>
      );
    },
  },
  {
    field: "userId",
    headerName: "User ID",
    width: 70,
  },
  {
    field: "todo",
    headerName: "Todo",
    width: 400,
  },
  {
    field: "completed",
    headerName: "Completed",
    width: 400,
    renderCell: (params) => {
      return params.value ? (
        <AssignmentTurnedInRoundedIcon
          style={{ color: "green", fontSize: 30 }}
        />
      ) : (
        <AssignmentLateRoundedIcon style={{ color: "red", fontSize: 30 }} />
      );
    },
  },
];
// The Data component fetches todos from an API and displays them in a data grid.
// It uses the DataGrid component from MUI X for displaying the data in a tabular format.
// It also includes a custom toolbar for exporting, filtering, and searching the data.
const Data = () => {
  const [todos, setTodos] = useState([]); // State to hold the fetched todos
  const [loading, setLoading] = useState(true); // State to manage loading state

    // useEffect hook to fetch todos from the API when the component mounts
  useEffect(() => {
    async function fetchTodos() {
      setLoading(true);
      await fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data.todos))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } // Call the fetchTodos function to initiate the API call
    fetchTodos();
  }, []);
  console.log(todos); // Log the fetched todos to the console

  return (
    // Main container for the Data component
    <div>
      <Card sx={{ padding: 5 }}>
        <CardHeader title="Todo List"></CardHeader> 
        <DataGrid
          checkboxSelection
          autoHeight
          components={{ Toolbar: DatagridToolbar, BaseButton: Button }}
          loading={loading}
          sx={{ height: 500 }}
          columns={columns}
          rows={todos}
          componentsProps={{ BaseButton: { variant: "outlined" } }}
        />
      </Card>
    </div>
  );
};

export default Data;
