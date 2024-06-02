import React from 'react'

const ACCBooks = () => {
  return (
    <div className="shop-product-wrap grid with-pagination row space-db--30 shop-border">
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Js. Khairen
                </a>
                <h3>
                  <a href="/product-details">Melangkah</a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/melangkah.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/melangkah.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a
                      href="/product-details"
                      className="btn btn-outlined--primary"
                    >
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/melangkah.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Js. Khairen
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      Melangkah
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Novel karya J. S Khairen yang berjudul Melangkah bertemakan
                    tentang petualangan di Indonesia. Tidak hanya itu, cerita
                    dalam novel ini juga mengutamakan kisah pahlawan. Berbeda
                    dari karya-karya yang sebelumnya, di novel ini Khairen
                    memberi sedikit imajinasi yang ia tanamkan. Terdapat 36
                    episode dan 5 babak...
                  </p>
                </article>
                {/* <div class="price-block">
                                <div class="add-cart-btn">
                                      <a href="" class="btn btn-outlined--primary">Baca Buku Sekarang</a>
                                  </div>
                              </div> */}
                <div className="add-cart-btn">
                  <a href="" className="btn btn-outlined--primary">
                    Baca Buku Sekarang
                  </a>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Almira Bastari
                </a>
                <h3>
                  <a href="/product-details">Home Sweet Loan</a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/Home.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/Home.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/Home.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Almira Bastari
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      Home Sweet Loan
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Novel Home Sweet Loan ditulis oleh Almira Bastari, seorang
                    penulis muda yang namanya sudah populer di Indonesia. Novel
                    Home Sweet Loan baru saja diterbitkan oleh Gramedia Pustaka
                    Utama pada tahun 2022. Novel Home Sweet Loan mengangkat
                    genre yang sama dengan karya Almira sebelumnya yang berjudul
                    “Ganjil Genap”, yaitu metropop. ....
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Dale Carnegie &amp; Associates
                </a>
                <h3>
                  <a href="/product-details">
                    How To Win Friends And Influence People In The Digital Age
                  </a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/3.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/3.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/3.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Dale Carnegie &amp; Associates
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      How To Win Friends And Influence People In The Digital Age
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Dale Carnegie sendiri adalah seorang penulis buku-buku
                    pengembangan diri. Beberapa buku yang ia tulis di antaranya
                    Public Speaking:a Practical Course for Business Men (1926);
                    Little Known Facts about Well Known People (1934); How to
                    Win Friends and Influence People (1936); dan How to Stop
                    Worrying and Start Living (1948). Buku terakhirnya berju
                    ....
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  James Clear
                </a>
                <h3>
                  <a href="/product-details">
                    Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar
                    Biasa
                  </a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/8.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/8.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/8.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    James Clear
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar
                      Biasa
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar
                    Biasa adalah buku kategori self improvement karya James
                    Clear. Pada umumnya, perubahan-perubahan kecil seringkali
                    terkesan tak bermakna karena tidak langsung membawa
                    perubahan nyata pada hidup suatu manusia. Jika diumpamakan
                    sekeping koin tidak bisa menjadikan kaya, suatu perubahan
                    positif s ...
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Edianto Ong
                </a>
                <h3>
                  <a href="/product-details">
                    Technical Analysis For Mega Profit
                  </a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/4.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/4.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/4.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Edianto Ong
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      Technical Analysis For Mega Profit
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Buku Technical Analysis For Mega Profit membahas tentang
                    teknik dan cara penggunaan analisa teknikal. Buku ini
                    terdiri dari 29 bab yang membahas Technical Analysis secara
                    lengkap dan menggunakan bahasa yang mudah dimengerti dan
                    dipahami. Buku ini cocok untuk pemula yang sedang mencoba
                    atau mengenal saham dan juga orang yang sudah terjun ke
                    pasar sa ...
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Paulo Coelho
                </a>
                <h3>
                  <a href="/product-details">Sang Alkemis</a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/5.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/5.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/5.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Paulo Coelho
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      Sang Alkemis
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Card List Article</h2>
                  <p>
                    Novel Sang Alkemis menceritakan tentang mimpi, harapan, dan
                    impian seorang anak bernama Santiago, yang mengembala untuk
                    mencari harta karun. Ia melakukan pencarian harta karun
                    setelah seorang peramal mengatakan bahwa Santiago akan
                    menemukan dan mendapatkan harta karun yang tidak akan habis
                    dipakai sampai tujuh turunan. Dalam p ...
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Dr Jiemi Ardian
                </a>
                <h3>
                  <a href="/product-details">Merawat Luka Batin</a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/7.jpg" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/products/product-12.jpg" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/7.jpg" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Dr Jiemi Ardian
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      Merawat Luka Batin
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Merawat Luka Batin adalah buku yang ditulis oleh seorang
                    Dokter Spesialis Kedokteran Jiwa bernama dr. Jiemi Ardian
                    Sp.Kj. Buku ini berisi tentang proses berpikir, bukan
                    sekadar berpikir dengan positif. Saat perasaan sedang tidak
                    baik-baik saja, terlebih pada keadaan depresi, proses pikir
                    kita biasanya ikut andil dalam memperburuk keadaan. Namun,
                    su ...
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="product-card">
            <div className="product-grid-content">
              <div className="product-header">
                <a href="" className="author">
                  Fellexandro Ruby
                </a>
                <h3>
                  <a href="/product-details">
                    You Do You: Discovering Life through Experiments &amp;
                    Self-Awareness
                  </a>
                </h3>
              </div>
              <div className="product-card--body">
                <div className="card-image">
                  <img src="image/cover/10.png" alt="" />
                  <div className="hover-contents">
                    <a href="/product-details" className="hover-image">
                      <img src="image/cover/10.png" alt="" />
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
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-content">
              <div className="card-image">
                <img src="image/cover/10.png" alt="" />
              </div>
              <div className="product-card--body">
                <div className="product-header">
                  <a href="" className="author">
                    Fellexandro Ruby
                  </a>
                  <h3>
                    <a href="/product-details" tabIndex={0}>
                      You Do You: Discovering Life through Experiments &amp;
                      Self-Awareness
                    </a>
                  </h3>
                </div>
                <article>
                  <h2 className="sr-only">Deksripsi</h2>
                  <p>
                    Kamu generasi milenial yang lagi sibuk cari passion, atau
                    sedang mempersiapkan menghadapi quarter life crysis? Buku
                    karya Fellexandro Ruby ini bisa jadi pilihan yang tepat
                    untuk kamu. You Do You: Discovering Life Through Experiments
                    &amp; Self-Awareness membantu kamu memahami diri sendiri.
                    Sinopsis “Mas, gimana kalau passion gue belum menghasilkan?
                    ...
                  </p>
                </article>
                <div className="price-block">
                  <div className="add-cart-btn">
                    <a href="" className="btn btn-outlined--primary">
                      Baca Buku Sekarang
                    </a>
                  </div>
                </div>
                <div className="rating-block">
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star star_on" />
                  <span className="fas fa-star " />
                </div>
                <div className="btn-block">
                  <a href="" className="btn btn-outlined">
                    Add To Cart
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-heart" /> Add To Wishlist
                  </a>
                  <a href="" className="card-link">
                    <i className="fas fa-random" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ACCBooks