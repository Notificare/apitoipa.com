const AWS = require('aws-sdk')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

AWS.config.update({
  region: process.env.AWS_REGION || 'eu-west-1',
  sslEnabled: true
});

if (process.env.CLOUDFRONT_DISTRIBUTION) {
  const cloudfront = new AWS.CloudFront()
  cloudfront.createInvalidation({
    DistributionId: process.env.CLOUDFRONT_DISTRIBUTION,
    InvalidationBatch: {
      CallerReference: new Date().getTime().toString(),
      Paths: {
        Quantity: 1,
        Items: ["/*"]
      }
    }
  }, (err, invalidation) => {
    if (err) {
      console.log(`Error creating invalidation: ${err.message}`)
    } else {
      console.log(`Invalidation ${invalidation.Invalidation.Id}, status is ${invalidation.Invalidation.Status}`)
    }
  })
} else {
  console.log(`Missing distribution id`)
}
