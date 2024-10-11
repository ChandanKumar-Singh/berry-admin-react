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
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { UserService } from 'services';
import MainCard from 'ui-component/cards/MainCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EnhancedTable from './Table';

const UsersList = () => {
    const { users, getUsers } = UserService();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    console.log(users);

    useEffect(() => {
        setFilteredUsers(users.data);
        if (users.data.length === 0) fetchUsers();
    }, []);

    const fetchUsers = () => {
        getUsers(users.page + 1).then((r) => {
            console.log(`userlist call from fetchUsers!`);
            if (r) {
                console.log(users);
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
            const matchesSearch = user.attributes.name.toLowerCase().includes(lowerCaseTerm);
            const matchesGender = gender ? user.attributes.gender === gender : true;
            return matchesSearch && matchesGender;
        });
        setFilteredUsers(filtered);
    };

    // Reset filters and search
    const resetFilters = () => {
        setSearchTerm('');
        setSelectedGender('');
        setFilteredUsers(users.data);
    };

    const handleFetchUsers = () => {
        fetchUsers();
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
            fetchUsers()
        }
    };


    return (
        <MainCard content={false}>
            {/* {JSON.stringify(users.loading)} */}
            <EnhancedTable users={users.data || []} onLoadMore={loadMore} />
        </MainCard>
    );


    function actions() {
        return (
            <Grid container spacing={2} alignItems="center">
                {/* Search Bar */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField label="Search Users" variant="outlined" value={searchTerm} onChange={handleSearch} fullWidth size="small" />
                </Grid>

                {/* Gender Filter */}
                <Grid item xs={12} sm={4} md={3}>
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

                {/* Reset Button */}
                <Grid item xs={12} sm={2} md={2}>
                    <IconButton color="secondary" onClick={resetFilters} size="large" title="Reset Filters">
                        <ClearIcon />
                    </IconButton>
                </Grid>

                {/* Reload Button */}
                <Grid item xs={12} sm={2} md={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFetchUsers}
                        startIcon={<RefreshIcon />}
                        disabled={users.loading}
                        fullWidth
                    >
                        Reload
                    </Button>
                </Grid>
            </Grid>
        );
    }
};

export default UsersList;
