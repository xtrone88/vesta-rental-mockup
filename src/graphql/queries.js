/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWatch = /* GraphQL */ `
  query GetWatch($id: ID!) {
    getWatch(id: $id) {
      id
      User {
        id
        email
        firstname
        lastname
        address1
        address2
        postalCode
        city
        state
        phone
        createdAt
        updatedAt
      }
      Auction {
        id
        title
        startsAt
        endsAt
        bookingStartDate
        bookingEndDate
        status
        highestBid
        views
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWatchs = /* GraphQL */ `
  query ListWatchs(
    $filter: ModelWatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      bedrooms
      baths
      address1
      address2
      zip
      city
      state
      apiData
      description
      amenities
      PropertyUsers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bedrooms
        baths
        address1
        address2
        zip
        city
        state
        apiData
        description
        amenities
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      firstname
      lastname
      address1
      address2
      postalCode
      city
      state
      phone
      Bids {
        nextToken
      }
      propertys {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstname
        lastname
        address1
        address2
        postalCode
        city
        state
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
      id
      amount
      auctionID
      userID
      User {
        id
        email
        firstname
        lastname
        address1
        address2
        postalCode
        city
        state
        phone
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        auctionID
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
      id
      title
      startsAt
      endsAt
      bookingStartDate
      bookingEndDate
      status
      highestBid
      views
      Bids {
        nextToken
      }
      Property {
        id
        bedrooms
        baths
        address1
        address2
        zip
        city
        state
        apiData
        description
        amenities
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        startsAt
        endsAt
        bookingStartDate
        bookingEndDate
        status
        highestBid
        views
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
