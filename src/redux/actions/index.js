export const startFetching = (type) => {
    return {
        type
    }
}

export const setData = (type, payload = {}) => {
    return {
        type,
        payload
    }
}

export const setError = (type, payload = {}) => {
    return {
        type,
        payload
    }
}
