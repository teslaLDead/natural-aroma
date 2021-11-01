import React, { useState, useEffect } from "react"
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
import {jss, css} from "@emotion/react"
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
    opacity: 0.36,
  },
}

const SearchForm = ({ openState, closeSearch }) => {
  const [open, setOpen] = useState(false)

  // this suggested items will be changed depending on the search query entered
  const [suggestedItems, setSuggestedItems] = useState([
    "essential-oils",
    "aroma-oils",
    "natural-isolates",
    "basil-oil",
  ])

  // for search query results
  const [searchResults, setSearchResults] = useState([])
  useEffect(() => {
    setOpen(openState)
  }, [openState])
  const handleClose = () => {
    setOpen(false)
    closeSearch()
  }
  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle>
        <Box mt={2} mb={5} mx={4}>
          <Grid container>
            <Typography variant="subtitle1">
              Search our products range and more.
            </Typography>
            <Box>
              <IconButton onClick={handleClose} />
            </Box>
          </Grid>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box css={classes.container} mx={4}>
          <TextField
            label="Search"
            placeholder="Enter Your Search Query"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box my={5} mx={4} pb={5}>
          <Grid container alignItems="center">
            <Box>
              <Typography css={classes.lightText} variant="h6">
                Suggested Results
              </Typography>
            </Box>
            <Box>
              <Grid container>
                {suggestedItems.map(suggestion => (
                  <Box mx={2} px={2}  style={{ border: "1px solid #f1f1f2!important" }}>
                    <Link
                      to={`/${suggestion}`}
                      css={classes.suggestionLink}
                    >
                      <Typography variant="h6">
                        {suggestion.split("-").join(" ")}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SearchForm
