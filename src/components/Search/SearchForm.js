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
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({})

const SearchForm = ({ openState, closeSearch }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  // this suggested items will be changed depending on the search query entered
  const [suggestedItems, setSuggestedItems] = useState([])

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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Grid container>
          <Typography>Search or products range and more</Typography>
          <Box>
            <IconButton onClick={handleClose} />
          </Box>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            label="Search"
            placeholder="Enter Your Search Query"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box>
          <Grid container align="center">
            <Box>
              <p>Suggested Results</p>
            </Box>
            <Box>
              <Grid container>
                {suggestedItems.map(suggestion => (
                  <Box>{suggestion}</Box>
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
