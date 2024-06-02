import React from 'react'
import KategoriS5 from './KategoriS5'

const DCSection5 = () => {
  return (
    <div className="container">
      <div className="section-title section-title--bordered">
        <h2>kategori Highlight</h2>
      </div>
     <KategoriS5/>
      <div className="float-right">
        <a href="/lihat-semua-kategori">
          {" "}
          Lihat Semua <i className="fas fa-chevron-circle-right" />
        </a>
      </div>
    </div>
  )
}

export default DCSection5