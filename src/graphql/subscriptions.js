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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSeriesEditor = /* GraphQL */ `
  subscription OnCreateSeriesEditor {
    onCreateSeriesEditor {
      id
      seriesID
      hostEmail
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
      host {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSeriesEditor = /* GraphQL */ `
  subscription OnUpdateSeriesEditor {
    onUpdateSeriesEditor {
      id
      seriesID
      hostEmail
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
      host {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSeriesEditor = /* GraphQL */ `
  subscription OnDeleteSeriesEditor {
    onDeleteSeriesEditor {
      id
      seriesID
      hostEmail
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
      host {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSeries = /* GraphQL */ `
  subscription OnCreateSeries {
    onCreateSeries {
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
export const onUpdateSeries = /* GraphQL */ `
  subscription OnUpdateSeries {
    onUpdateSeries {
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
export const onDeleteSeries = /* GraphQL */ `
  subscription OnDeleteSeries {
    onDeleteSeries {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
