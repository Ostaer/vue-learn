export const getResult = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) {
        resolve({ code:200, status: 'very good'})
      }
    },500)
  })
}
