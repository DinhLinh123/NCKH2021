import {AcctionTypes} from "./action";

export const INITSTALL = {
    list: [],
    status: "",
  };

  const default_list = (state = INITSTALL, action) => {
    switch(action.type){

        case AcctionTypes.ADD_LOGINS:
            return {
                ...state,
                isLoading: true,
            };

        case AcctionTypes.ADD_LOGINS_SUCCESS:
           console.log("reducer act " ,{action});
           
            return {
                ...state,
                list: [...state.list, action.payload],
                isLoading: false,
            };
        case AcctionTypes.ADD_LOGINS_ERROR:
           console.log("reducer err ", {action});
            return {
                ...state,
                list: [action.payload.response],
                
            };

        default:
            return state;
    }
};

export default default_list;