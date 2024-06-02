import React from 'react'

const BDCSection2 = ({detailBook}) => {
  return (
    <div className="row  mb--60">
      <div className="col-lg-5 mb--30">
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
            <img src={detailBook.wiki_url} alt={detailBook.title} width={600} height={500} />
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="product-details-info pl-lg--30 ">
          <p className="tag-block">
            Tags: Kategori (SubKategori)
          </p>
          <h3 className="product-title">
            {detailBook.title}
          </h3>
          <ul className="list-unstyled">
            <li>
              Jumlah Halaman: <span className="list-value">{detailBook.pages} </span>
            </li>
            <li>
              Tanggal Terbit:{" "}
              <a href="#" className="list-value font-weight-bold">
                {" "}
                {detailBook.terbit}
              </a>
            </li>
            <li>
              ISBN : <span className="list-value">{detailBook.isbn}</span>
            </li>
            <li>
              Bahasa : <span className="list-value">{detailBook.bahasa}</span>
            </li>
            <li>
              penerbit : <span className="list-value">{detailBook.author}</span>
            </li>
          </ul>
          <div className="rating-widget">
            <div className="rating-block">
              <span className="fas fa-star star_on" />
              <span className="fas fa-star star_on" />
              <span className="fas fa-star star_on" />
              <span className="fas fa-star star_on" />
              <span className="fas fa-star " />
            </div>
            <div className="review-widget">
              ({detailBook.review} Review) <span>|</span>
              Tulis Review
            </div>
          </div>
          <article className="product-details-article">
            {/* <h4 className="sr-only">Product Summery</h4> */}
            <p className='mb-5'>
              {detailBook.deskripsi}
            </p>
          </article>
          <div className="add-to-cart-row">
            {/* <div class="count-input-block">
            <span class="widget-label">Qty</span>
            <input type="number" class="form-control text-center" value="1">
        </div> */}
            <div className="add-cart-btn">
              <a
                href="/product-details-reading"
                className="btn btn-outlined--primary"
              >
                Baca Buku Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BDCSection2