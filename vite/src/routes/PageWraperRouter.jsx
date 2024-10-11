import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';
import DefaultRoutes from './DefaultRoutes';
import PageWrapper from 'utils/PageWrapper';

export const allRoutes = [MainRoutes, LoginRoutes, ...DefaultRoutes];


export const PageWraperRouter = () => {
    return allRoutes.map((route, index) => {
        return {
            ...route,
            element: (
                <PageWrapper key={index} title={route.title || import.meta.env.REACT_APP_META_TITLE}>
                    {route.element}
                </PageWrapper>
            ),
            // Handle children if route has nested routes
            children: route.children
                ? route.children.map((childRoute, childIndex) => ({
                      ...childRoute,
                      element: (
                          <PageWrapper key={childIndex} title={childRoute.title || import.meta.env.REACT_APP_META_TITLE}>
                              {childRoute.element}
                          </PageWrapper>
                      )
                  }))
                : undefined
        };
    });
};

 
