'use client'
import * as React from 'react'

import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function createData(name, address, orderDate, items, price) {
  return {
    name,
    address,
    orderDate,
    items,
    price,
    history: [
      { date: '2022-06-12', customerId: '11091700', amount: 3 },
      { date: '2022-06-13', customerId: 'Anonymous', amount: 1 }
    ]
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const [action, setAction] = React.useState('')

  const handleActionChange = event => {
    const value = event.target.value

    setAction(value)
    console.log(`Action selected for row ${row.name}: ${value}`)
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell align='right'>
          <Select value={action} displayEmpty onChange={handleActionChange}>
            <MenuItem value='' disabled>
              Select Action
            </MenuItem>
            <MenuItem value='complete'>Order Complete</MenuItem>
            {/* <MenuItem value='return'>Return Item</MenuItem> */}
          </Select>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Order Details
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Order Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total Price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

const rows = [
  createData('John Doe', '123 Main St', '2022-06-12', 3, 3.99),
  createData('Jane Smith', '456 Elm St', '2022-06-13', 1, 4.99),
  createData('Mike Johnson', '789 Oak St', '2022-06-12', 2, 3.79),
  createData('Emily Davis', '101 Pine St', '2022-06-13', 4, 2.5),
  createData('Chris Brown', '202 Maple St', '2022-06-12', 5, 1.5)
]

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Customer Name</TableCell>
            <TableCell>Customer Address</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
