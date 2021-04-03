# useAJAX React hook
A hook for running an async function in React.

You can install the package from NPM by running one of the following shell commands in your project directory:
```shell
npm i @mhsteffensen/use-ajax
yarn add @mhsteffensen/use-ajax
pnpm add @mhsteffensen/use-ajax
```

And import it in yout React components like so:
```typescript
import useAJAX from "@mhsteffensen/use-ajax"
```

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


## EXAMPLE
This is an example from a weather app that runs an async function to fetch the weather from an API, it is written in TypeScript, so if you're using JavaScript you can ignore the type annotations.

the AJAX function looks as follows:
```typescript
export const getWeather = async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await fetch(`${baseURI}weather?latitude=${lat}&longitude=${lon}`)
    return await response.json()
}
```

It takes 2 arguments and returns a Promise.

Then in your React function component

```typescript
    const { data, error, loading }: { data: WeatherData, error: undefined | any, loading: boolean } = useAJAX(getWeather, [55, 12])

    if (error) {
        return <h1>
            An error occurred
        </h1>
    }
    
    if (loading && !data) {
        return <h1>
            Loading...
        </h1>
    }
    
    if (data) {
        return <h1>
            Temperature is { data.main.temp }
        </h1>
    }
```
