import {
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    CircularProgress,
    IconButton,
    Grid,
    Typography,
    InputAdornment
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { UserService } from 'services';
import MainCard from 'ui-component/cards/MainCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EnhancedTable from './Table';
import { IconClearAll, IconSearch } from '@tabler/icons-react';
import { ClearRounded } from '@mui/icons-material';

const UsersList = () => {
    const { users, getUsers } = UserService();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        if (users.data.length === 0) fetchUsers();
    }, []);
    useEffect(() => {
        setFilteredUsers(users.data);
    }, [users]);

    const fetchUsers = (page) => {
        getUsers(page ?? (users.page + 1)).then((r) => {
            console.log(`userlist call from fetchUsers!`);
            if (r) {
                setFilteredUsers(users.data);
            }
        });
    };

    // Handle user search input
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        filterUsers(event.target.value, selectedGender);
    };

    // Handle gender filter selection
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        filterUsers(searchTerm, event.target.value);
    };

    // Filter users based on search term and gender
    const filterUsers = (term, gender) => {
        if (!term && !gender) {
            setFilteredUsers(users.data);
            return;
        }
        const lowerCaseTerm = term.toLowerCase();
        const filtered = users.data.filter((user) => {
            const matchesSearch = `${user.firstName} ${user.lastName}`.toLowerCase().includes(lowerCaseTerm);
            const matchesGender = gender ? (gender === '' ? true : gender === user.gender) : true;
            console.log(`matchesSearch: ${matchesSearch} matchesGender: ${matchesGender} `);
            return matchesSearch && matchesGender;
        });
        console.log(`filtered: ${filtered.length}`);
        setFilteredUsers(filtered);
    };

    // Reset filters and search
    const resetFilters = () => {
        setSearchTerm('');
        setSelectedGender('');
        setFilteredUsers(users.data);
    };

    const handleRefresh = () => {
        fetchUsers(1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredUsers.length / usersPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    const loadMore = () => {
        if (users.total > users.data.length) {
            fetchUsers();
        }
    };

    return (
        <MainCard content={false}>
            {/* {JSON.stringify(users.loading)} */}
            <EnhancedTable users={filteredUsers || []} onLoadMore={loadMore} filter={Actions()} loading={users.loading} />
        </MainCard>
    );

    function Actions() {
        return (
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                {/* Search Bar */}
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        label="Search Users"
                        placeholder="Search by name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearch}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {searchTerm && (
                                        <IconButton
                                            onClick={resetFilters}
                                            edge="end"
                                        >
                                            <ClearRounded size={15} />
                                        </IconButton>
                                    )}
                                    <IconButton onClick={() => handleSearch({ target: { value: searchTerm } })}>
                                        <IconSearch size={15} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>


                {/* Gender Filter */}
                <Grid item xs={6} sm={4} md={4}>
                    <FormControl variant="outlined" fullWidth size="small">
                        <InputLabel>Filter by Gender</InputLabel>
                        <Select value={selectedGender} onChange={handleGenderChange} label="Filter by Gender">
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Reset and Reload Buttons (stacked in smaller screens) */}
                <Grid item container xs={12} sm={4} md={4} spacing={2} justifyContent="flex-end">
                    {/* Reset Button */}
                    <Grid item xs={6} sm={6} md={6}>
                        <Button onClick={resetFilters} variant="outlined" color="secondary" startIcon={<ClearIcon />} fullWidth size="small">
                            Reset
                        </Button>
                    </Grid>

                    {/* Reload Button */}
                    <Grid item xs={6} sm={6} md={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRefresh}
                            startIcon={<RefreshIcon />}
                            disabled={users.loading}
                            fullWidth
                            size="small"
                        >
                            Reload
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
};

export default UsersList;
