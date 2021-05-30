import {AcctionTypes} from "./action";

export const INITSTALL = {
    list: [],
  };

  const default_list = (state = INITSTALL, action) => {
    switch(action.type){

        case AcctionTypes.ADD_LOGINS:
            return {
                ...state,
                isLoading: true,
            };

        case AcctionTypes.ADD_LOGINS_SUCCESS:
           console.log({action});
            return {
                ...state,
                list: [...state.list, action.payload],
                isLoading: false,
            };

        default:
            return state;
    }
};

export default default_list;