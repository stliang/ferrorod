import * as LEVEL from '../../../security/roles'

export const LANDING = { privileges: LEVEL.ANONYMOUS, path: '/' };       // Products and services
export const NOTIFY = { privileges: LEVEL.BASIC, path: '/notify' };      // Notification preference
export const ASSETS = { privileges: LEVEL.BASIC, path: '/assets' };      // Asset Inventory
export const SCHEDULE = { privileges: LEVEL.BASIC, path: '/schedule' };  // Task scheduler
export const SETTINGS = { privileges: LEVEL.PAID, path: '/settings' };   // Marketing Campaign Settings
export const USERS = { privileges: LEVEL.ADMIN, path: '/users' };        // User administration