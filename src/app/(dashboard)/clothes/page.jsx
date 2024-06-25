import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import classnames from 'classnames'

import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'

// Vars
const rowsData = [
  {
    imageSrc: '/images/clothes/sherwani-dress.jpg',
    name: 'Sherwani Suit',
    sizes: 'S,L,XL,XXL',
    price: '200',
    iconClass: 'text-primary',
    roleIcon: 'ri-vip-crown-line',
    role: 'male',
    status: 'unavaileble'
  },
  {
    imageSrc: '/images/clothes/sherwani-dress.jpg',
    name: 'Richard Payne',
    sizes: 'S,L,XL,XXL',
    price: '230',
    iconClass: 'text-warning',
    roleIcon: 'ri-edit-box-line',
    role: 'male',
    status: 'active'
  },
  {
    imageSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    sizes: 'S,L,XL,XXL',
    price: '440',
    iconClass: 'text-error',
    roleIcon: 'ri-computer-line',
    role: 'female',
    status: 'active'
  },
  {
    imageSrc: '/images/clothes/sherwani-dress.jpg',
    name: 'Mr. Justin Richardson',
    sizes: 'S,L,XL,XXL',
    price: '346',
    iconClass: 'text-warning',
    roleIcon: 'ri-edit-box-line',
    role: 'male',
    status: 'unavaileble'
  },
  {
    imageSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    sizes: 'S,L,XL',
    price: '743',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    role: 'female',
    status: 'active'
  },
  {
    imageSrc: '/images/clothes/sherwani-dress.jpg',
    name: 'Crystal Mays',
    sizes: 'S,L,XL',
    price: '564',
    iconClass: 'text-warning',
    roleIcon: 'ri-edit-box-line',
    role: 'male',
    status: 'unavaileble'
  },
  {
    imageSrc: '/images/clothes/sherwani-dress.jpg',
    name: 'Mary Garcia',
    sizes: 'XL,XXL',
    price: '564',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    role: 'female',
    status: 'inactive'
  },
  {
    imageSrc: '/images/avatars/8.png',
    name: 'Megan Roberts',
    sizes: 'S,L,XL,XXL',
    price: '565',
    iconClass: 'text-success',
    roleIcon: 'ri-user-3-line',
    role: 'female',
    status: 'active'
  }
]

const Table = () => {
  return (
    <>
      <h1 class='my-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>
        Garments Management System
      </h1>
      <Card>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>For</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rowsData.map((row, index) => (
                <tr key={index}>
                  <td className='!plb-1'>
                    <div className='flex items-center gap-3'>
                      <CustomAvatar src={row.imageSrc} size={34} />
                      <div className='flex flex-col'>
                        <Typography color='text.primary' className='font-medium'>
                          {row.name}
                        </Typography>
                        <Typography variant='body2'>{row.sizes}</Typography>
                      </div>
                    </div>
                  </td>
                  <td className='!plb-1'>
                    <Typography>{row.price}</Typography>
                  </td>
                  <td className='!plb-1'>
                    <div className='flex gap-2'>
                      <i className={classnames('ri-user-3-line', row.iconClass, 'text-[22px]')} />
                      <Typography color='text.primary'>{row.role}</Typography>
                    </div>
                  </td>
                  <td className='!pb-1'>
                    <Chip
                      className='capitalize'
                      variant='tonal'
                      color={
                        row.status === 'unavaileble' ? 'warning' : row.status === 'inactive' ? 'secondary' : 'success'
                      }
                      label={row.status}
                      size='small'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  )
}

export default Table
