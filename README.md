## Deploy application
Here are steps to deploy application to AWS S3 bucket and distribute it to cloud front

- Install [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Install serverless `npm i -g serverless`
- Configure AWS credentials `serverless config credentials --provider provider --key ACCESS_KEY --secret SECRET
`
- Run command `sls deploy`

## Test locally
To test lambda locally run `serverless offline`. Using Postman (or any other application) send requests available endpoints