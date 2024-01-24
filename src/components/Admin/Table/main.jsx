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
    field: "date",
    headerName: "Fecha",
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
    field: "quantity",
    headerAlign: "left",
    headerName: "Cantidad",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "fullName",
    sortable: false,
    headerName: "Formt",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    headerClassName: "table_header",
  },
];

const rows = [
  { id: 1, date: "00/00/0000", name: "Jon", quantity: 14 },
  { id: 2, date: "00/00/0000", name: "Cersei", quantity: 31 },
  { id: 3, date: "00/00/0000", name: "Jaime", quantity: 31 },
  { id: 4, date: "00/00/0000", name: "Arya", quantity: 11 },
  { id: 5, date: "00/00/0000", name: "Daenerys", quantity: null },
  { id: 6, date: "00/00/0000", name: null, quantity: 150 },
  { id: 7, date: "00/00/0000", name: "Ferrara", quantity: 44 },
  { id: 8, date: "00/00/0000", name: "Rossini", quantity: 36 },
  { id: 9, date: "00/00/0000", name: "Harvey", quantity: 65 },
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
            fontWeight: 400,
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
