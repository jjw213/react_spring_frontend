import React from 'react'
import '../css/style.css';
import RightNav from './RightNav';

function Nav() {
    return (
        <div>
            <div className="nav_wrapper">
                <nav className="menu">
                    <ul>
                        <li ><a href="#Link" title="Link">Home</a>
                            <ul >
                                <li ><a href="#Link" title="Link">Link » </a>
                                    <ul >
                                        <li ><a href="#Link" title="Link">Link</a></li>
                                        <li ><a href="#Link" title="Link">Link</a></li>
                                    </ul>
                                </li>
                                <li ><a href="#Link" title="Link">About</a></li>
                                <li ><a href="#Link" title="Link">Link » </a>
                                    <ul >
                                        <li ><a href="#Link" title="Link">Link</a></li>
                                        <li ><a href="#link" title="Link">Link</a></li>
                                        <li ><a href="#Link" title="Link">Link </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li ><a href="#Link" title="Link">Category</a>
                            <ul >
                                <li ><a href="#Link" title="Link ">Link</a></li>
                                <li ><a href="#Link" title="Link">Link</a></li>
                            </ul>
                        </li>
                        <li ><a href="#Link" title="Link">Portfolio</a>
                            <ul >
                                <li ><a href="#Link" title="Link">Link</a></li>
                                <li ><a href="#Link" title="Link">Link</a></li>
                                <li ><a href="#Link" title="Link">Link</a></li>
                            </ul>
                        </li>

                        <RightNav />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
