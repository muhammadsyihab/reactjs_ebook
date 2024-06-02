import React from 'react'

const BDCSection4 = () => {
  return (
    <section className="">
            <div className="container">
              <div className="section-title section-title--bordered">
                <h2>Rekomendasi buku</h2>
              </div>
              <div
                className="product-slider sb-slick-slider slider-border-single-row"
                data-slick-setting='{
  "autoplay": true,
  "autoplaySpeed": 8000,
  "slidesToShow": 4,
  "dots":true
    }'
                data-slick-responsive='[
  {"breakpoint":1200, "settings": {"slidesToShow": 4} },
  {"breakpoint":992, "settings": {"slidesToShow": 3} },
  {"breakpoint":768, "settings": {"slidesToShow": 2} },
  {"breakpoint":480, "settings": {"slidesToShow": 1} }
    ]'
              >
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Dale Carnegie
                      </a>
                      <h3>
                        <a href="product-details.html">
                          How To Win Friends &amp; Influence People
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/3.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-1.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Edianto Eng
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Technical Analysis for Mega Profit
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/4.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-3.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Paulo Coelho
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Sang <br /> Alkemis
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/5.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-2.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Jhemi Ardian
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Merawat <br /> Luka Batin
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/7.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-5.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Khairen
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Melangkah <br />
                          <br />
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/melangkah.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-4.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Fpple
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Laut <br /> Bercerita
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/Laut-Bercerita.png"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-7.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        James Clear
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Atomic <br /> Habits
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/8.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-6.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Ruby
                      </a>
                      <h3>
                        <a href="product-details.html">
                          You <br /> do You
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/10.png"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-9.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="" className="author">
                        Almira Bastari
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Home <br /> Sweet Loan
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/Home.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-8.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Henry Manampiring
                      </a>
                      <h3>
                        <a href="product-details.html">
                          Filosofi <br /> Teras
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img
                          src="image/cover/img20220101_11444970__w149_hauto.jpg"
                          alt=""
                          height={280}
                          width={300}
                        />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-11.jpg" alt="" />
                          </a>
                          <div className="hover-btns">
                            <a href="cart.html" className="single-btn">
                              <i className="fas fa-shopping-basket" />
                            </a>
                            <a href="wishlist.html" className="single-btn">
                              <i className="fas fa-heart" />
                            </a>
                            <a href="compare.html" className="single-btn">
                              <i className="fas fa-random" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quickModal"
                              className="single-btn"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default BDCSection4