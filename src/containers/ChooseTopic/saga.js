import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getStudentSuccess } from "./action";

const GET_API_STUDENTS_URL= "http://localhost:8006/api/SinhVien/get-all" ; //https://603ced5df4333a0017b68a5c.mockapi.io/api/apiaxios



export function* sagaGetStudents () {
    try{
        const reponse = yield axios.get(GET_API_STUDENTS_URL);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getStudentSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetStudents(){
    yield takeLatest(AcctionTypes.GET_STUDENTS, sagaGetStudents);
}