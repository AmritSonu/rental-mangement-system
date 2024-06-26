'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Component Imports
import SocialLogins from './SocialLogins'
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const RegistrationForm = ({ mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const router = useRouter()

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const formData = new FormData(event.currentTarget)

      const name = formData.get('name')
      const email = formData.get('email')
      const password = formData.get('password')

      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      response.status === 201 && router.push('/')
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative p-6'>
      <Card className='flex flex-col sm:w-[450px]'>
        <CardContent className='p-6 sm:p-12'>
          <Link href='/' className='flex justify-center items-start mb-6'>
            <Logo />
          </Link>
          <Typography variant='h4'>Adventure starts here 🚀</Typography>
          <Typography className='mb-1'>Make your app management easy and fun!</Typography>
          <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <TextField autoFocus fullWidth label='Name' name='name' />
            <TextField fullWidth label='Email' name='email' type='email' />
            <TextField
              fullWidth
              label='Password'
              name='password'
              type={isPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      size='small'
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  <span>I agree to </span>
                  <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </Link>
                </>
              }
            />
            <Button fullWidth variant='contained' type='submit'>
              Register
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href='/login' color='primary'>
                Sign in instead
              </Typography>
            </div>
            <Divider className='gap-3'>Or</Divider>
            <SocialLogins />
          </form>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default RegistrationForm

// 'use client'
// import { useRouter } from 'next/navigation'

// import SocialLogins from './SocialLogins'

// const RegistrationForm = () => {
//   const router = useRouter()

//   async function handleSubmit(event) {
//     event.preventDefault()

//     try {
//       const formData = new FormData(event.currentTarget)

//       const name = formData.get('name')
//       const email = formData.get('email')
//       const password = formData.get('password')

//       const response = await fetch(`/api/register`, {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password
//         })
//       })

//       response.status === 201 && router.push('/')
//     } catch (e) {
//       console.error(e.message)
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className='my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md'>
//         <div className='my-2'>
//           <label htmlFor='email'>Name</label>
//           <input className='border mx-2 border-gray-500 rounded' type='text' name='name' id='name' />
//         </div>
//         <div className='my-2'>
//           <label htmlFor='email'>Email Address</label>
//           <input className='border mx-2 border-gray-500 rounded' type='email' name='email' id='email' />
//         </div>

//         <div className='my-2'>
//           <label htmlFor='password'>Password</label>
//           <input className='border mx-2 border-gray-500 rounded' type='password' name='password' id='password' />
//         </div>

//         <button type='submit' className='bg-orange-300 mt-4 rounded flex justify-center items-center w-36'>
//           Register
//         </button>
//       </form>
//       <SocialLogins />
//     </>
//   )
// }

// export default RegistrationForm
