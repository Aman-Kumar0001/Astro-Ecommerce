import React, { Component } from 'react'

export default class Section6 extends Component {
    render() {
        return (
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <p className="text-primary fs-5">Fully Coded Components based in Astro</p>
                        <h2>From idea to design. From design to code. From code to live.</h2>
                        <br />
                        <p>All the sections and pages made with these elements will be fully responsive and will look beautiful on all types of screens, including phones, tables, or desktops.</p>
                        <div className='d-flex gap-5'>
                            <div className='d-flex flex-column'>
                                <div className="card2 col col-lg-6">
                                    <h2>70+</h2>
                                    <h5>Coded Elements</h5>
                                    <p className="text-primary">From buttons, to inputs, navbars, alerts, tabels, cards or charts.</p>
                                </div>
                                <div className="card2 col col-lg-6">
                                    <h2>3</h2>
                                    <h5>Example Pages</h5>
                                    <p className="text-primary">Save months of work when you use our pre-made pages.</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className="card2 col col-lg-6">
                                    <h2>70+</h2>
                                    <h5>Coded Elements</h5>
                                    <p className="text-primary">From buttons, to inputs, navbars, alerts, tabels, cards or charts.</p>
                                </div>
                                <div className="card2 col col-lg-6">
                                    <h2>3</h2>
                                    <h5>Example Pages</h5>
                                    <p className="text-primary">Save months of work when you use our pre-made pages.</p>
                                </div>
                            </div>

                        </div>
                        <div className="btn btn-dark">GET FIGMA</div>
                    </div>
                    <div className="col">
                        <img src="https://www.creative-tim.com/astro/components.png" alt="" width="100%" />
                    </div>
                </div>

            </div>
        )
    }
}
