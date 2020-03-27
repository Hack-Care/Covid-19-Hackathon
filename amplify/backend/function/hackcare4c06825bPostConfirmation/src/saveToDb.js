/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
const environment = process.env.ENV
const region = process.env.REGION
const apiAppsyncTodoGraphQLAPIIdOutput = process.env.API_HACKCARE_GRAPHQLAPIIDOUTPUT
const apiAppsyncTodoGraphQLAPIEndpointOutput = process.env.API_HACKCARE_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

global.fetch = require('cross-fetch');
require('cross-fetch/polyfill');

const AWS = require('aws-sdk');
const gql = require('graphql-tag');
const AWSAppSyncClient = require('aws-appsync').default;

const url = process.env.API_HACKCARE_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const apiKey = process.env.API_HACKCARE_GRAPHQLAPIKEYOUTPUT;
console.log("URL" + url);
console.log(region);
console.log("KEY " + apiKey);

// AWS.config.update({
//   region,
//   credentials: new AWS.Credentials(
//     process.env.AWS_ACCESS_KEY_ID,
//     process.env.AWS_SECRET_ACCESS_KEY,
//     process.env.AWS_SESSION_TOKEN
//   ),
// });
// const credentials = AWS.config.credentials;

const appsyncClient = new AWSAppSyncClient(
  {
    url,
    region,
    auth: {
      type: 'API_KEY',
      apiKey,
    },
    disableOffline: true,
  },
  {
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  }
);

exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  const mutation = gql`mutation CreateUserForEmail($email: AWSEmail!) {
    createUser(input: {email: $email}) {
      email
    }
  }`;
  // TODO this is timed out
  // appsyncClient.mutate({
  //   mutation,
  //   variables: {
  //     email: event.request.userAttributes.email
  //   }
  // })
  // .then(data => console.log(data))
  // .catch(err => console.log(err));

  callback(null, event);
};
