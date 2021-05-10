Documentation starts here: https://docs.amplify.aws/ui/auth/authenticator/q/framework/vue#recommended-usage

since we are using Vue2 use vue2, however it seems like AWS is in the process of transforming the components to be web-components so you will see mixed usage of ui-vue and ui-components.

The import for `import "@aws-amplify/ui-vue";` is supposed to do the magic of registering the web components automatically;

One of the trickier things to test here will be uploading of avatars as it must be authenticated and must use s3.

https://github.com/aws-amplify/amplify-js is where to search for issues related to the problems you are experiencing, might be worthwhile to search "amplify vue \${my_problem}"

https://docs.amplify.aws/lib/auth/getting-started/q/platform/js

https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js

If not able to use amplify console, obtain a copy of aws-exports.js for the environment you are working on

##

Amplify Admin url: https://us-east-1.admin.amplifyapp.com/admin/login?appId=d59dmwv7bt3os&backendEnvironmentName=staging

```
amplify update api
```

Will sync the current backend api changes to amplify/backend

```
amplify codegen
```

creates / updates src/graphql files

```
amplify publish
```

Seems to not be setup
