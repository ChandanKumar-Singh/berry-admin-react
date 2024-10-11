import { createBrowserRouter } from 'react-router-dom';
import { allRoutes, PageWraperRouter } from './PageWraperRouter';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([...allRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router; 
