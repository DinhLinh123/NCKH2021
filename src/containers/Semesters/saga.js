import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
//import Cookies from "universal-cookie";
import Cookies from 'js-cookie';
import { AcctionTypes, addSemesterSuccess, deleteSemesterError, deleteSemesterSuccess, getSemesters, getSemesterSuccess, putSemestersSuccess } from "./action";

const GET_API_SEMESTER_URL= "https://api.quanlydoan.live/api/Hocky/GetAllHocKy";//"https://quanlydoan.live/api/Hocky/GetAllHocKy" ; 
const ADD_API_SEMESTER_URL= "https://api.quanlydoan.live/api/Hocky/InsertAsyncHocKy" ;

const DELETE_API_SEMESTER_URL= `https://api.quanlydoan.live/api/Hocky/` ; 
// axios.get('https://example.com/getSomething', {
//  headers: {
//    Authorization: 'Bearer ' + token //the token is a variable which holds the token
//  }
// })

// , {
//   headers: {
//     Authorization: 'Bearer ' + `${Cookies.get('token')}`
//   }
//  }
//--------- get------------------------
export function* sagaGetSemesters (action) {
  console.log("action saga get = ", action);
  console.log("coki get =", Cookies.get('token'));
  
  //const = (Cookies.get('token'));
    try{
      console.log("chạy vào reponsive");
        const response = yield axios.get(GET_API_SEMESTER_URL, {
            headers: {
              Authorization: 'Bearer ' + `${Cookies.get('token')}`
            }
           });
         console.log("aa"+ response);
        // if (reponse) {
        //     yield put(getSemesterSuccess(reponse));
        // }
        if(response) {
          yield put({type: AcctionTypes.GET_SEMESTERS_SUCCESS})
          console.log("chạy vào đây ",{response});
      }
        
    }catch(error){
      console.log("lỗi = ",error);
    }
}

export function* watchSagaGetSemesters(){
 
    yield takeLatest(AcctionTypes.GET_SEMESTERS, sagaGetSemesters);
}

//------------add------------------------------
export function* sagaAddSemesters() {
    
     
    try {
        const reponse = yield axios.post(ADD_API_SEMESTER_URL);

        //  yield reponse && put(addSemesterSuccess(action.payload));
        
        if(reponse) yield getSemesters();
    } catch (error) {

        console.log({error});
    }
  }
  
export function* watchSagaAddSemesters() {
    yield takeLatest(AcctionTypes.ADD_SEMESTERS, sagaAddSemesters);
  }

  //------------Delete---------------------------

  export function* sagaDeleteSemesters(action) {
      console.log(action.payload);
      
    try {
      const reponse = yield axios.delete(`${DELETE_API_SEMESTER_URL}${action.payload}`);
      
      if (reponse.status === 200) {
        yield put(deleteSemesterSuccess(reponse));
      } else {
        yield put(deleteSemesterError(reponse.error));
      }
    } catch (error) {
      console.log({ error });
    }
  }
  
  export function* watchSagaDeleteSemesters() {
    yield takeLatest(AcctionTypes.DELETE_SEMESTERS, sagaDeleteSemesters);
  }

  //------------PUT---------------------------------------

  export function* sagaPutSemesters(action) {
      console.log(action.payloaddata.maHocKy);
    try {
      const reponse = yield axios.put(
        `${DELETE_API_SEMESTER_URL}${action.payloadid}/${action.payloaddata.maHocKy}/${action.payloaddata.tenHocKy}`,
        action.payloadid + action.payloaddata.maHocKy + action.payloaddata.tenHocKy
      );
      if (reponse) {
        yield put(putSemestersSuccess(reponse.data));
      }
    } catch (error) {
      console.log({ error });
    }
  }
  
  export function* watchSagaPutSemesters() {
    yield takeLatest(AcctionTypes.PUT_SEMESTERS, sagaPutSemesters);
  }
  
  