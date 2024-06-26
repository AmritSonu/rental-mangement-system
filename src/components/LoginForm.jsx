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
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { doCredentialLogin } from '@/app/actions'

const LoginForm = ({ mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  async function onSubmit(event) {
    event.preventDefault()

    try {
      const formData = new FormData(event.currentTarget)

      const response = await doCredentialLogin(formData)

      if (response.error) {
        console.error(response.error)
        setError(response.error.message)
      } else {
        router.push('/home')
      }
    } catch (e) {
      console.error(e)
      setError('Check your Credentials')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative p-6'>
      <Card className='flex flex-col sm:w-[450px]'>
        <CardContent className='p-6 sm:p-12'>
          <Link href='/' className='flex justify-center items-center mb-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
              <Typography className='mb-1'>Please sign-in to your account and start the adventure</Typography>
            </div>
            <form noValidate autoComplete='off' onSubmit={onSubmit} className='flex flex-col gap-5'>
              <div className='text-xl text-red-500'>{error}</div>
              <TextField autoFocus fullWidth label='Email' name='email' type='email' />
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
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                  Forgot password?
                </Typography>
              </div>
              <Button fullWidth variant='contained' type='submit'>
                Credential Login
              </Button>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>New on our platform?</Typography>
                <Typography component={Link} href='/register' color='primary'>
                  Create an account
                </Typography>
              </div>
              <Divider className='gap-3'>or</Divider>
            </form>
            <SocialLogins />
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default LoginForm

// 'use client'

// import { useState } from 'react'

// import { useRouter } from 'next/navigation'

// import SocialLogins from './SocialLogins'
// import { doCredentialLogin } from '@/app/actions'

// const LoginForm = () => {
//   const router = useRouter()
//   const [error, setError] = useState('')

//   async function onSubmit(event) {
//     event.preventDefault()

//     try {
//       const formData = new FormData(event.currentTarget)

//       const response = await doCredentialLogin(formData)

//       if (!!response.error) {
//         console.error(response.error)
//         setError(response.error.message)
//       } else {
//         router.push('/home')
//       }
//     } catch (e) {
//       console.error(e)
//       setError('Check your Credentials')
//     }
//   }

//   return (
//     <>
//       <div className='text-xl text-red-500'>{error}</div>
//       <form className='my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md' onSubmit={onSubmit}>
//         <div className='my-2'>
//           <label htmlFor='email'>Email Address</label>
//           <input className='border mx-2 border-gray-500 rounded' type='email' name='email' id='email' />
//         </div>

//         <div className='my-2'>
//           <label htmlFor='password'>Password</label>
//           <input className='border mx-2 border-gray-500 rounded' type='password' name='password' id='password' />
//         </div>

//         <button type='submit' className='bg-orange-300 mt-4 rounded flex justify-center items-center w-36'>
//           Ceredential Login
//         </button>
//       </form>
//       <SocialLogins />
//     </>
//   )
// }

// export default LoginForm
