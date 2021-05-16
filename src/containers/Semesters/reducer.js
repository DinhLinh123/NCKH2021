import {AcctionTypes} from "./action";

export const INITSTALL = {
    list: [],
  };

const default_list = (state = INITSTALL, action) => {
    switch(action.type){
        //---------- GetAPI-------------------
        case AcctionTypes.GET_SEMESTERS: 
            return{
                ...state,
                isLoading: false,
            };
        
        case AcctionTypes.GET_SEMESTERS_SUCCESS:
            return {
                ...state,
                list: action.payload.data.data,
                isLoading: false,
            };
        //----- ADD --------------------------------
        case AcctionTypes.ADD_SEMESTERS:
            return {
                ...state,
                isLoading: true,
            };

        case AcctionTypes.ADD_SEMESTERS_SUCCESS:
            // const test= {
            //     idHocKy: "f3e19gf53-74a5-47fd-a0e7-12bde47c7b06",
            //     isActive: true,
            //     isDelete: false,
            //     maHocKy: "ppppppppppppppppppppppppppppppppp",
            //     ngayTao: "2021-05-12T22:36:10.6733333",
            //     ngayXoa: null,
            //     tenHocKy: "appppppppppppppppppppppppppppppppp"
            // }
            // console.log("add",action.payload.data.data);
            // // console.log(state.list);
            // const newList = [...state.list, test]
            // console.log(newList);
            return {
                ...state,
                list: [...state.list, action.payload.data.data],
                isLoading: false,
            };

            //--- Delete-------------------------------------

            case AcctionTypes.DELETE_SEMESTERS:
                return {
                    ...state,
                    success: action.payload,
                    isLoading: true,
                };

            case AcctionTypes.DELETE_SEMESTERS_SUCCESS:
                return {
                    ...state,
                    list: state.list.filter((idHocKy) => idHocKy.idHocKy !== action.payload.data.idHocKy),
                    isLoading: false,
                };

            //------Put---------------------------------
            case AcctionTypes.PUT_SEMESTERS:
                return {
                    ...state,
                    list: [...state.list],
                    isLoading: true,
                };

            case AcctionTypes.PUT_SEMESTERS_SUCCESS:
                const list = state.list.filter((idHocKy) => idHocKy.idHocKy !== action.payload.idHocKy);
                console.log({ list });
                return {
                    ...state,
                    list: [
                    ...state.list.filter((idHocKy) => idHocKy.idHocKy !== action.payload.idHocKy),
                    action.payload,
                    ],
                    isLoading: false,
                };


        default:
            return state;
    }
};

export default default_list;