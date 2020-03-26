/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
