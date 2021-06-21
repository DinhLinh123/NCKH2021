export const AcctionTypes= {
    GET_FOLDER: "GET_FOLDER",
    GET_FOLDER_SUCCESS: "GET_FOLDER_SUCCESS",
    GET_FOLDER_ERROR: "GET_FOLDER_ERROR",
  
    
  };
  export function getFolders() {
    return {
      type: AcctionTypes.GET_FOLDER,
    };
  }
  
  export function getFolderSuccess(action) {
     console.log({action},'get Hoc ky success');
    return {
      type: AcctionTypes.GET_FOLDER_SUCCESS,
      payload: action,

    };
  }
  
  export function getFolderError(err) {
    return {
      type: AcctionTypes.GET_FOLDER_ERROR,
      payload: err,
    };
  }