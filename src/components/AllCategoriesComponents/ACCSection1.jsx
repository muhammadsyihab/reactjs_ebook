import React from 'react'

const ACCSection1 = () => {
  return (
    <section className="breadcrumb-section">
    <h2 className="sr-only">Site Breadcrumb</h2>
    <div className="container">
      <div className="breadcrumb-contents">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/homepage">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/lihat-semua">Lihat Semua</a>
            </li>
            <li className="breadcrumb-item active">Kategori</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  )
}

export default ACCSection1