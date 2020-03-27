/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: AWSEmail!) {
    getUser(email: $email) {
      email
      firstName
      lastName
      title
      occupation
      intro
      profilePicture
      lessonSeries {
        items {
          id
          seriesID
          hostEmail
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: AWSEmail
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
        intro
        profilePicture
        lessonSeries {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSeries = /* GraphQL */ `
  query GetSeries($id: ID!) {
    getSeries(id: $id) {
      id
      hostEmails {
        items {
          id
          seriesID
          hostEmail
        }
        nextToken
      }
      topic
      description
      lessons {
        items {
          id
          seriesID
          hostEmail
          dateTime
          duration
          link
          topicClass
          topic
          description
        }
        nextToken
      }
    }
  }
`;
export const listSeriess = /* GraphQL */ `
  query ListSeriess(
    $filter: ModelSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hostEmails {
          nextToken
        }
        topic
        description
        lessons {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($dateTime: AWSDateTime!) {
    getLesson(dateTime: $dateTime) {
      id
      seriesID
      series {
        id
        hostEmails {
          nextToken
        }
        topic
        description
        lessons {
          nextToken
        }
      }
      hostEmail
      dateTime
      duration
      link
      topicClass
      topic
      description
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $dateTime: AWSDateTime
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLessons(
      dateTime: $dateTime
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        seriesID
        series {
          id
          topic
          description
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
      }
      nextToken
    }
  }
`;
export const eventsBySeries = /* GraphQL */ `
  query EventsBySeries(
    $seriesID: ID
    $dateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsBySeries(
      seriesID: $seriesID
      dateTime: $dateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        seriesID
        series {
          id
          topic
          description
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
      }
      nextToken
    }
  }
`;
export const eventsByUser = /* GraphQL */ `
  query EventsByUser(
    $hostEmail: AWSEmail
    $dateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByUser(
      hostEmail: $hostEmail
      dateTime: $dateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        seriesID
        series {
          id
          topic
          description
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
      }
      nextToken
    }
  }
`;
