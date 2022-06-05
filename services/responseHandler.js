export const errorResponse = (error) => {
    return Object.freeze({
        code: error.code,
        message: error.message,
        status: error.response.status,
        statusText: error.response.status,
        data: error.response.data
    })
}