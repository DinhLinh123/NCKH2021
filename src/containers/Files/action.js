export const AcctionTypes= {
    GET_FILES: "GET_FILES",
    GET_FILES_SUCCESS: "GET_FILES_SUCCESS",
    GET_FILES_ERROR: "GET_FILES_ERROR",
};

export function getFiles(FolderId) {
    console.log("FolderId ", {FolderId});
  return {
    type: AcctionTypes.GET_FILES,
    payload: FolderId,
    
  };
}

export function getFileSuccess(action) {
  console.log({action});
  return {
    type: AcctionTypes.GET_FILES_SUCCESS,
    payload: action,

  };
}

export function getFileError(err) {
  return {
    type: AcctionTypes.GET_FILES_ERROR,
    payload: err,
  };
}
