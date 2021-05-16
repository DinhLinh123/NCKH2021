export const AcctionTypes= {
  GET_ASIGNREVIEWERS: "GET_ASIGNREVIEWERS",
  GET_ASIGNREVIEWERS_SUCCESS: "GET_ASIGNREVIEWERS_SUCCESS",
  GET_ASIGNREVIEWERS_ERROR: "GET_ASIGNREVIEWERS_ERROR",
};
//------------ Call Api --------------------------
export function getAssignReviewers() {
    return {
      type: AcctionTypes.GET_ASIGNREVIEWERS,
    };
  }
  
  export function getAssignReviewerSuccess(action) {
    console.log(action);
    return {
      type: AcctionTypes.GET_ASIGNREVIEWERS_SUCCESS,
      payload: action,

    };
  }
  
  export function getAssignReviewerError(err) {
    return {
      type: AcctionTypes.GET_ASIGNREVIEWERS_ERROR,
      payload: err,
    };
  }