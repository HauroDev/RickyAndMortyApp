const isPropertys = (array, obj) => {
  if (array.length !== Object.keys(obj).length) return false

  for (let item of array) {
    if (!obj[item]) return false
  }

  return true
}
module.exports = {
  isPropertys
}