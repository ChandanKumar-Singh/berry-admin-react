import { element } from 'prop-types';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// Loadable component for lazy loading
const NotFoundPage = Loadable(lazy(() => import('views/pages/default/NotFound')));

// Wildcard route to catch all unmatched paths
const DefaultRoutes = [
    {
        path : '*',
        element : <NotFoundPage />

    }

]

export default DefaultRoutes;
