// eslint-disable-next-line no-undef
const baseURL = process.env.REACT_APP_WEBSERVICE_BASE_URL

export const endpointHome = `${baseURL}/api/v1/recipes`
export const endpointRecipeDetails = (uuid) => `${baseURL}/api/v1/recipe-details/${uuid}`