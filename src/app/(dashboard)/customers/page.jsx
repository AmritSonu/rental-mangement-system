'use client'
import React from 'react'

import { Table, Pagination } from 'rsuite'

import { mockUsers } from './mock'

const { Column, HeaderCell, Cell } = Table
const defaultData = mockUsers(100)

const Customers = () => {
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)

  const handleChangeLimit = dataKey => {
    setPage(1)
    setLimit(dataKey)
  }

  const data = defaultData.filter((v, i) => {
    const start = limit * (page - 1)
    const end = start + limit

    return i >= start && i < end
  })

  return (
    <div>
      <h1 class='my-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>
        Customer Management System
      </h1>

      <Table height={420} data={data}>
        <Column width={50} align='center' fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey='id' />
        </Column>
        <Column width={100} fixed>
          <HeaderCell>Customer Name</HeaderCell>
          <Cell dataKey='customerName' />
        </Column>
        <Column width={100}>
          <HeaderCell>total Orders</HeaderCell>
          <Cell dataKey='total_orders' />
        </Column>
        <Column width={200}>
          <HeaderCell>Address</HeaderCell>
          <Cell dataKey='address' />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Whatsapp Number</HeaderCell>
          <Cell dataKey='whatsapp_number' />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size='xs'
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  )
}

export default Customers
