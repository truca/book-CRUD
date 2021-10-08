import {job} from '@orion-js/jobs'
import Books from 'app/collections/Books'
import toArray from 'lodash/toArray'

export default job({
  type: 'recurrent',
  runEvery: 1000 * 10,
  async run(params) {
    const books = await Books.find().toArray()
    console.log(books)
    const sortedBookSales = books
      .map(book => ({title: book.title, todaySales: book.todaySales}))
      .sort((a, b) => a.todaySales - b.todaySales)
    // TODO: send this information to another service
    console.log(sortedBookSales)
    return Books.updateMany({}, {$set: {todaySales: 0}})
  },
})
