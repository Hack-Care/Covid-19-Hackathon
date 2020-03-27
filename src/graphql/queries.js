/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSeriesEditors = /* GraphQL */ `
  query SyncSeriesEditors(
    $filter: ModelSeriesEditorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSeriesEditors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        seriesID
        hostEmail
        series {
          id
          topic
          description
          _version
          _deleted
          _lastChangedAt
        }
        host {
          email
          firstName
          lastName
          title
          occupation
          intro
          profilePicture
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSeries = /* GraphQL */ `
  query SyncSeries(
    $filter: ModelSeriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSeries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        hostEmails {
          nextToken
          startedAt
        }
        topic
        description
        lessons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        topic
        description
        lessons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessons = /* GraphQL */ `
  query SyncLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        seriesID
        series {
          id
          topic
          description
          _version
          _deleted
          _lastChangedAt
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          startedAt
        }
        topic
        description
        lessons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      hostEmail
      dateTime
      duration
      link
      topicClass
      topic
      description
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        hostEmail
        dateTime
        duration
        link
        topicClass
        topic
        description
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
