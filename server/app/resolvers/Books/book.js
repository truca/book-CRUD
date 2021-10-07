import {resolver} from '@orion-js/app'
import Book from 'app/models/Book'
import Books from 'app/collections/Books'

export default resolver({
  params: {
    bookId: {
      type: 'ID',
    },
  },
  returns: Book,
  async resolve(params, viewer) {
    return await Books.findOne(params.bookId)
  },
})
