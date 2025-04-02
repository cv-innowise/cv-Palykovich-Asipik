import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import ArrowUpward from "@mui/icons-material/ArrowUpward";
// import ArrowDownward from "@mui/icons-material/ArrowDownward";
import styled from "styled-components";
import { useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 70,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 70,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 70,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const FormStyled = styled.form`
  position: fixed;
  min-width: 100%;
  padding: 20px 0px;
  margin-top: -20px;
`;

const TextFieldStyled = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-root {
    border-radius: 40px;
  }
`;

const TableStyled = styled(Table)`
  margin-top: 100px;
`;

const StickyTableHead = styled(TableHead)`
  position: sticky;
  top: 120px;
  z-index: 1;
  min-width: 100%;
`;

const Employees: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<keyof Data>("name");
  const theme = useTheme();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleSort = (columnId: keyof Data) => {
    const isAsc = sortColumn === columnId && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortColumn(columnId);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedRows = [...filteredRows].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (a[sortColumn] > b[sortColumn]) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <>
      <FormStyled
        onSubmit={handleSearchSubmit}
        color="primary"
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <div>{t("links.employees")}</div>
        <TextFieldStyled
          type="search"
          style={{ width: "320px" }}
          variant="outlined"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormStyled>
      <TableStyled stickyHeader aria-label="sticky table">
        <StickyTableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                onClick={() => handleSort(column.id)}
              >
                {column.label}{" "}
                {sortColumn === column.id ? (
                  sortDirection === "asc" ? (
                    <span>↑</span>
                  ) : (
                    <span>↓</span>
                  )
                ) : null}
              </TableCell>
            ))}
          </TableRow>
        </StickyTableHead>
        <TableBody>
          {sortedRows.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableStyled>
    </>
  );
};

export default Employees;
