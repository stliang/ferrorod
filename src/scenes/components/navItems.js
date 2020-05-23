import * as ROUTES from '../components/Router/routes';

const anonymous = [
    {
        route: ROUTES.LANDING.path,
        primaryText: "Landing",
        icon: "home"
    }
]

const basic = [
    {
        route: ROUTES.NOTIFY.path,
        primaryText: "Notify",
        icon: "notifications_none"
    },
    {
        route: ROUTES.SCHEDULE.path,
        primaryText: "Schedule",
        icon: "schedule"
    },
    {
        route: ROUTES.ASSETS.path,
        primaryText: "Assets",
        icon: "category"
    }
].concat(anonymous);

const paid = [
    {
        route: ROUTES.WORKFLOWS.path,
        primaryText: "WorkFlows",
        icon: "fast_forward"
    }
].concat(basic);

const admin = [
    {
        route: ROUTES.SETTINGS.path,
        primaryText: "Settings",
        icon: "settings"
    }
].concat(paid);

export const ROLE = {
    anonymous: anonymous,
    basic: basic,
    paid: paid,
    admin: admin
};