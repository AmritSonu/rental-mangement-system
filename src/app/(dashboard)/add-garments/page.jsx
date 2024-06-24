'use client'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

import Form from '@components/Form'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const FormLayoutsWithIcon = () => {
  const [age, setAge] = React.useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    price: '',
    address: ''
  })

  const handleChangeSelector = event => {
    setAge(event.target.value)
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
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h1' gutterBottom>
          Add New Garments
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Button
                component='label'
                role={undefined}
                variant='contained'
                tabIndex={-1}
                startIcon={<i className='ri-mail-line' />}
              >
                Upload file
                <VisuallyHiddenInput type='file' />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Garment Name'
                placeholder='Sherwani'
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
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  label='select Gender'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Children</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Price'
                placeholder='e.g.- 1500'
                name='price'
                value={formData.price}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-dollar-fill' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Garment Sizes'
                placeholder='S,M,L,XL,XXL etc...'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                rows={4}
                multiline
                label='Description'
                placeholder='confortable,thin,bright etc...'
                name='description'
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
              <Button variant='contained' type='submit'>
                Create
              </Button>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsWithIcon
