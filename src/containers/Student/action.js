export const AcctionTypes= {
    GET_STUDENT: "GET_STUDENT",
    GET_STUDENT_SUCCESS: "GET_STUDENT_SUCCESS",
    GET_STUDENT_ERROR: "GET_STUDENT_ERROR",
  
    
  };
  export function getStudents(idHocKy) {
      
    return {
      type: AcctionTypes.GET_STUDENT,
      payload: idHocKy,
    };
  }
  
  export function getStudentSuccess(action) {
     console.log({action},'get student success');
    return {
      type: AcctionTypes.GET_STUDENT_SUCCESS,
      payload: action,

    };
  }
  
  export function getStudentError(err) {
    return {
      type: AcctionTypes.GET_STUDENT_ERROR,
      payload: err,
    };
  }