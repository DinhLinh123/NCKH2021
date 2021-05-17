import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, addSemesterSuccess, deleteSemesterError, deleteSemesterSuccess, getSemesterSuccess, putSemestersSuccess } from "./action";

const GET_API_SEMESTER_URL= "https://quanlydoan.live/api/Hocky/GetAllHocKy";//"https://quanlydoan.live/api/Hocky/GetAllHocKy" ; 
const ADD_API_SEMESTER_URL= "https://quanlydoan.live/api/Hocky/InsertAsyncHocKy" ;
const DELETE_API_SEMESTER_URL= `https://quanlydoan.live/api/Hocky/` ; 
//const PUT_API_SEMESTER_URL= `https://quanlydoan.live/api/Hocky/` ; 

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
     console.log(action.payload);
     
    try {
        const reponse = yield axios.post(ADD_API_SEMESTER_URL, action.payload);

    yield put(addSemesterSuccess(reponse));
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
  
  