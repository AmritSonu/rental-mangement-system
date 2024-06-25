export const mockUsers = count => {
  const users = []

  for (let i = 0; i < count; i++) {
    users.push({
      id: i + 1,
      customerName: `Name${i + 1}`,
      total_orders: `${i + 1}`,
      address: `City${i + 1}`,
      whatsapp_number: `46656${i + 15}`
    })
  }

  return users
}

// customer name , address, total orders , contact number.
