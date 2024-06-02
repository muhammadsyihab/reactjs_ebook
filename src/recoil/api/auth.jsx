import { atom } from 'recoil';

import Cookies from 'js-cookie';

export const authTokenState = atom({
  key: 'authTokenState',
  default: Cookies.get('authToken') || null,
});

export async function login(username, password) {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      Cookies.set('authToken', token); // Simpan token ke cookies dengan nama 'authToken'
      return token;
    } else {
      throw new Error('Login gagal');
    }
  } catch (error) {
    throw new Error('Terjadi kesalahan');
  }
}


