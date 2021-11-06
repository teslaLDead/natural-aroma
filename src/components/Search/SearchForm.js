import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Grid,
  Box,
  Dialog,
  DialogTitle,
  Button,
  TextField,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import { jss, css } from "@emotion/react"
import { Link } from "gatsby"
const classes = {
  container: {
    minWidth: "80%",
  },
  suggestionLink: {
    color: "black",
    textTransform: "capitalize",
  },
  linkContainer: {
    border: "1px solid #f1f1f2",
  },
  lightText: {
    opacity: 0.4,
  },
}

// function to extract relevant information to search from
const searchResultExtractor = data => {
  const result = []
  data.forEach(el => {
    const { blog, product, category } = el.context
    if (blog == null && product == null && category == null) console.log("")
    else if (blog !== null)
      result.push({
        type: "blog",
        link: el.path,
        name: blog.frontmatter.title,
      })
    else if (category !== null)
      result.push({
        type: "product-category",
        link: el.path,
        name: category,
      })
    else
      result.push({
        type: "product",
        link: el.path,
        name: el.context.product.frontmatter.name,
      })
  })

  return result
}

const SearchForm = ({ openState, closeSearch }) => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const searchData = useStaticQuery(graphql`
    query allSiteSearch {
      allSitePage {
        nodes {
          path
          context {
            blog {
              frontmatter {
                category
                title
              }
            }
            category
            product {
              frontmatter {
                category
                name
              }
            }
          }
        }
      }
    }
  `)

  const [allSiteLink] = useState(
    searchResultExtractor(searchData.allSitePage.nodes)
  )

  console.log("search links", allSiteLink)

  // this suggested items will be changed depending on the search query entered
  const [suggestedItems, setSuggestedItems] = useState([
    "essential-oils",
    "aroma-oils",
    "natural-isolates",
    "basil-oil",
  ])

  // for search query results
  // * this will filter the values from all site links when the lenght of search query field reaches more than 3
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = e => {
    const searchQuery = e.target.value
    setSearchQuery(searchQuery) // set the field value
  }
  useEffect(() => {
    setOpen(openState)
  }, [openState])
  const handleClose = () => {
    setOpen(false)
    closeSearch()
  }
  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogContent>
        <Box>
          <Box my={1} mx={4}>
            <Grid container>
              <Typography variant="subtitle2">
                Search our wide range of products
              </Typography>
              <Box>
                <IconButton onClick={handleClose} />
              </Box>
            </Grid>
          </Box>
        </Box>
        <Box css={css(classes.container)} py={1} mx={4}>
          <TextField
            autoFocus
            value={searchQuery}
            label="Search"
            onChange={handleSearch}
            placeholder="Enter Your Search Query"
            fullWidth
          />
        </Box>
        <Box my={1} mx={4} pb={3}>
          <Grid container alignItems="center">
            <Box>
              <Typography css={css(classes.lightText)} variant="subtitle2">
                Popular Links
              </Typography>
            </Box>
            <Box
              css={css({
                marginLeft: 5,
                ["@media (max-width: 680px)"]: {
                  marginLeft: 0,
                },
              })}
            >
              <Grid container>
                {suggestedItems.map(suggestion => (
                  <Box
                    mr={2}
                    css={css({
                      border: "1px solid #f1f1f2!important",
                      padding: "6px 9px",
                      ["@media (max-width: 680px)"]: {
                        marginTop: 2,
                        marginBottom: 2,
                      },
                    })}
                  >
                    <Link
                      to={`/${suggestion}`}
                      css={css(classes.suggestionLink)}
                    >
                      <Typography variant="subtitle2">
                        {suggestion.split("-").join(" ")}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box mx={4}>
          <Typography variant="subtitle2" css={css({ opacity: 0.5 })}>
            Suggested Search Results
          </Typography>
          {/* search results will appear here */}
          <List
            sx={{
              width: "100%",
              bgColor: "white",
              position: "relative",
              maxHeight: 300,
              overflow: "auto",
            }}
          >
            {allSiteLink
              .filter(item => {
                const name = item.name.split(" ").join("").toLowerCase()
                return (
                  searchQuery.length > 1 &&
                  name.includes(searchQuery.split(" ").join("").toLowerCase())
                )
              })
              .sort((a, b) => {
                if (b.name > a.name) return -1
                if (a.name > b.name) return 1
                return 0
              })
              .map(item => (
                <Link to={item.link}>
                  <ListItem key={`item-${item.name}`}>
                    <Box
                      css={css({
                        textTransform: "capitalize",
                        color: "black",
                      })}
                    >
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography
                        css={css({ opacity: 0.4 })}
                        variant="subtitle2"
                      >
                        {item.type}
                      </Typography>
                    </Box>
                  </ListItem>
                </Link>
              ))}
          </List>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SearchForm
