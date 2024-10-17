// assets
import {
  IconDashboard,
  IconUsers,
  IconSettings,
  IconReport,
  IconHelpCircle,
  IconShieldLock,
  IconBellRinging,
  IconPaint,
  IconCurrencyDollar,
  IconFileInvoice,
  IconUserCheck,
  IconClipboardList,
  IconDeviceAnalytics,
  IconLayoutGrid,
  IconLock,
  IconCreditCard,
  IconHelp,
  IconMessageCircle2,
  IconPhoneCall
} from '@tabler/icons-react'; // Import more icons for different sections

// constant
const icons = {
  IconDashboard,
  IconUsers,
  IconSettings,
  IconReport,
  IconHelpCircle,
  IconShieldLock,
  IconBellRinging,
  IconPaint,
  IconCurrencyDollar,
  IconFileInvoice,
  IconUserCheck,
  IconClipboardList,
  IconDeviceAnalytics,
  IconLayoutGrid,
  IconLock,
  IconCreditCard,
  IconHelp,
  IconMessageCircle2,
  IconPhoneCall
};

/// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  // caption: 'Overview of your system’s performance',
  type: 'group',
  children: [
    {
      id: 'default-dashboard',
      title: 'Main Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false,
      badge: {
        color: 'primary',
        value: '3'
      }
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics',
      type: 'item',
      url: '/dashboard/analytics',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false
    },
    {
      id: 'sales-dashboard',
      title: 'Sales Overview',
      type: 'item',
      url: '/dashboard/sales',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    }
  ]
};

/// ==============================|| USERS MENU ITEMS ||============================== //

const users = {
  id: 'users',
  title: 'User Management',
  // caption: 'Manage your users, roles, and permissions',
  type: 'group',
  children: [
    {
      id: 'users-list',
      title: 'User List',
      type: 'collapse',
      icon: icons.IconUsers,
      // path: '/users/list',
      children: [
        {
          id: 'all-users',
          title: 'All Users',
          type: 'item',
          url: '/users/list/all',
          breadcrumbs: false,
          target: true,
          children: [
            {
              id: 'user-1',
              title: 'User 1',
              type: 'item',
              url: '/users/list/all/user-1',
              breadcrumbs: false
            },
            {
              id: 'user-2',
              title: 'User 2',
              type: 'item',
              url: '/users/list/all/user-2',
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'active-users',
          title: 'Active Users',
          type: 'item',
          url: '/users/list/active',
          breadcrumbs: false
        },
        {
          id: 'blocked-users',
          title: 'Blocked Users',
          type: 'item',
          url: '/users/list/blocked',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'user-roles',
      title: 'Roles & Permissions',
      type: 'item',
      url: '/users/roles',
      icon: icons.IconShieldLock,
      breadcrumbs: false
    },
    {
      id: 'user-profile',
      title: 'User Profiles',
      type: 'item',
      url: '/users/profile',
      icon: icons.IconUserCheck,
      breadcrumbs: false
    },
    {
      id: 'activity-log',
      title: 'User Activity Log',
      type: 'item',
      url: '/users/activity-log',
      icon: icons.IconClipboardList,
      breadcrumbs: false
    }
  ]
};

/// ==============================|| SETTINGS MENU ITEMS ||============================== //

const settings = {
  id: 'settings',
  title: 'Settings',
  // caption: 'Configure your system preferences',
  type: 'group',
  children: [
    {
      id: 'general-settings',
      title: 'General Settings',
      type: 'item',
      url: '/settings/general',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'account-settings',
      title: 'Account Settings',
      type: 'item',
      url: '/settings/account',
      icon: icons.IconUserCheck,
      breadcrumbs: false
    },
    {
      id: 'notification-settings',
      title: 'Notification Settings',
      type: 'item',
      url: '/settings/notifications',
      icon: icons.IconBellRinging,
      breadcrumbs: false
    },
    {
      id: 'security-settings',
      title: 'Security Settings',
      type: 'item',
      url: '/settings/security',
      icon: icons.IconLock,
      breadcrumbs: false
    },
    {
      id: 'appearance-settings',
      title: 'Appearance',
      type: 'item',
      url: '/settings/appearance',
      icon: icons.IconPaint,
      breadcrumbs: false
    }
  ]
};

/// ==============================|| REPORTS MENU ITEMS ||============================== //

const reports = {
  id: 'reports',
  title: 'Reports',
  caption: 'View and generate reports',
  type: 'group',
  children: [
    {
      id: 'sales-report',
      title: 'Sales Report',
      type: 'item',
      url: '/reports/sales',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    },
    {
      id: 'user-report',
      title: 'User Report',
      type: 'item',
      url: '/reports/users',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'performance-report',
      title: 'Performance Report',
      type: 'item',
      url: '/reports/performance',
      icon: icons.IconLayoutGrid,
      breadcrumbs: false
    },
    {
      id: 'financial-report',
      title: 'Financial Report',
      type: 'item',
      url: '/reports/finance',
      icon: icons.IconCreditCard,
      breadcrumbs: false
    }
  ]
};

/// ==============================|| SUPPORT MENU ITEMS ||============================== //

const support = {
  id: 'support',
  title: 'Support & Help',
  // caption: 'Get help or report an issue',
  type: 'group',
  children: [
    {
      id: 'faqs',
      title: 'FAQs',
      type: 'item',
      url: '/support/faqs',
      icon: icons.IconHelp,
      breadcrumbs: false
    },
    {
      id: 'contact-support',
      title: 'Contact Support',
      type: 'item',
      url: '/support/contact',
      icon: icons.IconPhoneCall,
      breadcrumbs: false
    },
    {
      id: 'feedback',
      title: 'Feedback',
      type: 'item',
      url: '/support/feedback',
      icon: icons.IconMessageCircle2,
      breadcrumbs: false
    }
  ]
};

/// ==============================|| EXPORT MENU CONFIGURATION ||============================== //

const menuItems = {
  items: [dashboard, users, settings, reports, support]
};

export default menuItems;
