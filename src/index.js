/* eslint-env browser */
import parse from './parse'

const queryString = location && location.search && location.search.slice(1)

export default parse(queryString)
