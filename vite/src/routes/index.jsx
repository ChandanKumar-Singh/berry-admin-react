import { createBrowserRouter } from 'react-router-dom';
import { wrappedRoutes } from './PageWraperRouter';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter(wrappedRoutes, {
  basename: import.meta.env.VITE_APP_BASE_NAME || '/'
});

export default router;

