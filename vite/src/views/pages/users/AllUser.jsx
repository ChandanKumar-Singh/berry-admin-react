import useApi from 'api/base/useApi';
import React, { useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';

const UsersList = () => {
    const { data, loading, error, fetchData } = useApi('https://randomuser.me/api/', 'get', null, { token: true });

    const handleFetchUsers = () => {
        fetchData();
    };

    /// call on useEffect
    useEffect(() => {
        fetchData().then(() => {
            console.log('Data fetched');
        });
    }, []);


    return (
        <MainCard title="Sample Card">
            <div>
                <h2>Users List</h2>
                <button onClick={handleFetchUsers}>Fetch Users</button>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && (
                    <ul>
                        {JSON.stringify(data)}
                    </ul>
                )}
            </div>
        </MainCard>
    );
};

export default UsersList;
