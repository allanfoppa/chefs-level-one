const baseURL = process.env.REACT_APP_WEBSERVICE_BASE_URL

export const endpointHome = `${baseURL}/v1/api/recipes`
export const endpointHomePost = (id) => `${baseURL}/v1/api/recipes/${id}`