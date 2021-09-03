import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/react"
import logo from "../images/Logo6 (1).png"
import ActionButton from "./common/ActionButton"
import SearchIcon from "../images/search-logo.png"
import { useState } from "react"
import SearchForm from "./Search/SearchForm"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import capitalize from "lodash/capitalize";
import BlogCategories from "./BlogCategories";

const displayFlexCenter = {
  display: "flex",
  alignItems: "center",
}

const navBarLinks = {
  fontFamily: "AxiformaMedium",
  fontWeight: 600,
  fontSize: 14,
  color: "#0C0C0C",
}

const aboutNavbar = {
  position: "absolute",
  bottom: 5,
}

const breakpoints = [576, 768, 992, 1200, 1400]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
const Navbar = ({ layout }) => {
  const [scrollY, setScrollY] = useState(0)

  // for search functionality
  const [openSearch, setOpenSearch] = useState(false)
  const handleSearchClick = () => setOpenSearch(true)
  const closeSearch = () => setOpenSearch(false)

  if (typeof window !== "undefined")
    window.addEventListener("scroll", e => {
      setScrollY(window.scrollY)
    })

  const [aboutNavOpen, setAboutNavOpen] = useState(false)
  const openAboutNavHover = () => {
    setAboutNavOpen(true)
    closeProductNavBarHover()
  }
  const closeAboutNavHover = () => setAboutNavOpen(false)

  const [productNavBarOpen, setProductNavBarOpen] = useState(false)
  const openProductNavBarHover = () => {
    setProductNavBarOpen(true)
    closeAboutNavHover()
  }
  const closeProductNavBarHover = () => setProductNavBarOpen(false)

  const handleNavBarMouseLeave = () => {
    closeProductNavBarHover()
    closeAboutNavHover()
  }

  return (
    <StaticQuery
      query={graphql`
        query productListQuery {
          allMarkdownRemark(
            filter: {
              fileAbsolutePath: { regex: "content/products/productCategories/" }
            }
          ) {
            edges {
              node {
                frontmatter {
                  id
                  name
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          allMarkdownRemark: { edges },
        } = data
        return (
          <div
            onMouseLeave={handleNavBarMouseLeave}
            css={css({
              position: "fixed",
              width: "100%",
              top: 0,
              marginBottom: 100,
              background: "white",
              zIndex: 1000,
              borderBottom: scrollY > 150 ? "1px solid #e3e3e3" : "none",
              boxShadow: scrollY > 150 ? "8px 6px 15px 4px #00000014" : "none",
            })}
          >
            <div
              // todo - add fixed positioning and dissapearing on scroll down after an offset of 100px
              css={css({
                minHeight: 80,
                ...displayFlexCenter,
                justifyContent: "space-between",
                ...layout,
                // boxShadow:'3px 3px 5px 6px #ccc',
                padding: 0,
                background: "white",
              })}
            >
              <div css={css(displayFlexCenter)}>
                <Link to="/">
                  <div
                    css={css({
                      ...displayFlexCenter,
                    })}
                  >
                    <img src={logo} />
                    <div css={css({ marginLeft: 5, color: "#0C0C0C" })}>
                      <p
                        css={css({
                          fontFamily: "AxiformaBlack",
                          fontSize: 18,
                          marginTop: 8,
                          marginBottom: -12,
                        })}
                      >
                        NAP
                      </p>
                      <p
                        css={css({
                          fontFamily: "AxiformaMedium",
                          fontSize: 11,
                        })}
                      >
                        Natural Aroma Products
                      </p>
                    </div>
                  </div>
                </Link>
                <div
                  css={css({
                    position: "relative",
                  })}
                >
                  <div
                    id="about-navbar"
                    onMouseLeave={closeAboutNavHover}
                    css={css(aboutNavbar, {
                      minWidth: 150,
                      display: aboutNavOpen ? "block" : "none",
                      position: "absolute",
                      top: "calc(100% + 5px)",
                      left: "3rem",
                      margin: "1rem 0rem",
                      background: "white",
                      boxShadow: "8px 6px 15px 4px #00000014",
                      marginBottom: 150,
                      marginRight: 20,
                      transition: "200ms ease-out",
                      a: {
                        fontSize: 13,
                      },
                      "& div": {
                        // margin:'1rem 0',
                        border: "1px solid #f1f3f4",
                        borderTop: "none",
                        background: "white",
                        marginLeft: "1rem",
                        padding: "0.8rem 1rem",
                        boxShadow: "0px 15px 25px 2px #00000014",
                        transition: "200ms ease-out",
                        "&:hover": {
                          color: "#56C035",
                        },
                      },
                    })}
                  >
                    <Link css={css(navBarLinks)} to="/about">
                      <div>About Us</div>
                    </Link>

                    <Link css={css(navBarLinks)} to="/about/infrastructure">
                      <div>Infrastructure and Manafacturing</div>
                    </Link>
                  </div>
                  {/* for the products navbar */}
                  <div
                    id="product-navbar"
                    onMouseLeave={closeProductNavBarHover}
                    css={css(aboutNavbar, {
                      minWidth: 230,
                      display: productNavBarOpen ? "block" : "none",
                      position: "absolute",
                      top: "calc(100% + 5px)",
                      left: "9rem",
                      margin: "1rem 0rem",
                      background: "white",
                      boxShadow: "8px 6px 15px 4px #00000014",
                      marginBottom: 150,
                      marginRight: 20,
                      transition: "200ms ease-out",
                      a: {
                        fontSize: 13,
                      },
                      "& div": {
                        // margin:'1rem 0',
                        border: "1px solid #f1f3f4",
                        borderTop: "none",
                        background: "white",
                        marginLeft: "1rem",
                        padding: "0.8rem 1rem",
                        boxShadow: "0px 15px 25px 2px #00000014",
                        transition: "200ms ease-out",
                        "&:hover": {
                          color: "#56C035",
                        },
                      },
                    })}
                  >
                    {edges.map(
                      ({
                        node: {
                          frontmatter: { id, name },
                        },
                      }) => (
                        <Link css={css(navBarLinks)} to={"/" + id}>
                          <div>{capitalize(name)}</div>
                        </Link>
                      )
                    )}
                  </div>
                  <nav
                    css={css({
                      ...displayFlexCenter,
                      marginLeft: "2rem",
                      div: {
                        padding: "0 2rem",
                      },
                    })}
                  >
                    <div onMouseOver={openAboutNavHover}>
                      <Link css={css(navBarLinks)} to="/about">
                        About
                      </Link>
                    </div>
                    <div onMouseOver={openProductNavBarHover}>
                      <Link css={css(navBarLinks)} to="/products">
                        Products
                      </Link>
                    </div>
                    <div>
                      <BlogCategories navBarLinks={navBarLinks}/>
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
                  "& >div:first-child": {
                    marginRight: 50,
                  },
                })}
              >
                <div
                  css={css({
                    ...displayFlexCenter,
                    cursor: "pointer",
                  })}
                  onClick={handleSearchClick}
                >
                  <img src={SearchIcon} alt="search website" />
                  <p
                    css={css({ fontSize: 14, fontWeight: 600, marginLeft: 10 })}
                  >
                    Search
                  </p>
                </div>
                <div>
                  <ActionButton link="/contact-us" title="Contact Us" />
                </div>
              </div>
            </div>
            <SearchForm openState={openSearch} closeSearch={closeSearch} />
          </div>
        )
      }}
    />
  )
}

export default Navbar
