import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { useParams } from "react-router";

import { AcctionTypes, getSubjectListSuccess } from "./action";

const GET_API_SUBJECTLISTS_URL= `https://api.quanlydoan.live/api/MonHoc/` ; // ${idHocKy}



export function* sagaGetSubjectLists (idHocKy) {
    console.log("idHocKy.payload " + idHocKy.payload);
    try{
        
        const reponse = yield axios.get(`${GET_API_SUBJECTLISTS_URL}${idHocKy.payload}`);
        console.log("aa"+ reponse);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getSubjectListSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetSubjectLists(){
    yield takeLatest(AcctionTypes.GET_SUBJECTLISTS, sagaGetSubjectLists);
}