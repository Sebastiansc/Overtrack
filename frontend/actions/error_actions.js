export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (error) => ({
  type: RECEIVE_ERRORS,
  error
});
