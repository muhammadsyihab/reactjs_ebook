import React from 'react'

const ABCPagination = () => {
  return (
    <div className="row pt--30">
        <div className="col-md-12">
          <div className="pagination-block">
            <ul className="pagination-btns flex-center">
              <li>
                <a href="" className="single-btn prev-btn ">
                  |<i className="zmdi zmdi-chevron-left" />{" "}
                </a>
              </li>
              <li>
                <a href="" className="single-btn prev-btn ">
                  <i className="zmdi zmdi-chevron-left" />{" "}
                </a>
              </li>
              <li className="active">
                <a href="" className="single-btn">
                  1
                </a>
              </li>
              <li>
                <a href="" className="single-btn">
                  2
                </a>
              </li>
              <li>
                <a href="" className="single-btn">
                  3
                </a>
              </li>
              <li>
                <a href="" className="single-btn">
                  4
                </a>
              </li>
              <li>
                <a href="" className="single-btn next-btn">
                  <i className="zmdi zmdi-chevron-right" />
                </a>
              </li>
              <li>
                <a href="" className="single-btn next-btn">
                  <i className="zmdi zmdi-chevron-right" />|
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ABCPagination