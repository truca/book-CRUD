import {resolver} from '@orion-js/app'
import Books from 'app/collections/Books'
import Book from 'app/models/Book'

export default resolver({
  params: {
    bookId: {
      type: 'ID',
    },
    title: {
      type: String,
      optional: true,
    },
    description: {
      type: String,
      optional: true,
    },
    stock: {
      type: Number,
      optional: true,
    },
  },
  mutation: true,
  returns: Book,
  async resolve(params, viewer) {
    const {bookId, ...book} = params
    return await Books.findOneAndUpdate({_id: bookId}, {$set: book}, {returnOriginal: false})
  },
})
