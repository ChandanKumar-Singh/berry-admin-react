import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from 'api/base/ApiService';
import { ToastContent, toasts } from 'utils/ToastUtils';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

const UserServiceContext = createContext();

export const UserServiceProvider = ({ children }) => {
    const [users, setUsers] = useState({
        loading: false,
        error: null,
        page: 0,
        total: 0,
        data: []
    });

    const [posts, setPosts] = useState({
        data: [],
        loading: false,
        error: null
    });

    // Fetch Users with pagination support
    const getUsers = async (pageNumber) => {
        try {
            if (users.data.length == 0) pageNumber = 1;
            const url = `https://dummyjson.com/users?limit=30&skip=${(pageNumber - 1) * 30}`;
            setUsers((prevUsers) => ({ ...prevUsers, loading: pageNumber === 1 }));
            toasts.s(`Improved styling for the toast messages and icons.\n${pageNumber}`, { autoClose: 3000, onRetry: () => getUsers(pageNumber) });

            const response = await apiService.get(url);
            console.log(`pre-getUsers call from provider page - ${pageNumber} `);

            if (response.status) {
                setUsers({
                    data: pageNumber > 1 ? [...users.data, ...(response.data.users ?? [])] : response.data.users ?? [],
                    loading: false,
                    error: null,
                    page: pageNumber,
                    total: response.data.total || 0,
                });
            } else {
                setUsers((prevUsers) => ({
                    ...prevUsers,
                    loading: false,
                    error: response.message
                }));
            }
        } catch (error) {
            setUsers((prevUsers) => ({
                ...prevUsers,
                loading: false,
                error: error.message
            }));
            console.error(`Error fetching users: ${error.message}`);
        }
    };

    // Fetch Posts
    const getAllPosts = async () => {
        setPosts({ ...posts, loading: true });
        const response = await apiService.get(`https://jsonplaceholder.typicode.com/posts`);

        if (response.status) {
            setPosts({
                data: response.data,
                loading: false,
                error: null
            });
            return true;
        } else {
            setPosts({
                ...posts,
                loading: false,
                error: response.message
            });
        }
        return false;
    };

    useEffect(() => {
        getUsers(users.page + 1);
    }, []);

    return (
        <UserServiceContext.Provider value={{ users, posts, getUsers, getAllPosts }}>
            {children}
        </UserServiceContext.Provider>
    );
};

export const UserService = () => {
    return useContext(UserServiceContext);
};
