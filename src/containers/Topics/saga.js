import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getTopicSuccess } from "./action";

const GET_API_TOPICS_URL= `https://api.quanlydoan.live/api/DeTai/GetAllByHocKy/` ; // //https://quanlydoan.live/api



export function* sagaGetTopics (idHocKy) {
    console.log("sagaTopic" + idHocKy);
    try{
        const reponse = yield axios.get(`${GET_API_TOPICS_URL}${idHocKy.payload}`);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getTopicSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetTopics(){
    yield takeLatest(AcctionTypes.GET_TOPICS, sagaGetTopics);
}

//===================================
