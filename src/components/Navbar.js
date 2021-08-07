import React from "react";
import {Link} from "gatsby";
import {jsx, css} from '@emotion/react';

const Navbar = () => {
    return(
        <div>
            <div>
                {/* <img src={} /> */}
                <p>Natural Aroma</p>
            </div>
            <div>
                <nav>
                    <div>
                        <Link to="/about">
                            About
                        </Link>
                    </div>
                    <div>
                        <Link to="/products">
                            Products
                        </Link>
                    </div>
                    <div>
                        <Link to="/blogs/home">
                            Blogs
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar