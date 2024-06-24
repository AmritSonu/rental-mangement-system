'use client'
import * as React from 'react'

import { DataGrid } from '@mui/x-data-grid'
import { MenuItem, Select, Typography } from '@mui/material'

// Define the columns for the DataGrid
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'itemName', headerName: 'Item Name', width: 130 },
  { field: 'customerName', headerName: 'Customer Name', width: 130 },
  {
    field: 'itemStatus',
    headerName: 'Item Status',
    width: 130,
    type: 'singleSelect',
    valueOptions: ['On Rent', 'Returned']
  },
  {
    field: 'paymentStatus',
    headerName: 'Payment Status',
    width: 130,
    type: 'singleSelect',
    valueOptions: ['Paid', 'Not Paid Yet']
  },
  {
    field: 'options',
    headerName: 'Options',
    width: 160,
    renderCell: params => (
      <Select
        value=''
        displayEmpty
        onChange={event => {
          const value = event.target.value

          console.log(`Option selected for row ${params.id}: ${value}`)
        }}
      >
        <MenuItem value='' disabled>
          Select Option
        </MenuItem>
        <MenuItem value='booked'>Item Booked</MenuItem>
        <MenuItem value='on_rent'>Payment Done</MenuItem>
        <MenuItem value='on_rent'>Item On rent</MenuItem>
        <MenuItem value='complete'>Order Completed</MenuItem>
        <MenuItem value='cancel'>Cancel Order</MenuItem>
      </Select>
    )
  }
]

// Define the rows with dummy data
const rows = [
  {
    id: 1,
    itemName: 'Tuxedo',
    customerName: 'John Doe',
    itemStatus: 'On Rent',
    paymentStatus: 'Paid',
    rentalDate: '2022-06-12'
  },
  {
    id: 2,
    itemName: 'Evening Gown',
    customerName: 'Jane Smith',
    itemStatus: 'Returned',
    paymentStatus: 'Not Paid Yet',
    rentalDate: '2022-06-13'
  },
  {
    id: 3,
    itemName: 'Casual Shirt',
    customerName: 'Mike Johnson',
    itemStatus: 'On Rent',
    paymentStatus: 'Paid',
    rentalDate: '2022-06-12'
  },
  {
    id: 4,
    itemName: 'Wedding Dress',
    customerName: 'Emily Davis',
    itemStatus: 'Returned',
    paymentStatus: 'Paid',
    rentalDate: '2022-06-13'
  },
  {
    id: 5,
    itemName: 'Blazer',
    customerName: 'Chris Brown',
    itemStatus: 'On Rent',
    paymentStatus: 'Not Paid Yet',
    rentalDate: '2022-06-12'
  },
  {
    id: 6,
    itemName: 'Jeans',
    customerName: 'Patricia Taylor',
    itemStatus: 'On Rent',
    paymentStatus: 'Paid',
    rentalDate: '2022-06-13'
  },
  {
    id: 7,
    itemName: 'Sweater',
    customerName: 'Robert Wilson',
    itemStatus: 'Returned',
    paymentStatus: 'Paid',
    rentalDate: '2022-06-12'
  },
  {
    id: 8,
    itemName: 'Skirt',
    customerName: 'Linda Martinez',
    itemStatus: 'On Rent',
    paymentStatus: 'Not Paid Yet',
    rentalDate: '2022-06-13'
  },
  {
    id: 9,
    itemName: 'Jacket',
    customerName: 'David Anderson',
    itemStatus: 'Returned',
    paymentStatus: 'Paid',
    rentalDate: '2022-06-12'
  }
]

// Function to filter rows by date range
const filterRowsByDate = (rows, startDate, endDate) => {
  const start = new Date(startDate)
  const end = new Date(endDate)

  return rows.filter(row => {
    const rentalDate = new Date(row.rentalDate)

    return rentalDate >= start && rentalDate <= end
  })
}

// Filter rows for the date range 12-06-2022 to 13-06-2022
const filteredRows = filterRowsByDate(rows, '2022-06-12', '2022-06-13')

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography variant='h1' gutterBottom>
        Garments on Rent
      </Typography>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
