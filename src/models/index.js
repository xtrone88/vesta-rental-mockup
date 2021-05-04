// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Watch, User, Bid, PropertyUser, Property, Auction } = initSchema(schema);

export {
  Watch,
  User,
  Bid,
  PropertyUser,
  Property,
  Auction
};