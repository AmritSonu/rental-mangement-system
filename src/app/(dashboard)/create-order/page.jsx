'use client'
import React, { useState } from 'react'

import { DateRangePicker } from 'rsuite'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

import Form from '@components/Form'
import MultipleSelectChip from '@/@core/components/multipleSelectorChip/MultipleSelectorChip'

const FormLayoutsWithIcon = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp_phone: '',
    address: ''
  })

  const [selectedRange, setSelectedRange] = useState(null)

  const handleDateChange = range => {
    setSelectedRange(range)
    console.log('Selected Range:', range)
  }

  const handleChange = e => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Data:', formData)

    // You can now send formData to your server or perform other actions
  }

  return (
    <Card>
      <CardHeader title='Customer Details' />
      <CardContent>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Name'
                placeholder='John Doe'
                name='name'
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-user-3-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='johndoe@gmail.com'
                name='email'
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-mail-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Phone No.'
                placeholder='91-987654-321'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-phone-fill' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Whatsapp No.'
                placeholder='91-987654-321'
                name='whatsapp_phone'
                value={formData.whatsapp_phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-phone-fill' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                rows={4}
                multiline
                label='Address'
                placeholder='123 Gill Road ...'
                name='address'
                value={formData.address}
                onChange={handleChange}
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-message-2-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CardHeader title='Select Garments' />
              <MultipleSelectChip />
            </Grid>
            {/* here add this new demand  */}
            <Grid item xs={12}>
              <CardHeader title='Select Rantal Date' />

              <DateRangePicker onChange={handleDateChange} />
              {selectedRange && (
                <div>
                  <p>Start Date: {selectedRange[0].toString()}</p>
                  <p>End Date: {selectedRange[1].toString()}</p>
                </div>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button variant='contained' type='submit'>
                Create Order
              </Button>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsWithIcon
