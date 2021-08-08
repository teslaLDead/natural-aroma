import React from "react";
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby";
import CompanyLogo from '../../images/company-logo.png';
import AddressIcon from '../../images/icons/address-icon.png';

// social links imports
import linkedin from '../../images/social-icons/linkedin.png';
import facebook from '../../images/social-icons/facebook.png';
import twitter from '../../images/social-icons/twitter.png';
import instagram from '../../images/social-icons/instagram.png';

// connect with use icons
import mail from '../../images/icons/mail.png'
import phone from '../../images/icons/phone.png'
import telephone from '../../images/icons/telephone.png'

const footerCss = {
    companyAdress: {
        fontSize: 14,
        fontWeight: 600,
        display: 'flex',
        flexDirection: 'column'
    },
    subTitles: {
        fontSize: 24,
        fontFamily: "AxiformaBlack",
        color: 'black'
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        'a': {
            fontSize: 14,
            fontFamily: "AxiformaMedium",
            marginBottom: 40,
            fontWeight: 600,
            color: 'black'
        }
    },
    contactLinks: {
        '& > a': {
            display: 'flex',
            alignItems: 'center',
            '& p': {
                marginLeft: 10
            }
        }

    },
    socialLinks: {
        '& > a': {
            marginLeft: 30
        },
        '& :first-child':{
            marginLeft:0
        }

    }
}

const Footer = ({ }) => {
    return (
        <footer css={css({
            paddingTop:100,
            display:'grid',
            gridTemplateColumns:'repeat(12, 1fr)',
            columnGap:15,
            gridTemplateAreas:'"company-logo company-description company-description company-description . quick-links quick-links products products connect connect connect "'
        })}>
            <div css={css({gridArea:"company-logo"})}>
                {/* for logo  */}
                <img src={CompanyLogo} alt="Natural Aroma Logo" />
            </div>
            <div css={css({gridArea:"company-description"})}>
                <div>
                    <p css={css({
                        fontSize: 13,
                        color: '#00000',
                        opacity: '0.75'
                    })}>
                        Our company was founded in 1995 since then we have pioneered in the manufacturing of essential oils, aroma chemicals, and natural isolates. Our company products are defined by creative adaptation, strategic enhancement, revolutionary packaging, and consistent innovation. For us, product quality and customer service are of the utmost importance.
                    </p>
                </div>
                <div>
                    <div css={css({marginTop:16})}>
                        <img src={AddressIcon} alt="address 1" />
                        <p css={css(footerCss.companyAdress)}>
                            <span>485A/12A, Dilshad Garden,</span>
                            <span>Industrial Area, G.T Road</span>
                            <span>Delhi-110095</span>
                        </p>
                    </div>
                </div>
                <div>
                    <div css={css({marginTop:16})}>
                        <img src={AddressIcon} alt="address 1" />
                        <p css={css(footerCss.companyAdress)}>
                            <span>G-22, Udyog Kunj, Industrial Area</span>
                            <span>Ghaziabad, Uttar Pradesh 201009</span>
                        </p>
                    </div>
                </div>

            </div>
            <div css={css({gridArea:"quick-links"})}>
                <h3 css={css(footerCss.subTitles)}>
                    Quick Links
                </h3>
                <div css={css(footerCss.links)}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/FAQ">FAQ</Link>
                </div>
            </div>
            <div css={css({gridArea:"products"})}>
                <h3 css={css(footerCss.subTitles)}>
                    Products
                </h3>
                <div css={css(footerCss.links)}>
                    {/* // todo - make these links dynamic */}
                    <Link to="/essential-oils">Essential Oils</Link>
                    <Link to="/aroma-oils">Aroma Oils</Link>
                    <Link to="/reconstituted-oils">Reconstituted Oils</Link>
                    <Link to="/natural-isolates">Natural Isolates</Link>
                </div>
            </div>
            <div css={css({gridArea:"connect"})}>
                <h3 css={css(footerCss.subTitles)}>
                    Connect With Us
                </h3>
                <div css={css(footerCss.links, footerCss.contactLinks)}>
                    {/* // todo - make these links dynamic */}
                    <Link to="/">
                        <img src={mail} alt="Natural Aroma Email" />
                        <p> info@naturalaroma.co</p>
                    </Link>
                    <Link to="/aroma-oils">
                        <img src={phone} alt="Natural Aroma phone number" />
                        <p>+91 120-2761060</p>
                    </Link>
                    <Link to="/reconstituted-oils">
                        <img src={telephone} alt="Natural Aroma mobile number" />
                        <p>+91 9891102691</p>
                    </Link>
                    <div css={css(footerCss.socialLinks)}>
                        {/* for social links -  */}
                        {/* // todo - get social links */}
                        <Link to="/">
                            <img src={linkedin} alt="Natural Aroma LinkedIn" />
                        </Link>
                        <Link to="/">
                            <img src={facebook} alt="Natural Aroma Twitter" />
                        </Link>
                        <Link to="/">
                            <img src={twitter} alt="Natural Aroma Facebook" />
                        </Link>
                        <Link to="/">
                            <img src={instagram} alt="Natural Aroma Instagram" />
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer