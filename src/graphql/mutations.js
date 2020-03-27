/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSeriesEditor = /* GraphQL */ `
  mutation CreateSeriesEditor(
    $input: CreateSeriesEditorInput!
    $condition: ModelSeriesEditorConditionInput
  ) {
    createSeriesEditor(input: $input, condition: $condition) {
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
export const updateSeriesEditor = /* GraphQL */ `
  mutation UpdateSeriesEditor(
    $input: UpdateSeriesEditorInput!
    $condition: ModelSeriesEditorConditionInput
  ) {
    updateSeriesEditor(input: $input, condition: $condition) {
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
export const deleteSeriesEditor = /* GraphQL */ `
  mutation DeleteSeriesEditor(
    $input: DeleteSeriesEditorInput!
    $condition: ModelSeriesEditorConditionInput
  ) {
    deleteSeriesEditor(input: $input, condition: $condition) {
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
export const createSeries = /* GraphQL */ `
  mutation CreateSeries(
    $input: CreateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    createSeries(input: $input, condition: $condition) {
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
export const updateSeries = /* GraphQL */ `
  mutation UpdateSeries(
    $input: UpdateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    updateSeries(input: $input, condition: $condition) {
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
export const deleteSeries = /* GraphQL */ `
  mutation DeleteSeries(
    $input: DeleteSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    deleteSeries(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
