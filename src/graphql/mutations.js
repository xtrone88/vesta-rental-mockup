/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWatch = /* GraphQL */ `
  mutation CreateWatch(
    $input: CreateWatchInput!
    $condition: ModelWatchConditionInput
  ) {
    createWatch(input: $input, condition: $condition) {
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
export const updateWatch = /* GraphQL */ `
  mutation UpdateWatch(
    $input: UpdateWatchInput!
    $condition: ModelWatchConditionInput
  ) {
    updateWatch(input: $input, condition: $condition) {
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
export const deleteWatch = /* GraphQL */ `
  mutation DeleteWatch(
    $input: DeleteWatchInput!
    $condition: ModelWatchConditionInput
  ) {
    deleteWatch(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
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
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
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
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
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
export const createPropertyUser = /* GraphQL */ `
  mutation CreatePropertyUser(
    $input: CreatePropertyUserInput!
    $condition: ModelPropertyUserConditionInput
  ) {
    createPropertyUser(input: $input, condition: $condition) {
      id
      propertyID
      userID
      property {
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
      user {
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
export const updatePropertyUser = /* GraphQL */ `
  mutation UpdatePropertyUser(
    $input: UpdatePropertyUserInput!
    $condition: ModelPropertyUserConditionInput
  ) {
    updatePropertyUser(input: $input, condition: $condition) {
      id
      propertyID
      userID
      property {
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
      user {
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
export const deletePropertyUser = /* GraphQL */ `
  mutation DeletePropertyUser(
    $input: DeletePropertyUserInput!
    $condition: ModelPropertyUserConditionInput
  ) {
    deletePropertyUser(input: $input, condition: $condition) {
      id
      propertyID
      userID
      property {
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
      user {
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
