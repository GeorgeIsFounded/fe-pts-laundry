import login, { syncToken } from './baseUrl';

export async function loginProses(payload) {
  return login.post(`/login`, payload);
}
