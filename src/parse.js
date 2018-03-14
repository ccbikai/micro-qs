export default (str = '') => {
  const vars = {}

  if (str) {
    const hashes = str.split('&')

    for (let hash of hashes) {
      const hashArr = hash.split('=')

      vars[hashArr[0]] = hashArr[1]
    }
  }
  return vars
}
