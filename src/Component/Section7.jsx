import React, { Component } from 'react'

export default class Section7 extends Component {
  render() {
    return (
      <div className='container bg-primary text-white my-5 py-5 px-5 rounded'>
        <div className="row row-cols-1 row-cols-lg-2">
            <div className="col col-lg-8 px-0 px-lg-4">
                <b className='fs-5'>Frontend web architecture</b><br />
                <h1>What is Astro?</h1><br />
                <p className='fs-5'>Astro is an all-in-one web framework for building fast, content-focused websites. The framework is based in Astro Islands architecture, which represents a leading paradigm shift for frontend web architecture.</p>
                <div className="btn border rounded text-white">GET STARTED</div>
            </div>
            <div className="col col-lg-4 p-5 p-lg-0">
                <img src="https://www.creative-tim.com/astro/img/astro.png" alt="" width="100%" height="300px"/>
            </div>
        </div>
      </div>
    )
  }
}
