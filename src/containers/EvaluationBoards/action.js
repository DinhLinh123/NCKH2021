export const AcctionTypes= {
  GET_EVALUATIONBOARDS: "GET_EVALUATIONBOARDS",
  GET_EVALUATIONBOARDS_SUCCESS: "GET_EVALUATIONBOARDS_SUCCESS",
  GET_EVALUATIONBOARDS_ERROR: "GET_EVALUATIONBOARDS_ERROR",
};
//------------ Call Api --------------------------
export function getEvaluationBoards(idHocKy) {
    return {
      type: AcctionTypes.GET_EVALUATIONBOARDS,
      payload: idHocKy,
    };
  }
  
  export function getEvaluationBoardSuccess(action) {
    console.log(action);
    return {
      type: AcctionTypes.GET_EVALUATIONBOARDS_SUCCESS,
      payload: action,

    };
  }
  
  export function getEvaluationBoardError(err) {
    return {
      type: AcctionTypes.GET_EVALUATIONBOARDS_ERROR,
      payload: err,
    };
  }