export function INCREMENT(data) {
  // console.log('action-data', data)
  return {
    type: 'INCREMENT',
    data
  }
}

export function DECREMENT(data) {
  return {
    type: 'DECREMENT',
    data
  }
}