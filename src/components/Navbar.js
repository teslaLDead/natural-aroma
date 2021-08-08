import React from "react";
import { Link } from "gatsby";
import { jsx, css } from '@emotion/react';
import logo from '../images/Logo6 (1).png'
import ActionButton from "./common/ActionButton";
import SearchIcon from '../images/search-logo.png'

const displayFlexCenter = {
    display: "flex",
    alignItems: "center"
}

const navBarLinks = {
    fontFamily: 'AxiformaMedium',
    fontWeight: 600,
    fontSize: 14,
    color: '#0C0C0C'

}

const breakpoints = [576, 768, 992, 1200, 1400]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const Navbar = ({ layout }) => {
    return (
        <div css={css({
            position:'fixed',
                width:'100%'
        })}>

       
        <div
            // todo - add fixed positioning and dissapearing on scroll down after an offset of 100px
            css={css({
                minHeight: 100,
                ...displayFlexCenter,
                justifyContent: 'space-between',
                ...layout,
                padding: 0,
                background: 'white',

            })}>
            <div
                css={css(displayFlexCenter)}>
                <Link to="/">
                    <div css={css({
                        ...displayFlexCenter,

                    })}>
                        <img src={logo} />
                        <div css={css({ marginLeft: 5, color: '#0C0C0C' })}>
                            <p css={css({
                                fontFamily: 'AxiformaBlack',
                                fontSize: 18,
                                marginTop: 8,
                                marginBottom: -12
                            })}>NAP</p>
                            <p css={css({
                                fontFamily: 'AxiformaMedium',
                                fontSize: 11
                            })}>Natural Aroma Products</p>
                        </div>

                    </div>
                </Link>
                <div>
                    <nav css={css({
                        ...displayFlexCenter,
                        marginLeft: '2rem',
                        'div': {
                            padding: '0 2rem'
                        }
                    })}>
                        <div>
                            <Link css={css(navBarLinks)} to="/about">
                                About
                            </Link>
                        </div>
                        <div>
                            <Link css={css(navBarLinks)} to="/products">
                                Products
                            </Link>
                        </div>
                        <div>
                            <Link css={css(navBarLinks)} to="/blogs/home">
                                Blogs
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div
                css={css({
                    ...displayFlexCenter,
                    '& >div:first-child': {
                        marginRight: 50
                    }
                })}
            >
                <div css={css({
                    ...displayFlexCenter,
                    cursor: 'pointer'
                })}>

                    <img src={SearchIcon} alt="search website" />
                    <p css={css({ fontSize: 14, fontWeight: 600, marginLeft: 10 })}>Search</p>

                </div>
                <div>
                    <ActionButton link="/contact-us" title="Contact Us" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar