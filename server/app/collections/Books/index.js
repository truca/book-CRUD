import {Collection} from '@orion-js/app'
import Book from 'app/models/Book'

export default new Collection({
  name: 'books',
  model: Book,
  indexes: [{keys: {title: 1}, options: {unique: true}}],
})
