// A list of roles that can access a given exported role.
// In the case of ANONYMOUS, all roles can access a page with
// access privilege of ANONYMOUS role.
export const ANONYMOUS   = ['anonymous', 'basic', 'paid', 'admin'];
export const BASIC       = ['basic', 'paid', 'admin'];
export const PAID        = ['paid', 'admin'];
export const ADMIN       = ['admin'];