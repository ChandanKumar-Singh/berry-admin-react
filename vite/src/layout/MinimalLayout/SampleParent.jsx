
import { Outlet } from 'react-router-dom';

// Define the UsersLayout to handle user-related routes
export const SampleParent = ({ title }) => {
    return (
        <>
            {/* {title && <h2>{title ?? "Sample Parent"}</h2>} */}
            <Outlet />
        </>
    );
};