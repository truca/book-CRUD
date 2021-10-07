import {resolver} from '@orion-js/app'

export default resolver({
  params: {},
  returns: String,
  async resolve(book, params, viewer) {
    return book.stock > 0
  },
})
