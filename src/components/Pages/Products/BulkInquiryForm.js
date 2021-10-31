import React, { useState } from "react"
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  DialogTitle,
  Dialog,
  DialogContent,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core"

const BulkInquiryForm = ({ product, open, handleClose }) => {
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [enquiry, setEnquiry] = useState("")
  const submitEnquiry = () => {
    console.log("this will submit the form to the netlify page")
  }
  return (
    <Dialog open={open} fullWidth maxWidth="md" onClose={handleClose}>
      <DialogContent>
        <Box my={2}>
          <Box mb={2}>
            <Grid container spacing={2} alignItems="center">
              <Grid container alignItems="center" item xs={6}>
                <Typography
                  style={{ textTransform: "capitalize" }}
                  variant="h4"
                >
                  <Box textAlign="center">{product}</Box>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Select
                    fullWidth
                    variant="outlined"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                  >
                    <MenuItem value={1}>
                      Smaller Quantities (10 - 100 Kg)
                    </MenuItem>
                    <MenuItem value={2}>
                      Industrial Scale ( more than 100Kg)
                    </MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                required
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                required
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                required
                variant="outlined"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Enquiry"
                multiline
                minRows={4}
                value={enquiry}
                onChange={e => setEnquiry(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button variant="contained" fullWidth onClick={submitEnquiry}>
                Send Enquiry
              </Button>
            </Box>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default BulkInquiryForm
