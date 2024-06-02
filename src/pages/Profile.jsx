import React from 'react'
import NavComponent from '../components/layout/NavbarComponent'
import FooterComponent from '../components/layout/FooterComponent'
import Favorite from '../components/Profile/favorite'
import History from '../components/Profile/History'

const Profile = () => {
    return (
        <>
            <NavComponent />
            <div className="page-section inner-page-sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {/* My Account Tab Menu Start */}
                                <div className="col-lg-3 col-12">
                                    <div className="myaccount-tab-menu nav" role="tablist">
                                        <a href="#account-info" data-toggle="tab" class="active">
                                            <i className="fa fa-user" /> Account Details
                                        </a>
                                        <a href="#orders" data-toggle="tab">
                                            <i className="fa fa-cart-arrow-down" /> Favorite
                                        </a>
                                        <a href="#download" data-toggle="tab">
                                            <i className="fas fa-download" /> History Buku
                                        </a>


                                        <a href="login-register.html">
                                            <i className="fas fa-sign-out-alt" /> Logout
                                        </a>
                                    </div>
                                </div>
                                {/* My Account Tab Menu End */}
                                {/* My Account Tab Content Start */}
                                <div className="col-lg-9 col-12 mt--30 mt-lg--0">
                                    <div className="tab-content" id="myaccountContent">

                                        {/* Single Tab Content Start */}
                                        <div className="tab-pane fade" id="orders" role="tabpanel">
                                            <Favorite/> 
                                        </div>
                                        {/* Single Tab Content End */}
                                        {/* Single Tab Content Start */}
                                        <div className="tab-pane fade" id="download" role="tabpanel">
                                            <History/>
                                        </div>
                                        {/* Single Tab Content End */}
                                        {/* Single Tab Content Start */}
                                        <div className="tab-pane fade" id="address-edit" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h3>Account Details</h3>
                                                <div className="account-details-form">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="first-name"
                                                                    placeholder="First Name"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="last-name"
                                                                    placeholder="Last Name"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <input
                                                                    id="display-name"
                                                                    placeholder="Display Name"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <input
                                                                    id="email"
                                                                    placeholder="Email Address"
                                                                    type="email"
                                                                />
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <h4>Password change</h4>
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <input
                                                                    id="current-pwd"
                                                                    placeholder="Current Password"
                                                                    type="password"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="new-pwd"
                                                                    placeholder="New Password"
                                                                    type="password"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="confirm-pwd"
                                                                    placeholder="Confirm Password"
                                                                    type="password"
                                                                />
                                                            </div>
                                                            <div className="col-6">
                                                            <a class="btn btn-primary" href="#account-info" data-toggle="tab" role="button">Kembali</a>
                                                            </div>
                                                            <div className="col-6">
                                                                <button className="btn btn--primary">
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Tab Content End */}
                                        {/* Single Tab Content Start */}
                                        <div className="tab-pane fade  show active" id="account-info" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h3>Account Details</h3>
                                                <div className="account-details-form">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="first-name"
                                                                    placeholder="First Name"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="last-name"
                                                                    placeholder="Last Name"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <input
                                                                    id="display-name"
                                                                    placeholder="Display Name"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <input
                                                                    id="email"
                                                                    placeholder="Email Address"
                                                                    type="email"
                                                                />
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <h4>Password change</h4>
                                                            </div>
                                                            <div className="col-12  mb--30">
                                                                <input
                                                                    id="current-pwd"
                                                                    placeholder="Current Password"
                                                                    type="password"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="new-pwd"
                                                                    placeholder="New Password"
                                                                    type="password"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 col-12  mb--30">
                                                                <input
                                                                    id="confirm-pwd"
                                                                    placeholder="Confirm Password"
                                                                    type="password"
                                                                />
                                                            </div>
                                                            <div className="col-12">
                                                            <a class="btn btn-primary" href="#address-edit" data-toggle="tab" role="button">Edit Profile</a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Tab Content End */}
                                    </div>
                                </div>
                                {/* My Account Tab Content End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default Profile