import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getAssignReviewerSuccess } from "./action";

const GET_API_ASSIGNREVIEWER_URL= "https://603ced5df4333a0017b68a5c.mockapi.io/api/PhanBiens" ; //https://603ced5df4333a0017b68a5c.mockapi.io/api/apiaxios



export function* sagaGetAssignReviewers () {
    try{
        const reponse = yield axios.get(GET_API_ASSIGNREVIEWER_URL);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getAssignReviewerSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetAssignReviewers(){
    yield takeLatest(AcctionTypes.GET_ASIGNREVIEWERS, sagaGetAssignReviewers);
}