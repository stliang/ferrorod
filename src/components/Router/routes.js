import * as LEVEL from '../../security/roles'

export const LANDING = { privileges: LEVEL.ANONYMOUS, path: '/' };
export const SIGN_IN = { privileges: LEVEL.ANONYMOUS, path: '/signin' };
export const ASSETS = { privileges: LEVEL.BASIC, path: '/assets' };
export const HOME = { privileges: LEVEL.BASIC, path: '/home' };
export const ACCOUNT = { privileges: LEVEL.BASIC, path: '/account' };
export const ADMIN = { privileges: LEVEL.ADMIN, path: '/admin' };