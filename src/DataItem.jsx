import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const DataItem = ({ todo }) => { // This component fetches and displays the details of a specific todo item based on its ID.
  // It uses the useParams hook to get the ID from the URL and fetches the todo details from an API.
  // The todo details are displayed in a structured format with the task, user ID, and completion status.
  // The completion status is visually represented with an icon that
  const [todos, setTodos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchTodos() { // This function fetches the todo details from the API using the ID from the URL.
      // It uses the fetch API to get the data from a dummy JSON API and updates the
      // state with the fetched todo details. If an error occurs during the fetch, it logs
      // the error to the console.
      await fetch(`https://dummyjson.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((err) => console.log(err));
    }
    fetchTodos();
  }, [id]);

  return (
    // This component returns a structured layout displaying the todo details.
    // It uses MUI components for styling and layout, including Box for layout and Typography for
    // text formatting. The completion status is represented with an IconButton that changes color
    // based on whether the todo is completed or not. If the todo is completed, it
    // shows a green check icon, otherwise, it shows a red hourglass icon.
    <>
      <Box
        padding={10}
        width={"100%"}
        display={"flex"}
        flexDirection="column"
        margin={"auto"}
      >
        <Typography variant="h4" gutterBottom>
          Todo Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          ID: {todos.id}
        </Typography>
        <Typography variant="h6" gutterBottom>
          User ID: {todos.userId}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Typography variant="h6" gutterBottom>
            <strong>Task :</strong> {todos.todo}
          </Typography>
          <IconButton
            sx={{
              backgroundColor: todos.completed ? "green" : "red",
              color: "white",
              width: 50,
              height: 50,
            }}
          >
            {todos.completed ? <DoneAllIcon /> : <HourglassTopIcon />}
          </IconButton>
        </Box>
      </Box>{" "}
      :<Box></Box>
    </>
  );
};
export default DataItem;
