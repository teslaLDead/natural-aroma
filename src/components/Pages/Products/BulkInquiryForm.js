import React, { useState } from "react"
import {
  Box,
  Button,
  Grid,
  Typography,
  DialogTitle,
  Dialog,
  DialogContent,
  TextField,
  Select,
  MenuItem,
} from "@mui/material"

const BulkInquiryForm = ({ product, open, handleClose }) => {
  const [quantity, setQuantity] = useState("Smaller Quantities (10 - 100 Kg)")
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
        <form
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="product-enquiry"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="product enquiry" />
          <input type="hidden" name="product-name" value={product} />
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
                      name="quantity"
                      variant="outlined"
                      value={quantity}
                      onChange={e => setQuantity(e.target.value)}
                    >
                      <MenuItem value={"Smaller Quantities (10 - 100 Kg)"}>
                        Smaller Quantities (10 - 100 Kg)
                      </MenuItem>
                      <MenuItem value={"Industrial Scale ( more than 100Kg)"}>
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
                  name="name"
                  variant="outlined"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  required
                  name="email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  required
                  name="phone"
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
                  name="enquiry"
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
                <Button type="submit" variant="contained" fullWidth>
                  Send Enquiry
                </Button>
              </Box>
            </Grid>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default BulkInquiryForm
