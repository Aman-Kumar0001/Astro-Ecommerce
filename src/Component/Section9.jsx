import React, { Component } from 'react'

export default class Section9 extends Component {
  render() {
    return (
        <div className='container bg-danger text-white my-5 py-5 px-5 rounded'>
        <div className="row row-cols-1 row-cols-lg-2">
            <div className="col col-lg-8 px-0 px-lg-4">
                <b className='fs-5'>Open Source</b><br />
                <h1>Let's join forces for a better web!</h1><br />
                <p className='fs-5'>Astro Ecommerce is an open source and powerful design system that lets you create Ecommerce websites that your users will love.</p>
                <div className="btn border rounded text-white">GET STARTED</div>
            </div>
            <div className="col col-lg-4 p-5 p-lg-0">
                <img src="https://www.creative-tim.com/astro/img/github.png" alt="" width="100%" height="300px"/>
            </div>
        </div>
      </div>
    )
  }
}
