/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWatch = /* GraphQL */ `
  subscription OnCreateWatch {
    onCreateWatch {
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
export const onUpdateWatch = /* GraphQL */ `
  subscription OnUpdateWatch {
    onUpdateWatch {
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
export const onDeleteWatch = /* GraphQL */ `
  subscription OnDeleteWatch {
    onDeleteWatch {
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
      PropertyUsers {
        nextToken
      }
      createdAt
      updatedAt
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
      PropertyUsers {
        nextToken
      }
      createdAt
      updatedAt
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
      PropertyUsers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid {
    onCreateBid {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid {
    onUpdateBid {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid {
    onDeleteBid {
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
export const onCreatePropertyUser = /* GraphQL */ `
  subscription OnCreatePropertyUser {
    onCreatePropertyUser {
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
export const onUpdatePropertyUser = /* GraphQL */ `
  subscription OnUpdatePropertyUser {
    onUpdatePropertyUser {
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
export const onDeletePropertyUser = /* GraphQL */ `
  subscription OnDeletePropertyUser {
    onDeletePropertyUser {
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
