import React from 'react'
import BreadcrumbsComponent from '../utils/BreadcrumbsComponent'

export const ABCSection1 = () => {
  return (
     <section className="breadcrumb-section">
    <h2 className="sr-only">Site Breadcrumb</h2>
    <div className="container">
      <div className="breadcrumb-contents">
        <nav aria-label="breadcrumb" className='m-3'>
        <BreadcrumbsComponent />
        </nav>
      </div>
    </div>
  </section>
  )
}
