import {paginatedResolver} from '@orion-js/app'
import Book from 'app/models/Book'
import Books from 'app/collections/Books'

export default paginatedResolver({
  modelName: 'Books',
  params: {},
  returns: Book,
  async getCursor(params, viewer) {
    return await Books.find().sort({title: -1})
  },
})
