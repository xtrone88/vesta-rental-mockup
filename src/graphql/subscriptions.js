/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid {
    onCreateBid {
      id
      amount
      auctionID
      userID
      createdAt
      updatedAt
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
        owner
      }
    }
  }
`;
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid {
    onUpdateBid {
      id
      amount
      auctionID
      userID
      createdAt
      updatedAt
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
        owner
      }
    }
  }
`;
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid {
    onDeleteBid {
      id
      amount
      auctionID
      userID
      createdAt
      updatedAt
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
        owner
      }
    }
  }
`;
export const onCreateWatch = /* GraphQL */ `
  subscription OnCreateWatch {
    onCreateWatch {
      id
      createdAt
      updatedAt
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
        owner
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
    }
  }
`;
export const onUpdateWatch = /* GraphQL */ `
  subscription OnUpdateWatch {
    onUpdateWatch {
      id
      createdAt
      updatedAt
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
        owner
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
    }
  }
`;
export const onDeleteWatch = /* GraphQL */ `
  subscription OnDeleteWatch {
    onDeleteWatch {
      id
      createdAt
      updatedAt
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
        owner
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
    }
  }
`;
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
      PropertyUsers {
        nextToken
      }
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
      PropertyUsers {
        nextToken
      }
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
      PropertyUsers {
        nextToken
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
      createdAt
      updatedAt
      owner
      propertys {
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
      createdAt
      updatedAt
      owner
      propertys {
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
      createdAt
      updatedAt
      owner
      propertys {
        nextToken
      }
    }
  }
`;
export const onCreateAuction = /* GraphQL */ `
  subscription OnCreateAuction {
    onCreateAuction {
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
      createdAt
      updatedAt
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
    }
  }
`;
export const onUpdateAuction = /* GraphQL */ `
  subscription OnUpdateAuction {
    onUpdateAuction {
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
      createdAt
      updatedAt
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
    }
  }
`;
export const onDeleteAuction = /* GraphQL */ `
  subscription OnDeleteAuction {
    onDeleteAuction {
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
      createdAt
      updatedAt
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
    }
  }
`;
export const onCreatePropertyUser = /* GraphQL */ `
  subscription OnCreatePropertyUser {
    onCreatePropertyUser {
      id
      propertyID
      userID
      createdAt
      updatedAt
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
        owner
      }
    }
  }
`;
export const onUpdatePropertyUser = /* GraphQL */ `
  subscription OnUpdatePropertyUser {
    onUpdatePropertyUser {
      id
      propertyID
      userID
      createdAt
      updatedAt
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
        owner
      }
    }
  }
`;
export const onDeletePropertyUser = /* GraphQL */ `
  subscription OnDeletePropertyUser {
    onDeletePropertyUser {
      id
      propertyID
      userID
      createdAt
      updatedAt
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
        owner
      }
    }
  }
`;
