import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import AvataComponent from '../utils/AvataComponent';

function NavComponent() {
  const handleClick = (e) => {
    const categoryNav = document.querySelector('.category-nav');
    categoryNav.classList.toggle('show');
    e.stopPropagation();
  };

  useEffect(() => {
    function stickyHeader() {
      const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;

      function handleResize() {
        const width = window.innerWidth;
        if (width <= 991) {
          document.querySelector('.sticky-init').classList.remove('fixed-header');
          if (document.querySelector('.sticky-init').classList.contains('sticky-header')) {
            document.querySelector('.sticky-init').classList.remove('sticky-header');
          }
        } else {
          document.querySelector('.sticky-init').classList.add('fixed-header');
        }
      }

      function handleScroll() {
        if (window.pageYOffset >= headerHeight) {
          document.querySelector('.fixed-header').classList.add('sticky-header');
        } else {
          document.querySelector('.fixed-header').classList.remove('sticky-header');
        }
      }

      window.addEventListener('resize', handleResize);
      window.addEventListener('load', handleResize);
      window.addEventListener('scroll', handleScroll);

      handleResize();

      return function cleanup() {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('load', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
    
    

    stickyHeader();
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      <div className="site-header d-none d-lg-block">
        <div className="header-middle pt--10 pb--10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <a href="index.html" className="site-brand">
                  <img src="image/logo.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3">
                <div className="header-phone">
                  <div className="icon">
                    <i className="fas fa-headphones-alt" />
                  </div>
                  <div className="text">
                    <p>Tertarik Hubungi kami</p>
                    <p className="font-weight-bold number">Balai Pustaka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom pb--10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-">
                <nav className="category-nav">
                  <div>
                    <button
                      href="javascript:void(0)"
                      className="category-trigger"
                      onClick={handleClick}
                    >
                      <i className="fa fa-bars" />
                      Jelajahi Kategori &ensp;&ensp;&ensp;
                    </button>
                    <ul className="category-menu">
                      {posts.map((post) => (
                        <li key={post.id} className="cat-item has-children">
                          <a href="#">{post.category}</a>
                          <ul className="sub-menu">
                            {posts
                              .filter((subPost) => subPost.category === post.category)
                              .map((subPost) => (
                                <li key={subPost.id}>
                                  <a href="#">{subPost.title}</a>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-5">
                <div className="header-search-block">
                  <input type="text" placeholder="Search entire store here" />
                  <button>Search</button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-navigation flex-lg-right">
                  <div className="cart-widget">
                   <AvataComponent/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile start */}
      <div className="site-mobile-menu">
        <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
          <div className="container">
            <div className="row align-items-sm-end align-items-center">
              <div className="col-md-4 col-7">
                <a href="/homepage" className="site-brand">
                  <img src="image/BP.png" width="80px" height="80px" alt="" />
                </a>
              </div>
              {/* <div className="col-md-5 order-3 order-md-2">
                <nav className="category-nav ">
                  <div>
                    <a href="javascript:void(0)" className="category-trigger">
                      <i className="fa fa-bars" />
                      Jelajahi Kategori
                    </a>
                    <ul className="category-menu">
                      {posts.map((post) => (
                        <li key={post.id} className="cat-item has-children">
                          <a href="#">{post.category}</a>
                          <ul className="sub-menu">
                            {posts
                              .filter((subPost) => subPost.category === post.category)
                              .map((subPost) => (
                                <li key={subPost.id}>
                                  <a href="#">{subPost.title}</a>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div> */}
              <div className="col-md-3 col-5  order-md-3 text-right">
                <div className="mobile-header-btns header-top-widget">
                  <ul className="header-links">
                    <li className="sin-link">
                      <a
                        href="javascript:"
                        className="link-icon hamburgur-icon off-canvas-btn"
                      >
                        <i className="ion-navicon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*Off Canvas Navigation Start*/}
        <aside className="off-canvas-wrapper">
          <div className="btn-close-off-canvas">
            <i className="ion-android-close" />
          </div>
          <div className="off-canvas-inner">
            {/* search box start */}
            <div className="search-box offcanvas">
              <form>
                <input type="text" placeholder="Search Here" />
                <button className="search-btn">
                  <i className="ion-ios-search-strong" />
                </button>
              </form>
            </div>
            {/* search box end */}
            {/* mobile menu start */}
            <div className="mobile-navigation">
              {/* mobile menu navigation start */}
              <nav className="off-canvas-nav">
                <ul className="mobile-menu main-mobile-menu">
                  {posts.map((post) => (
                    <li className="menu-item-has-children" key={post.id}>
                      <a href="#">{post.category}</a>
                      <ul className="sub-menu">
                        {posts
                          .filter((subPost) => subPost.category === post.category)
                          .map((subPost) => (
                            <li key={subPost.id}>
                              <a href="#">{subPost.title}</a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* mobile menu navigation end */}
            </div>

            <div className="off-canvas-bottom">
              <div className="contact-list mb--10">
                <a href="" className="sin-contact">
                  <i className="fas fa-mobile-alt" />
                  021-8583369
                </a>
                <a href="" className="sin-contact">
                  <i className="fas fa-envelope" />
                  info@balaipustaka.co.id
                </a>
              </div>
              <div className="off-canvas-social">
                <a
                  href="https://www.facebook.com/OfficialBalaiPustaka"
                  className="single-icon"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://twitter.com/PTBalaiPustaka" className="single-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pt-balai-pustaka-persero/"
                  className="single-icon"
                >
                  {" "}
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/pt_balaipustaka/"
                  className="single-icon"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </aside>
        {/*Off Canvas Navigation End*/}
      </div>

      {/* For Header Hover */}
      <div className="sticky-init fixed-header common-sticky">
        <div className="container d-none d-lg-block">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <a href="/homepage" className="site-brand">
                <img src="image/BP.png" width="80px" height="80px" alt="" />
              </a>
            </div>
            <div className="col-lg-8">
              <div className="main-navigation flex-lg-right">
                <ul className="main-menu menu-right ">
                  <li className="menu-item">
                    <a href="/homepage">Beranda</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavComponent;
