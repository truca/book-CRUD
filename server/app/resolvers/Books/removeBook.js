import {resolver} from '@orion-js/app'
import Books from 'app/collections/Books'
import Book from 'app/models/Book'

export default resolver({
  params: {
    bookId: {
      type: 'ID',
    },
  },
  mutation: true,
  returns: 'ID',
  async resolve(params, viewer) {
    const {bookId} = params
    await Books.deleteOne({_id: bookId})
    return bookId
  },
})
