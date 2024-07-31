import React, { Component } from 'react'

export default class Section8 extends Component {
    render() {
        return (
            <div className='container my-5'>
                <div className="row">
                    <p className="text-primary">Get inspired!</p>
                    <h1>Example Pages</h1>
                    <p>You can start using our fully coded Ecommerce page examples if you want to get inspired or show something to your client.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 mt-2">
                    <div className="card3">
                        <img src="https://www.creative-tim.com/astro/img/landing-page.jpg" alt="" width="100%" />
                        <div className="card-title">
                            <h4>Landing Page</h4>
                            <p className="text-secondary">Designed to introduce the website's purpose and encourage the user to take an action.</p>
                            <div className="btn">VIEW PAGE -&gt;</div>
                        </div>
                    </div>
                    <div className="card3">
                        <img src="https://www.creative-tim.com/astro/img/landing-page.jpg" alt="" width="100%" />
                        <div className="card-title">
                            <h4>Landing Page</h4>
                            <p className="text-secondary">Designed to introduce the website's purpose and encourage the user to take an action.</p>
                            <div className="btn">VIEW PAGE -&gt;</div>
                        </div>
                    </div>
                    <div className="card3">
                        <img src="https://www.creative-tim.com/astro/img/landing-page.jpg" alt="" width="100%" />
                        <div className="card-title">
                            <h4>Landing Page</h4>
                            <p className="text-secondary">Designed to introduce the website's purpose and encourage the user to take an action.</p>
                            <div className="btn">VIEW PAGE -&gt;</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
