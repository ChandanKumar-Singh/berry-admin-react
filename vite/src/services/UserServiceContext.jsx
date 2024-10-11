import React, { createContext, useContext, useState, useEffect } from 'react';

const UserServiceContext = createContext();

export const UserServiceProvider = ({ children }) => {
    const [users, setUsers] = useState({ // Initialize users as an object
        data: [], // To hold the array of users
        loading: false, // To track loading state
        error: null, // To hold error messages
        page: 1, // Current page
        totalResults: 0, // Total number of results (for pagination)
    });

    const fetchUsers = async (pageNumber) => {
        setUsers(prevState => ({ ...prevState, loading: true })); // Update loading state
        try {
            const response = await apiClient.get(`https://randomuser.me/api/?page=${pageNumber}`);

            setUsers({
                data: response.data.results,
                loading: false,
                error: null,
                page: pageNumber,
                totalResults: response.data.info.results,
            });
        } catch (err) {
            setUsers(prevState => ({
                ...prevState,
                loading: false,
                error: err.message, // Store error message
            }));
            alert(err.message); // Alert on error
        }
    };

    useEffect(() => {
        fetchUsers(users.page); // Fetch users on initial render
    }, [users.page]);

    return (
        <UserServiceContext.Provider value={{ users, fetchUsers }}>
            {children}
        </UserServiceContext.Provider>
    );
};

export const useUserService = () => {
    return useContext(UserServiceContext);
};
