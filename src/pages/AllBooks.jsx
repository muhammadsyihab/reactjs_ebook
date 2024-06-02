import React, { useState } from 'react';
import FooterComponent from '../components/layout/FooterComponent'
import NavComponent from '../components/layout/NavbarComponent'
import ABCFilter from '../components/AllBookComponents/ABCFilter'
import ABCGBooks from '../components/AllBookComponents/ABCGBooks'
import ABCLBooks from '../components/AllBookComponents/ABCLBooks';
import BreadcrumbsComponent from '../components/utils/BreadcrumbsComponent';



const AllBooks = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
    <div className="site-wrapper" id="top">
     <NavComponent />
     {/* <ABCSection1/> */}
     <BreadcrumbsComponent />
  <main className="inner-page-sec-padding-bottom">
    <div className="container">
      {/* <ABCFilter/> */}
      <div>
      <ABCFilter activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === 0 && <ABCGBooks />}
      {activeTab === 1 && <ABCLBooks />}
    </div>
      {/* Modal */}
      <div
        className="modal fade modal-quick-view"
        id="quickModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="quickModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close modal-close-btn ml-auto"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="product-details-modal">
              <div className="row">
                <div className="col-lg-5">
                  {/* Product Details Slider Big Image*/}
                  <div
                    className="product-details-slider sb-slick-slider arrow-type-two"
                    data-slick-setting='{
"slidesToShow": 1,
"arrows": false,
"fade": true,
"draggable": false,
"swipe": false,
"asNavFor": ".product-slider-nav"
}'
                  >
                    <div className="single-slide">
                      <img src="image/products/product-details-1.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-2.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-3.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-4.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-5.jpg" alt="" />
                    </div>
                  </div>
                  {/* Product Details Slider Nav */}
                  <div
                    className="mt--30 product-slider-nav sb-slick-slider arrow-type-two"
                    data-slick-setting='{
    "infinite":true,
"autoplay": true,
"autoplaySpeed": 8000,
"slidesToShow": 4,
"arrows": true,
"prevArrow":{"buttonClass": "slick-prev","iconClass":"fa fa-chevron-left"},
"nextArrow":{"buttonClass": "slick-next","iconClass":"fa fa-chevron-right"},
"asNavFor": ".product-details-slider",
"focusOnSelect": true
}'
                  >
                    <div className="single-slide">
                      <img src="image/products/product-details-1.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-2.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-3.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-4.jpg" alt="" />
                    </div>
                    <div className="single-slide">
                      <img src="image/products/product-details-5.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 mt--30 mt-lg--30">
                  <div className="product-details-info pl-lg--30 ">
                    <p className="tag-block">
                      Tags: <a href="#">Movado</a>, <a href="#">Omega</a>
                    </p>
                    <h3 className="product-title">
                      Beats EP Wired On-Ear Headphone-Black
                    </h3>
                    <ul className="list-unstyled">
                      <li>
                        Ex Tax: <span className="list-value"> £60.24</span>
                      </li>
                      <li>
                        Brands:{" "}
                        <a href="#" className="list-value font-weight-bold">
                          {" "}
                          Canon
                        </a>
                      </li>
                      <li>
                        Product Code:{" "}
                        <span className="list-value"> model1</span>
                      </li>
                      <li>
                        Reward Points: <span className="list-value"> 200</span>
                      </li>
                      <li>
                        Availability:{" "}
                        <span className="list-value"> In Stock</span>
                      </li>
                    </ul>
                    <div className="price-block">
                      <span className="price-new">£73.79</span>
                      <del className="price-old">£91.86</del>
                    </div>
                    <div className="rating-widget">
                      <div className="rating-block">
                        <span className="fas fa-star star_on" />
                        <span className="fas fa-star star_on" />
                        <span className="fas fa-star star_on" />
                        <span className="fas fa-star star_on" />
                        <span className="fas fa-star " />
                      </div>
                      <div className="review-widget">
                        <a href="">(1 Reviews)</a> <span>|</span>
                        <a href="">Write a review</a>
                      </div>
                    </div>
                    <article className="product-details-article">
                      <h4 className="sr-only">Product Summery</h4>
                      <p>
                        Long printed dress with thin adjustable straps.
                        V-neckline and wiring under the Dust with ruffles at the
                        bottom of the dress.
                      </p>
                    </article>
                    <div className="add-to-cart-row">
                      <div className="count-input-block">
                        <span className="widget-label">Qty</span>
                        <input
                          type="number"
                          className="form-control text-center"
                          defaultValue={1}
                        />
                      </div>
                      <div className="add-cart-btn">
                        <a href="" className="btn btn-outlined--primary">
                          <span className="plus-icon">+</span>Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="compare-wishlist-row">
                      <a href="" className="add-link">
                        <i className="fas fa-heart" />
                        Add to Wish List
                      </a>
                      <a href="" className="add-link">
                        <i className="fas fa-random" />
                        Add to Compare
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="widget-social-share">
                <span className="widget-label">Share:</span>
                <div className="modal-social-share">
                  <a href="#" className="single-icon">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="single-icon">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="single-icon">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#" className="single-icon">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/*=================================
Brands Slider
===================================== */}
  
  </div>
  <FooterComponent/>
</>

  )
}

export default AllBooks