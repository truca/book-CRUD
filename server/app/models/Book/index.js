import {Model} from '@orion-js/app'

export default new Model({
  name: 'Book',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})
