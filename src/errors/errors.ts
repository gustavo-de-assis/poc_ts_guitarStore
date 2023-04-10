function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "You must be signed in to continue",
    };
}
  
function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
}
  
export default {
    unauthorizedError,
    notFoundError
};