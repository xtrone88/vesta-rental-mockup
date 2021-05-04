import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Watch {
  readonly id: string;
  readonly User?: User;
  readonly Auction?: Auction;
  constructor(init: ModelInit<Watch>);
  static copyOf(source: Watch, mutator: (draft: MutableModel<Watch>) => MutableModel<Watch> | void): Watch;
}

export declare class User {
  readonly id: string;
  readonly email?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly address1?: string;
  readonly address2?: string;
  readonly postalCode?: string;
  readonly city?: string;
  readonly state?: string;
  readonly phone?: string;
  readonly Bids?: (Bid | null)[];
  readonly propertys?: (PropertyUser | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Bid {
  readonly id: string;
  readonly amount: number;
  readonly auctionID: string;
  readonly userID?: string;
  readonly User?: User;
  constructor(init: ModelInit<Bid>);
  static copyOf(source: Bid, mutator: (draft: MutableModel<Bid>) => MutableModel<Bid> | void): Bid;
}

export declare class PropertyUser {
  readonly id: string;
  readonly property: Property;
  readonly user: User;
  constructor(init: ModelInit<PropertyUser>);
  static copyOf(source: PropertyUser, mutator: (draft: MutableModel<PropertyUser>) => MutableModel<PropertyUser> | void): PropertyUser;
}

export declare class Property {
  readonly id: string;
  readonly bedrooms?: string;
  readonly baths?: string;
  readonly address1?: string;
  readonly address2?: string;
  readonly zip?: string;
  readonly city?: string;
  readonly state?: string;
  readonly apiData?: string;
  readonly description?: string;
  readonly amenities?: string;
  readonly PropertyUsers?: (PropertyUser | null)[];
  constructor(init: ModelInit<Property>);
  static copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}

export declare class Auction {
  readonly id: string;
  readonly title: string;
  readonly startsAt: string;
  readonly endsAt: string;
  readonly bookingStartDate?: string;
  readonly bookingEndDate?: string;
  readonly status?: string;
  readonly highestBid?: number;
  readonly views?: number;
  readonly Bids?: (Bid | null)[];
  readonly Property?: Property;
  constructor(init: ModelInit<Auction>);
  static copyOf(source: Auction, mutator: (draft: MutableModel<Auction>) => MutableModel<Auction> | void): Auction;
}