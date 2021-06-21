import { AcctionTypes } from "../Semesters/action";
import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

import Cookies from 'js-cookie';
import GetToken from "../Login/getToken";

const GET_API_FOLDER_URL= "https://api.quanlydoan.live/api/Folder/SelectAll";//"https://quanlydoan.live/api/Hocky/GetAllHocKy" ; 


//--------- get------------------------
export function* sagaGetFolders (action) {
  console.log("action saga get = ", action);
  console.log("coki get =", Cookies.get('token'));
  
  
    try{
      console.log("chạy vào reponsive");
        const response = yield axios.get(GET_API_FOLDER_URL, GetToken()
         
           );
         console.log("aa"+ response);
        
        if(response) {
          yield put({type: AcctionTypes.GET_FOLDER_SUCCESS,payload: response})
          
      }
        
    }catch(error){
      console.log("lỗi = ",error);
    }
}

export function* watchSagaGetFolders(){
 
    yield takeLatest(AcctionTypes.GET_FOLDER, sagaGetFolders);
}
