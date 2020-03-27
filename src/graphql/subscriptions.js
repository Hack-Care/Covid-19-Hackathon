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
        }
        nextToken
      }
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
        }
        topic
        description
        lessons {
          nextToken
        }
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
        }
      }
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
        }
        topic
        description
        lessons {
          nextToken
        }
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
        }
      }
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
        }
        topic
        description
        lessons {
          nextToken
        }
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
        }
      }
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
export const onUpdateSeries = /* GraphQL */ `
  subscription OnUpdateSeries {
    onUpdateSeries {
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
export const onDeleteSeries = /* GraphQL */ `
  subscription OnDeleteSeries {
    onDeleteSeries {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
