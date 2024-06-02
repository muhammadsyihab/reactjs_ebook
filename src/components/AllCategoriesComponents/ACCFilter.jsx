import React from 'react'

const ACCFilter = () => {
  return (
    <>
    <div className="shop-toolbar mb--30">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-2 col-sm-6">
            {/* Product View Mode */}
            <div className="product-view-mode">
              <a href="#" className="sorting-btn active" data-target="grid">
                <i className="fas fa-th" />
              </a>
              <a href="#" className="sorting-btn" data-target="grid-four">
                <span className="grid-four-icon">
                  <i className="fas fa-grip-vertical" />
                  <i className="fas fa-grip-vertical" />
                </span>
              </a>
              <a href="#" className="sorting-btn" data-target="list ">
                <i className="fas fa-list" />
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-md-4 col-sm-6  mt--10 mt-sm--0">
            <span className="toolbar-status">
              Showing 1 to 9 of 14 (2 Pages)
            </span>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
            <div className="sorting-selection">
              <span>Show:</span>
              <select className="form-control nice-select sort-select">
                <option value="" selected="selected">
                  3
                </option>
                <option value="">9</option>
                <option value="">5</option>
                <option value="">10</option>
                <option value="">12</option>
              </select>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
            <div className="sorting-selection">
              <span>Sort By:</span>
              <select className="form-control nice-select sort-select mr-0">
                <option value="" selected="selected">
                  Default Sorting
                </option>
                <option value="">Sort By:Name (A - Z)</option>
                <option value="">Sort By:Name (Z - A)</option>
                <option value="">Sort By:Price (Low &gt; High)</option>
                <option value="">Sort By:Price (High &gt; Low)</option>
                <option value="">Sort By:Rating (Highest)</option>
                <option value="">Sort By:Rating (Lowest)</option>
                <option value="">Sort By:Model (A - Z)</option>
                <option value="">Sort By:Model (Z - A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-toolbar d-none">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-2 col-sm-6">
            {/* Product View Mode */}
            <div className="product-view-mode">
              <a href="#" className="sorting-btn active" data-target="grid">
                <i className="fas fa-th" />
              </a>
              <a href="#" className="sorting-btn" data-target="grid-four">
                <span className="grid-four-icon">
                  <i className="fas fa-grip-vertical" />
                  <i className="fas fa-grip-vertical" />
                </span>
              </a>
              <a href="#" className="sorting-btn" data-target="list ">
                <i className="fas fa-list" />
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-md-4 col-sm-6  mt--10 mt-sm--0">
            <span className="toolbar-status">
              Showing 1 to 9 of 14 (2 Pages)
            </span>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
            <div className="sorting-selection">
              <span>Show:</span>
              <select className="form-control nice-select sort-select">
                <option value="" selected="selected">
                  3
                </option>
                <option value="">9</option>
                <option value="">5</option>
                <option value="">10</option>
                <option value="">12</option>
              </select>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
            <div className="sorting-selection">
              <span>Sort By:</span>
              <select className="form-control nice-select sort-select mr-0">
                <option value="" selected="selected">
                  Default Sorting
                </option>
                <option value="">Sort By:Name (A - Z)</option>
                <option value="">Sort By:Name (Z - A)</option>
                <option value="">Sort By:Price (Low &gt; High)</option>
                <option value="">Sort By:Price (High &gt; Low)</option>
                <option value="">Sort By:Rating (Highest)</option>
                <option value="">Sort By:Rating (Lowest)</option>
                <option value="">Sort By:Model (A - Z)</option>
                <option value="">Sort By:Model (Z - A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ACCFilter