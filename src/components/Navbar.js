import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/react"
import logo from "../images/Logo6 (1).png"
import logo2 from '../images/Logo.png'
import menu from "../images/menu.png"
import ActionButton from "./common/ActionButton"
import SearchIcon from "../images/search-logo.png"
import { useState } from "react"
import SearchForm from "./Search/SearchForm"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import capitalize from "lodash/capitalize"
import BlogCategories from "./BlogCategories"
import { Box, Button, Grid} from "@mui/material"
import {makeStyles} from "@mui/styles"


const displayFlexCenter = {
  display: "flex",
  alignItems: "center",
}

const navBarLinks = {
  fontFamily: "AxiformaMedium",
  fontWeight: 600,
  fontSize: 14,
  color: "#0C0C0C",
  ['@media (max-width: 720px)']:{
    fontSize:18,
    marginTop:20,
    marginBottom: 20
  }
}

const aboutNavbar = {
  position: "absolute",
  bottom: 5,
}

const breakpoints = [576, 768, 992, 1200, 1400]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const useStyles = makeStyles({
  mobileMenu: {
    display: "none",
    margin: "0 20px",
    width: 25,
    ["@media (max-width: 720px)"]: {
      display: "block",
    },
  },
  navigationMenus: {
    ["@media (max-width: 720px)"]: {
      display: "none",
    },
    display: "block",
  },
  contactButton: {
    ["@media (max-width: 680px)"]:{
      display:'none'
    }
  },
  logo:{
    maxWidth:100
  },
  mobileNavContainers: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "80px",
    zIndex: "1000",
    background: "white",
    textAlign: "center",
  },
  mobileLinks: {
    fontSize: 16,
  },
})
const Navbar = ({ layout }) => {
  const classes = useStyles()
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
    setBlogsNarOpen(false)
    closeAboutNavHover()
  }
  const closeProductNavBarHover = () => setProductNavBarOpen(false)

  const handleNavBarMouseLeave = () => {
    closeProductNavBarHover()
    closeAboutNavHover()
  }
  const [blogsNavBarOpen, setBlogsNarOpen] = useState(false)
  const openBlogsNavBarHover = () => {
    setProductNavBarOpen(false)
    setBlogsNarOpen(true)
  }
  const closeBlogsNavBarHover = () => setBlogsNarOpen(false)

  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false)
  const toggleMobileNarBarOpen = () => setMobileNavBarOpen(!mobileNavBarOpen)

  const [mobileNavAbout, setMobileNavAbout] = useState(false);
  const [mobileNavProducts, setMobileNavProducts] = useState(false);
  const [mobileNavBlogs, setMobileNavBlogs] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query productListQuery {
          products: allMarkdownRemark(
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
          blogs: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "content/blogs/categories/" } }
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
        const { products, blogs } = data
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
                <img
                  onClick={toggleMobileNarBarOpen}
                  className={classes.mobileMenu}
                  src={menu}
                  alt="site menu"
                />
                <Link to="/">
                  <div
                    css={css({
                      ...displayFlexCenter,
                    })}
                  >
                    <img className={classes.logo} src={logo2} />
                    <div
                      css={css({
                        marginLeft: 5,
                        color: "#0C0C0C",
                      })}
                    >
                      <p
                        css={css({
                          fontFamily: "AxiformaBlack",
                          fontSize: 18,
                          marginTop: 8,
                          marginBottom: -12,
                          ["@media (max-width: 720px)"]: {
                            marginTop: 0,
                          },
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
                {/* mobile nav bar */}
                <div
                  style={{ display: mobileNavBarOpen ? "block" : "none" }}
                  className={classes.mobileNavContainers}
                >
                  <Grid container direction="column">
                    <Grid item xs={12}>
                      {/* main link for about */}
                      <Box my={5}>
                        <Link
                          css={css(navBarLinks)}
                          to="/about"
                        >
                          About
                        </Link>
                      </Box>
                      <Box style={{display: mobileNavAbout ? 'block' : 'none'}}>
                        <Link css={css(navBarLinks)} to="/about">
                          <div>About Us</div>
                        </Link>
                        <Link css={css(navBarLinks)} to="/about/infrastructure">
                          <div>Infrastructure and Manafacturing</div>
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      {/* main link for products */}
                      <Box my={5}>
                        <Link css={css(navBarLinks)} to="/products">
                          Products
                        </Link>
                      </Box>
                      <Box style={{display: mobileNavProducts ? 'block' : 'none'}}>
                        {products.edges.map(
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
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      {/* main link for products */}
                      <Box my={5}>
                        <Link css={css(navBarLinks)} to="/blogs/home">
                          Blogs
                        </Link>
                      </Box>
                      <Box style={{display: mobileNavBlogs ? 'block' : 'none'}}>
                        {blogs.edges.map(
                          ({
                            node: {
                              frontmatter: { id, name },
                            },
                          }) => (
                            <Link css={css(navBarLinks)} to={"/blogs/" + id}>
                              <div>{capitalize(name)}</div>
                            </Link>
                          )
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/contact-us">
                      <Button disableElevation variant="contained">
                        Contact Us
                      </Button>
                    </Link>
                  </Grid>
                </div>
                <div
                  className={classes.navigationMenus}
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
                    {products.edges.map(
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

                    <div onMouseOver={openBlogsNavBarHover}>
                      {/* <BlogCategories navBarLinks={navBarLinks}/> */}
                      <Link css={css(navBarLinks)} to="/blogs/home">
                        Blogs
                      </Link>
                    </div>
                    <div
                      id="blogs-navbar"
                      style={{
                        width: "280px",
                      }}
                      onMouseLeave={closeBlogsNavBarHover}
                      css={css(aboutNavbar, {
                        minWidth: 230,
                        display: blogsNavBarOpen ? "block" : "none",
                        position: "absolute",
                        top: "calc(100% + 5px)",
                        left: "15em",
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
                      {blogs.edges.map(
                        ({
                          node: {
                            frontmatter: { id, name },
                          },
                        }) => (
                          <Link css={css(navBarLinks)} to={"/blogs/" + id}>
                            <div>{capitalize(name)}</div>
                          </Link>
                        )
                      )}
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
                <div className={classes.contactButton}>
                  <Link to="/contact-us">
                    <Button disableElevation variant="contained">
                      Contact Us
                    </Button>
                  </Link>
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
