

import PageWrapper from 'utils/PageWrapper';
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';
import DefaultRoutes from './DefaultRoutes';

// Helper to wrap routes
export const PageWraperRouter = (routes) => {
    return routes.map((route, index) => ({
        ...route,
        element: (
            <PageWrapper key={index} title={route.title || import.meta.env.REACT_APP_META_TITLE}>
                {route.element}
            </PageWrapper>
        ),
        // Recursively handle child routes
        children: route.children ? PageWraperRouter(route.children) : undefined
    }));
};

// Generate wrapped routes
export const allRoutes = [MainRoutes, LoginRoutes, ...DefaultRoutes];
export const wrappedRoutes = PageWraperRouter(allRoutes);
