export const AcctionTypes= {
    GET_SUBJECTLISTS: "GET_SUBJECTLISTS",
    GET_SUBJECTLISTS_SUCCESS: "GET_SUBJECTLISTS_SUCCESS",
    GET_SUBJECTLISTS_ERROR: "GET_SUBJECTLISTS_ERROR",
  };

  export function getSubjectLists(idHocKy) {
      console.log({idHocKy});
    return {
      type: AcctionTypes.GET_SUBJECTLISTS,
      payload: idHocKy,
      
    };
  }
  
  export function getSubjectListSuccess(action) {
    console.log({action});
    return {
      type: AcctionTypes.GET_SUBJECTLISTS_SUCCESS,
      payload: action,

    };
  }
  
  export function getSubjectListError(err) {
    return {
      type: AcctionTypes.GET_SUBJECTLISTS_ERROR,
      payload: err,
    };
  }