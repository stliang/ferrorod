import * as LEVEL from './roles'

export const LANDING = { privileges: LEVEL.ANONYMOUS_UP, path: '/' };
export const SIGN_IN = { privileges: LEVEL.ANONYMOUS_UP, path: '/signin' };
export const ASSETS = { privileges: LEVEL.BASIC_UP, path: '/assets' };
export const HOME = { privileges: LEVEL.BASIC_UP, path: '/home' };
export const ACCOUNT = { privileges: LEVEL.BASIC_UP, path: '/account' };
export const ADMIN = { privileges: LEVEL.ADMIN_UP, path: '/admin' };