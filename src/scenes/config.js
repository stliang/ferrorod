import { ADMIN, ANONYMOUS, BASIC, PAID } from '../security/roles';

import Assets from './Assets';
import Landing from './Landing';
import Grasses from './Grasses';
import Notify from './Notify';
import Schedule from './Schedule';
import Settings from './Settings';
import WorkFlows from './WorkFlows';

const anonymousNavItems = [
    {
        key: "6",
        description: 'Products and services',
        exactRoute: true,
        icon: "home",
        page: Landing,
        path: '/',
        primaryText: "Landing",
        privileges: ANONYMOUS,
    }
]

const basicNavItems = [
    {
        key: "5",
        description: 'Notification preference',
        exactRoute: false,
        icon: "notifications_none",
        page: Notify,
        path: '/notify',
        primaryText: "Notify",
        privileges: BASIC,
    },
    {
        key: "4",
        description: 'Grasses',
        exactRoute: false,
        icon: "eco",
        page: Grasses,
        path: '/grasses',
        primaryText: "Grasses",
        privileges: BASIC,
    },
    {
        key: "3",
        description: 'Workflow scheduler',
        exactRoute: false,
        icon: "schedule",
        page: Schedule,
        path: '/schedule',
        primaryText: "Schedule",
        privileges: BASIC,
    },
    {
        key: "2",
        description: 'Asset Inventory',
        exactRoute: false,
        icon: "category",
        page: Assets,
        path: '/assets',
        primaryText: "Assets",
        privileges: BASIC,
    }
].concat(anonymousNavItems);

const paidNavItems = [
    {
        key: "1",
        description: 'Workflow list',
        exactRoute: false,
        icon: "fast_forward",
        page: WorkFlows,
        path: '/workflows',
        primaryText: "WorkFlows",
        privileges: PAID,
    }
].concat(basicNavItems);

const adminNavItems = [
    {
        key: "0",
        description: 'Application Settings',
        exactRoute: false,
        icon: "settings",
        page: Settings,
        path: '/settings',
        primaryText: "Settings",
        privileges: ADMIN,
    }
].concat(paidNavItems);

export const roleBasedDisplay = {
    anonymous: anonymousNavItems,
    basic: basicNavItems,
    paid: paidNavItems,
    admin: adminNavItems
};

export { adminNavItems as navItems };