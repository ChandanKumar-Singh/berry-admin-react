import { lazy } from 'react';

// Project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { SampleParent } from '../layout/MinimalLayout/SampleParent';
import GeneralSettingsPage from 'views/pages/settings/genera-lsettings';

// Dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// Utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const ComingSoonPage = Loadable(lazy(() => import('views/sample-page/CommingSoon')));
const UsersListPage = Loadable(lazy(() => import('views/pages/users/AllUser')));


// Sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// Helper function to create routes
const createRoute = (path, title, element, children = []) => ({
  path,
  title,
  element,
  children
});

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    createRoute('/', 'Dashboard Default', <DashboardDefault />),
    createRoute('dashboard', 'Dashboard Default', <DashboardDefault />, [
      createRoute('analytics', 'Analytics', <ComingSoonPage />),
      createRoute('sales', 'Sales Overview', <ComingSoonPage />)
    ]),

    // User Management Routes
    createRoute('users', 'User Management', <SampleParent title='User Management' />, [
      createRoute('list', 'User List', <SampleParent title='User List' />, [
        createRoute('all', 'All Users', <ComingSoonPage />),
        createRoute('active', 'Active Users', <ComingSoonPage />),
        createRoute('blocked', 'Blocked Users', <ComingSoonPage />)
      ]),
      createRoute('roles', 'User Roles', <ComingSoonPage />),
      createRoute('permissions', 'User Permissions', <ComingSoonPage />),
      createRoute('profile', 'User Profile', <UsersListPage />),
      createRoute('activity-log', 'User Activity Log', <ComingSoonPage />)
    ]),

    // Settings Routes
    createRoute('settings', 'Settings', <SampleParent />, [
      createRoute('general', 'General Settings', <GeneralSettingsPage />),
      createRoute('account', 'Account Settings', <ComingSoonPage />),
      createRoute('notifications', 'Notification Settings', <ComingSoonPage />),
      createRoute('security', 'Security Settings', <ComingSoonPage />),
      createRoute('appearance', 'Appearance', <ComingSoonPage />)
    ]),

    // Reports Routes
    createRoute('reports', 'Reports', <ComingSoonPage />, [
      createRoute('sales', 'Sales Report', <ComingSoonPage />),
      createRoute('users', 'User Report', <ComingSoonPage />),
      createRoute('performance', 'Performance Report', <ComingSoonPage />),
      createRoute('finance', 'Financial Report', <ComingSoonPage />)
    ]),

    // Support Routes
    createRoute('support', 'Support', <ComingSoonPage />, [
      createRoute('faqs', 'FAQs', <ComingSoonPage />),
      createRoute('contact', 'Contact Us', <ComingSoonPage />),
      createRoute('feedback', 'Feedback', <ComingSoonPage />),
      createRoute('bugs', 'Report a Bug', <ComingSoonPage />)
    ]),

    // Utilities Routes
    createRoute('utils', 'Utilities', <ComingSoonPage />, [
      createRoute('util-typography', 'Typography', <UtilsTypography />),
      createRoute('util-color', 'Color', <UtilsColor />),
      createRoute('util-shadow', 'Shadow', <UtilsShadow />)
    ]),

    // Sample Page Routes
    createRoute('sample-page', 'Sample Page', <SamplePage />),
  ]
};

export default MainRoutes;
