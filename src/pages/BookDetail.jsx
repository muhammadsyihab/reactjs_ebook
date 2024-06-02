import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { detailBukuState, detailSelector, fetchDetailBuku } from '../recoil/api/apiDetailBuku';
import { commentsState, fetchComments, commentsSelector } from '../recoil/api/comments';

import NavComponent from '../components/layout/NavbarComponent'
import FooterComponent from '../components/layout/FooterComponent'
import BDCSection1 from '../components/BookDetailComponents/BDCSection1'
import BDCSection2 from '../components/BookDetailComponents/BDCSection2'
import BDCSection3 from '../components/BookDetailComponents/BDCSection3'
import BDCSection4 from '../components/BookDetailComponents/BDCSection4'
import BreadcrumbsComponent from '../components/utils/BreadcrumbsComponent';

const BookDetail = () => {
  const { bookId } = useParams();

  const [detailBook, setDetailBook] = useRecoilState(detailBukuState);
  const detailData = useRecoilValue(detailSelector);

  const [comments, setComments] = useRecoilState(commentsState);
  const commentsData = useRecoilValue(commentsSelector);
  console.log('comen',comments)
  console.log('detail',detailBook)

  useEffect(() => {
    if (bookId) {
      setDetailBook(null); // Reset detailBook state when bookId changes
    }
  }, [bookId, setDetailBook]);

  useEffect(() => {
    if (detailData === null && bookId) {
      fetchDetailBuku(bookId)
        .then((data) => setDetailBook(data))
        .catch((error) => console.error(error));
    }
  }, [detailData, bookId, setDetailBook]);

  ///
  useEffect(() => {
    if (bookId) {
      setComments(null); // Reset comments state when bookId changes
    }
  }, [bookId, setComments]);
  
  useEffect(() => {
    if (commentsData === null && bookId) {
      fetchComments(bookId)
        .then((data) => setComments(data))
        .catch((error) => console.error(error));
    }
  }, [commentsData, bookId, setComments]);

  if (!detailBook) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="site-wrapper" id="top">
        <NavComponent />
        <BreadcrumbsComponent />
        <main className="inner-page-sec-padding-bottom">
          <div className="container">
            <BDCSection2 detailBook={detailBook} />
            <BDCSection3 detailBook={detailBook} comments={comments} />

          </div>
          {/* <BDCSection4 /> */}
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
                            Jumlah Halaman: <span className="list-value"> </span>
                          </li>
                          <li>
                            Tanggal Terbit:{" "}
                            <a href="#" className="list-value font-weight-bold">
                              {" "}
                              Canon
                            </a>
                          </li>
                          <li>
                            ISBN : <span className="list-value"> model1</span>
                          </li>
                          <li>
                            Bahasa : <span className="list-value"> 200</span>
                          </li>
                          <li>
                            penerbit : <span className="list-value"> 200</span>
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
                            Long printed dress with thin adjustable straps. V-neckline
                            and wiring under the Dust with ruffles at the bottom of
                            the dress.
                          </p>
                        </article>
                        <div className="add-to-cart-row">
                          <div className="add-cart-btn">
                            <a href="" className="btn btn-outlined--primary">
                              Add ddddd to Cart
                            </a>
                          </div>
                        </div>
                        {/* <div class="compare-wishlist-row">
                              <a href="" class="add-link"><i class="fas fa-heart"></i>Add to Wish List</a>
                              <a href="" class="add-link"><i class="fas fa-random"></i>Add to Compare</a>
                          </div> */}
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
        </main>
      </div>
      <FooterComponent />
    </>

  )
};

export default BookDetail;
