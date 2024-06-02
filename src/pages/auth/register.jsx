import React from 'react'
import FooterComponent from '../../components/layout/FooterComponent'

const register = () => {
  return (
    <>
     <main className="page-section inner-page-sec-padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
          {/* Login Form s*/}
          <form action="#">
            <div className="login-form">
              <h4 className="login-title">Pengguna Baru</h4>
              <p>
                <span className="font-weight-bold">Saya Pengguna Baru</span>
              </p>
              <div className="row">
                <div className="col-md-12 col-12 mb--15">
                  <label htmlFor="email">Nama Lengkap</label>
                  <input
                    className="mb-0 form-control"
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="col-12 mb--20">
                  <label htmlFor="email">Email</label>
                  <input
                    className="mb-0 form-control"
                    type="email"
                    id="email"
                    placeholder="Enter Your Email Address Here.."
                  />
                </div>
                <div className="col-lg-6 mb--20">
                  <label htmlFor="password">Password</label>
                  <input
                    className="mb-0 form-control"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="col-lg-6 mb--20">
                  <label htmlFor="password">Ulangi Password</label>
                  <input
                    className="mb-0 form-control"
                    type="password"
                    id="repeat-password"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="col-md-12">
                  <a href="/login" className="btn btn-outlined">
                    Daftar
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent/>
    </>
   
  
  )
}

export default register