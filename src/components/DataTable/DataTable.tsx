import * as React from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { rows } from './data';
import { useMemo, useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { StyledTableContainer } from './DataTable.styled';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface User {
  id: number;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    fullName: string;
    avatar: string;
  };
  departmentName: string;
  positionName: string;
  role: string;
}

type Order = 'asc' | 'desc';

function getComparator(order: Order, orderBy: string): (a: User, b: User) => number {
  return (a: User, b: User) => {
    const valueA = orderBy === 'fullName' ? a.profile.fullName : a[orderBy as keyof User];
    const valueB = orderBy === 'fullName' ? b.profile.fullName : b[orderBy as keyof User];
    if (valueB < valueA) return order === 'desc' ? -1 : 1;
    if (valueB > valueA) return order === 'desc' ? 1 : -1;
    return 0;
  };
}

interface HeadCell {
  id: string;
  label: string;
}

const headCells: HeadCell[] = [
  { id: 'avatar', label: '' },
  { id: 'fullName', label: 'Full Name' },
  { id: 'email', label: 'Email' },
  { id: 'positionName', label: 'Position' },
  { id: 'role', label: 'Role' },
  { id: 'departmentName', label: 'Department' },
  { id: 'manage', label: '' },
];

interface SimpleTableHeadProps {
  order: Order;
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
}

function SimpleTableHead(props: SimpleTableHeadProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            {['fullName', 'email', 'positionName', 'role', 'departmentName'].includes(
              headCell.id
            ) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export const EmployeesTable = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<string>('departmentName');

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = useMemo(() => [...rows].sort(getComparator(order, orderBy)), [order, orderBy]);

  return (
    <StyledTableContainer>
      <Table aria-labelledby="employeesTable">
        <SimpleTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
        <TableBody>
          {sortedRows.map((row) => {
            console.log(row.profile.avatar);
            return (
              <TableRow key={row.id}>
                <TableCell>
                  <Avatar alt={row.profile.firstName} src={row.profile.avatar} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.profile.fullName}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.positionName}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};
