export const AcctionTypes= {
  GET_TOPICS: "GET_TOPICS",
  GET_TOPICS_SUCCESS: "GET_TOPICS_SUCCESS",
  GET_TOPICS_ERROR: "GET_TOPICS_ERROR",
};
//------------ Call Api --------------------------
export function getTopics() {
    return {
      type: AcctionTypes.GET_TOPICS,
    };
  }
  
  export function getTopicSuccess(action) {
    console.log(action);
    return {
      type: AcctionTypes.GET_TOPICS_SUCCESS,
      payload: action,

    };
  }
  
  export function getTopicError(err) {
    return {
      type: AcctionTypes.GET_TOPICS_ERROR,
      payload: err,
    };
  }