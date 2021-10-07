import {resolver} from '@orion-js/app'
import Books from 'app/collections/Books'
import Book from 'app/models/Book'

export default resolver({
  params: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
    },
  },
  mutation: true,
  returns: Book,
  async resolve(params, viewer) {
    const book = {
      ...params,
    }
    book._id = await Books.insert(book)
    return book
  },
})
