import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { login, authTokenState } from '../../recoil/api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const setAuthToken = useSetRecoilState(authTokenState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    event.preventDefault();
    try {
      const token = await login(username, password);
      setAuthToken(token);
      console.log('Token:', token);
      console.log('Login berhasil');
      navigate('/dashboard');
      // Lakukan tindakan setelah login berhasil
    } catch (error) {
      console.error('Login gagal', error);
      // Lakukan tindakan jika login gagal
    }
  };

  return (
    <main className="page-section inner-page-sec-padding-bottom mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
            <form onSubmit={handleLogin}>
              <div className="login-form">
                <h4 className="login-title">Masuk</h4>
                <p>
                  <span className="font-weight-bold" />
                </p>
                <div className="row">
                  <div className="col-md-12 col-12 mb--15">
                    <label htmlFor="username">Nama Pengguna</label>
                    <input
                      className="mb-0 form-control"
                      type="text"
                      name="password"
                      placeholder="Masukkan Nama Pengguna"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <span />
                  </div>
                  <div className="col-12 mb--20">
                    <label htmlFor="password">Password</label>
                    <input
                      className="mb-0 form-control"
                      type="password"
                      name="password"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span />
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="">
                      Lupa Password
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <button onClick={handleLogin} className="btn btn-outlined">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
