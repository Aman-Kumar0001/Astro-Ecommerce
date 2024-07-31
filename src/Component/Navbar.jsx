import React, { Component } from 'react'

export class Navbar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid mt-3'>
                <nav
                    class="navbar navbar-expand-md navbar-light bg-light shadow-lg mb-5 bg-body-tertiary rounded mx-4 px-1 py-1"
                >
                    <div class="container">
                        <a class="navbar-brand" href="#">Astro Ecommerce</a>
                        <button
                            class="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#" aria-current="page"
                                    >Home
                                        <span class="visually-hidden">(current)</span></a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >Dropdown</a
                                    >
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownId"
                                    >
                                        <a class="dropdown-item" href="#"
                                        >Action 1</a
                                        >
                                        <a class="dropdown-item" href="#"
                                        >Action 2</a
                                        >
                                    </div>
                                </li>
                            </ul>
                            <form class="d-flex my-2 my-lg-0">
                                <input
                                    class="form-control me-sm-2"
                                    type="text"
                                    placeholder="Search"
                                />
                                <button
                                    class="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="btn btn-dark">
                        GET STARTED
                    </div>
                </nav>

            </div>
        )
    }
}
