import {AcctionTypes} from "./action";

export const INITSTALL = {
    list: [],
  };

const default_list = (state = INITSTALL, action) => {
    console.log("action ", action);
    switch(action.type){
        //----------GET------------------------
        case AcctionTypes.GET_FILES: 
            return{
                ...state,
                isLoading: false,
            };
        
        case AcctionTypes.GET_FILES_SUCCESS:
            return {
                ...state,
                list: action.payload.data,
                isLoading: false,
            };
            default:
                return state;
        }
    };
    
    export default default_list;