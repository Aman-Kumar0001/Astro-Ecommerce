import React, { Component } from 'react'

export default class Section4 extends Component {
    render() {
        return (
            <>

                <div className='container-fluid pt-5 mt-5'>
                    <div className="row row-cols-1 row-cols-lg-2 mx-4">
                        <div className="col">
                            <img src="https://www.creative-tim.com/astro/img/palette.png" alt="" width="90%" />
                        </div>
                        <div className="col mt-lg-5">
                            <p className="fw-bold">
                                Attention to beautiful design</p>
                            <h1>Awesome color palette, variables & elements foundation.</h1>
                            <br />
                            <p className="text-secondary">Customize your colors, sizes, spacing or typography in minutes so they can fit perfectly for your brand. Spend time creating dApps logic and UX, our tools take care of the rest.</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <p className="fw-bold text-primary">
                                By developers, for entrepreneurs</p>
                            <h1>Don't write from scratch. Coded examples are included.</h1>
                            <p>Using our ecommerce starter template will save a lot of coding time , as it provides a solid foundation for the Online Store, allowing your team to focus on customizing and adding specific features to meet the needs of your particular project.</p>
                            <p className='sec4-con2 text-center'><a>DOCUMENTATION-&gt;</a></p>
                        </div>
                        <div className="col">
                            <img src="https://www.creative-tim.com/astro/code.png" alt="" width="90%" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
