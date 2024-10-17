import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useState } from 'react';
import { Button, Card, CardContent, CardMedia, duration, Grid, Popover, Skeleton, Tab } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { margin } from '@mui/system';
import { useTheme } from '@emotion/react';

// Define columns (head cells) for the table
const headCells = [
  {
    id: 'sr_no',
    numeric: false,
    center: true,
    disablePadding: true,
    label: 'Sr.'
  },
  {
    id: 'firstName',
    numeric: false,
    disablePadding: true,
    label: 'First Name'
  },
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Last Name'
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Phone'
  },
  {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'Age'
  },
  {
    id: 'company',
    numeric: false,
    disablePadding: false,
    label: 'Company'
  }
];

// Sorting functions
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// EnhancedTableHead component
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all users'
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : headCell.center ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
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
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

/// EnhancedTableToolbar component
function EnhancedTableToolbar(props) {
  const { numSelected, filter } = props;

  return (
    <>
      <Toolbar
        sx={[
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
          },
          numSelected > 0 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
          }
        ]}
      >
        {numSelected > 0 ? (
          <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography sx={{ flex: '1 1 100%' }} variant="h3" id="tableTitle" component="div">
            Users List
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>

      {/* Filters section */}
      <Box sx={{ px: 2, py: 1 }}>{filter}</Box>
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  filter: PropTypes.element
};

const UserTableCell = ({ user, labelId }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  // Function to handle mouse enter on the Popover
  const handlePopoverEnter = () => {
    setAnchorEl(anchorEl); // Keep the popover open
  };

  // Function to handle mouse leave from the Popover
  const handlePopoverLeave = () => {
    setAnchorEl(null); // Close the popover
  };

  // Boolean to determine if Popover is open
  const open = Boolean(anchorEl);

  return (
    <>
      <TableCell component="th" id={labelId} scope="row" padding="none" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>{user.firstName}</span>
      </TableCell>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        inert={open ? 'auto' : 'none'}
        anchorOrigin={{
          vertical: 15,
          horizontal: 15
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onMouseEnter={handlePopoverEnter} // Keep open when hovered
        onMouseLeave={handlePopoverLeave} // Close when not hovered
        sx={{ pointerEvents: open ? 'auto' : 'none' }} // Prevent mouse events when closed
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            padding: 2 // Add padding around the popover content
          }}
        >
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 70 }}>
              {/* Adjust maxWidth as needed */}
              <CardMedia
                component="img"
                sx={{
                  width: { xs: '70px' },
                  height: { xs: '70px' },
                  objectFit: 'cover'
                }}
                image={user.image} // Use user's profile picture URL
                alt={`${user.firstName} ${user.lastName}`}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={{ width: '100%' }}>
              <Typography gutterBottom variant="h6" component="div">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> {user.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.state}, {user.address.zip}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};

/// Main EnhancedTable component
export default function EnhancedTable({ users = [], onLoadMore, filter, loading }) {
  const theme = useTheme();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('firstName');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    if (page > 0 && (users.length <= rowsPerPage * page)) setPage(0);
  }, [users]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // onLoadMore();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const visibleRows = React.useMemo(
    () => [...users].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, users]
  );

  /// Calculate total pages
  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} filter={filter} />
        <TableContainer
          sx={{
            maxHeight: '70vh',
            margin: '10px'
          }}
        >
          <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={users.length}
            />
            <TableBody>
              {loading
                ? renderSkeletonRows()
                : visibleRows.map((user, index) => {
                  const isItemSelected = selected.includes(user.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, user.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={user.id}
                      selected={isItemSelected}
                    >
                      {/* checkbox */}
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{index + 1 + page * rowsPerPage}</TableCell>
                      {/* first name */}
                      <UserTableCell user={user} labelId={labelId}>
                        {/* <TableCell component="th" id={labelId} scope="row" padding="none"> */}
                        {user.firstName}
                        {/* </TableCell> */}
                      </UserTableCell>
                      <TableCell align="left">{user.lastName}</TableCell>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="left">{user.phone}</TableCell>
                      <TableCell align="right">{user.age}</TableCell>
                      <TableCell align="left">{user.company.name}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        {page + 1 >= totalPages && users.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="outlined" onClick={onLoadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Paper>
      {/* <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" /> */}
    </Box>
  );

  function renderSkeletonRows() {
    const sx = {
      bgcolor: theme.palette.divider,
      color: 'primary.main',
      duration: 0.5
    };
    return [...Array(rowsPerPage)].map((_, index) => (
      <TableRow key={index}>
        <TableCell padding="checkbox">
          <Skeleton variant="text" width={40} sx={sx} />
        </TableCell>
        {/* For each column, render a skeleton */}
        <TableCell align="left">
          <Skeleton variant="text" width={40} sx={sx} />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" width={100} sx={sx} />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" width={100} sx={sx} />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" width={120} sx={sx} />
        </TableCell>
        <TableCell align="right">
          <Skeleton variant="text" width={30} sx={sx} />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" width={100} sx={sx} />
        </TableCell>
      </TableRow>
    ));
  }
}

EnhancedTable.propTypes = {
  users: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  filter: PropTypes.element,
  loading: PropTypes.bool
};
