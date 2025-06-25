import React from "react";
import {
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DatagridToolbar = () => {
  // This component serves as a custom toolbar for the data grid.
  // It includes buttons for exporting data, filtering, and quick searching.
  // It uses MUI X's GridToolbar components to provide these functionalities.
  // The toolbar is styled using MUI's Box component for layout and spacing.
  return (
    <div>
      <Box
        sx={{ display: "flex", gap: 4, justifyContent: "flex-end", padding: 1 }}
      >
        <GridToolbarExport
          csvOptions={{ fileName: "todos_data" }}
          printOptions={{ disableToolbarButton: true }}
        />
        <GridToolbarFilterButton />
        <GridToolbarQuickFilter />
      </Box>
    </div>
  );
};

export default DatagridToolbar;
