// MATERIAL UI
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";

const columns = [
  {
    flex: 1,
    field: "id",
    headerName: "ID",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "email",
    headerName: "Email",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "name",
    headerName: "Nombre",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    type: "text",
    field: "code",
    // headerAlign: "left",
    headerName: "Code",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "status",
    sortable: false,
    headerName: "Status",
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // headerClassName: "table_header",
  },
];

const rows = [
  { id: 1, email: "Snow@gmail.com", name: "Jon", code: 14, status: "status" },
  {
    id: 2,
    email: "Lannister@gmail.com",
    name: "Cersei",
    code: 31,
    status: "status",
  },
  {
    id: 3,
    email: "Lannister@gmail.com",
    name: "Jaime",
    code: 31,
    status: "status",
  },
  { id: 4, email: "Stark@gmail.com", name: "Arya", code: 11, status: "status" },
  {
    id: 5,
    email: "Targaryen@gmail.com",
    name: "Daenerys",
    code: null,
    status: "status",
  },
  {
    id: 6,
    email: "Melisandre@gmail.com",
    name: null,
    code: 150,
    status: "status",
  },
  {
    id: 7,
    email: "Clifford@gmail.com",
    name: "Ferrara",
    code: 44,
    status: "status",
  },
  {
    id: 8,
    email: "Frances@gmail.com",
    name: "Rossini",
    code: 36,
    status: "status",
  },
  {
    id: 9,
    email: "Roxie@gmail.com",
    name: "Harvey",
    code: 65,
    status: "status",
  },
];

function AddToolbar() {
  const handleClick = () => {};

  return (
    <>
      <GridToolbarContainer>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    </>
  );
}

export default function Table() {
  return (
    <Box sx={{ height: 430, width: "100%" }}>
      <DataGrid
        sx={{
          padding: "5px",
          boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
        100px 100px 80px rgba(0, 0, 0, 0.07)`,
          "& .table_header": {
            fontSize: "1.2rem",
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
