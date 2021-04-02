import { useState, useEffect } from 'react';

// A hook for running an AJAX request
//
//
// REQUIRED Arguments
//
// ajaxFunction = asynchronous function to run
// args = an array of arguments to be passed to the asynchronous function
//
//
// OPTIONS Object keys
//
// timeOut = number of ms to wait before running the function - defaults to 0
// runOnce = boolean indication whether the request should run once or watch for changes to the function arguments and run on change - defaults to false
//
//
// RETURNS
// This hook returns an object with 3 keys indicating different states of the asynchronous operation
//
// loading = boolean, indicating whether the asynchronous function is still pending
// data = is either undefined or the data returned from the asynchronous function
// error = is undefined unless an error occurred

function useAJAX(ajaxFunction, args, { timeOut = 0, runOnce = false } = { timeOut: 0, runOnce: false }) {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(undefined);

    const [error, setError] = useState(undefined);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            ajaxFunction(...args)
                .then((res) => {
                    setError(undefined);
                    setData(res);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => setLoading(false));
        }, timeOut);

    }, runOnce ? [] : args);

    return { loading, data, error };
}

export default useAJAX
export {
    useAJAX
}
