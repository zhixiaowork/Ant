import request from '@/utils/request';

export interface LoginParams {
  userName: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParams) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
