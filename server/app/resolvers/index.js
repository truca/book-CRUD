import {resolversSchemas} from '@orion-js/graphql'
import Auth from './Auth'
import Users from './Users'
import Books from './Books'

export default {
  ...resolversSchemas,
  ...Auth,
  ...Users,
  ...Books,
}
