# useAJAX React hook
A hook for running an async function in React.

The primary use case is for running network requests, but it can be used for any asynchronous operation passed as the first argument as described below.

For more complex use cases a hook like [useSWR](https://github.com/vercel/swr) is recommended.

## REQUIRED Arguments

Name | Description
--- | ---
ajaxFunction | asynchronous function to run, MUST return a Promise
args | an array of arguments to be passed to the asynchronous function

## OPTIONS Object

Name/Key | Description
--- | ---
timeOut | number of ms to wait before running the function - defaults to 0
runOnce | boolean indication whether the request should run once or watch for changes to the function arguments and run on change - defaults to false

## RETURNS
This hook returns an object with 3 keys indicating different states of the asynchronous operation

Name/Key | Description
--- | ---
loading | boolean, indicating whether the asynchronous function is still pending
data | is either undefined or the data returned from the asynchronous function
error | is undefined unless an error occurred
