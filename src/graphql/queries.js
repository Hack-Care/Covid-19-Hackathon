/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      firstName
      lastName
      title
      occupation
      description
      image
      events {
        items {
          id
          hostEmail
          time
          duration
          link
          topic
          description
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        firstName
        lastName
        title
        occupation
        description
        image
        events {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($time: AWSTime!) {
    getEvent(time: $time) {
      id
      hostEmail
      time
      duration
      link
      topic
      description
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $time: AWSTime
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEvents(
      time: $time
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        hostEmail
        time
        duration
        link
        topic
        description
      }
      nextToken
    }
  }
`;
export const eventsByHost = /* GraphQL */ `
  query EventsByHost(
    $hostEmail: String
    $time: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByHost(
      hostEmail: $hostEmail
      time: $time
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostEmail
        time
        duration
        link
        topic
        description
      }
      nextToken
    }
  }
`;
