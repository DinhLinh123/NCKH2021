import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, addSemesterSuccess, deleteSemesterError, deleteSemesterSuccess, getSemesters, getSemesterSuccess, putSemestersSuccess } from "./action";

const GET_API_SEMESTER_URL= "http://localhost:8009/api/Hocky/GetAllHocKy";//"https://quanlydoan.live/api/Hocky/GetAllHocKy" ; 
const ADD_API_SEMESTER_URL= "http://localhost:8009/api/Hocky/InsertAsyncHocKy" ;

const DELETE_API_SEMESTER_URL= `http://localhost:8009/api/Hocky/` ; 
//const PUT_API_SEMESTER_URL= `https://quanlydoan.live/api/Hocky/` ; 

// var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//   'client_id': 'GHMSOFTCLIENT',
//   'grant_type': 'password',
//   '': '',
//   'userName': 'linhdtt026',
//   'password': '123456',
//   'type': '0',
//   'client_secret': 'GHMSOFT' 
// });
// var config = {
//   method: 'post',
//   url: 'http://auth.quanlydoan.live/connect/token',
  // headers: { 
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Authorization': 'Bearer `CA6D37A1FFDD01B69B2B5CFCA615D1F7FFCF61061BC9B0CD22AF6638757EAF54`'
  // },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

//--------- get------------------------
export function* sagaGetSemesters () {
  console.log('runnnnnnnnnnnnnn');
    try{
        const reponse = yield axios.get(GET_API_SEMESTER_URL);
         console.log("aa"+ reponse);
        if (reponse) {
            yield put(getSemesterSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetSemesters(){
 
    yield takeLatest(AcctionTypes.GET_SEMESTERS, sagaGetSemesters);
}

//------------add------------------------------
export function* sagaAddSemesters(action) {
     console.log(action.payload,'saga');
     
    try {
        const reponse = yield axios.post(ADD_API_SEMESTER_URL, action.payload);

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
  
  