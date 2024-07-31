import React, { Component } from 'react'

export default class Section1 extends Component {
    render() {
        return (
            <>
       
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <p>NEW | ASTRO STARTER TEMPLATE</p>
                            <br />
                            <p style={{ fontSize: "50px", fontWeight: "bold" }}>The perfect starting point for your <span className='text-primary'>Astro Ecommerce Products.</span></p>
                            <br />
                            <p>Astro Ecommerce is a free template designed to be both lightweight and feature-rich. It comes packed with everything you need to get your Online Store ready in no time.</p>
                            <div className='d-flex gap-2'>
                                <div className="btn btn-dark">GET STARTED</div>
                                <div className="btn btn-primary">GET FIGMA</div>

                            </div>
                            <br />
                            <br />
                            <h3 className='text-center'>Design & Code by Creative Tim</h3>
                        </div>
                        <div className="col d-none d-lg-block">
                            <img src="https://www.creative-tim.com/astro/img/header-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
