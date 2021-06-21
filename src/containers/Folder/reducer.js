import {AcctionTypes} from "./action";

export const INITSTALL = {
    list: [],
  };

const default_list = (state = INITSTALL, action) => {
    switch(action.type){
        //---------- GetAPI-------------------
        case AcctionTypes.GET_FOLDER: 
            return{
                ...state,
                isLoading: false,
            };
        
        case AcctionTypes.GET_FOLDER_SUCCESS:
            console.log({action},'reducer get HK sc');
            return {
                ...state,
                list: action.payload.data.data,
                isLoading: false,
            };
            default:
                return state;
        }
    };
    
    export default default_list;