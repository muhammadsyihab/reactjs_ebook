import React from 'react'

const BDCSection1 = () => {
  return (
    <section className="breadcrumb-section">
    <h2 className="sr-only">Site Breadcrumb</h2>
    <div className="container">
      <div className="breadcrumb-contents">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Product Details</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  )
}

export default BDCSection1