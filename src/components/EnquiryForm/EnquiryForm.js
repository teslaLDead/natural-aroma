import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Typography
} from "@mui/material"

const EnquiryForm = ({ title, product, openState, closeForm }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(openState)
  }, [openState])

  const handleClose = () => {
    setOpen(false)
    closeForm()
  }

  // for populating products and amount
  const [productList, setProductList] = useState([])
  const [amountList, setAmountList] = useState([])

  // values for fields
  const [product, setProduct] = useState("")
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, Number] = useState("")
  const [enquiry, setEnquiry] = useState("")
  // for sending data to our netlify account or other option
  const sendEnquiry = () => {
    console.log("enquiry bhej do")
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Grid container align="center" justifyContent="space-between">
          <Typography variant="h3">{title}</Typography>
          <Box>
            <IconButton onClick={handleClose} />
          </Box>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box>
            <Grid container>
              <Grid item xs={6}>
                <Select value={product} label="Product" variant="outlined">
                  {productList.map(product => (
                    <MenuItem value={product}>{product}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                {/* // ?? change amount to "quantitiy" */}
                <Select value={amount} label="Amount" variant="outlined">
                  {amountList.map(amount => (
                    <MenuItem value={amount}>{amount}</MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <TextField
              value={name}
              label="Full Name"
              placeholder="Enter your Full Name"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              value={email}
              label="Email"
              placeholder="email@email.com"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              value={number}
              label="Phone Number"
              placeholder="+91-9999-999-999"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              value={enquiry}
              label="Enquiry"
              placeholder="Enter you enquiry"
              variant="outlined"
              required
              fullWidth
              multiline
              rows="6"
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={sendEnquiry}>
              Send Enquiry
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default EnquiryForm
