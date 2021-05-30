import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getTopicDetailSuccess } from "./action";

const GET_API_TOPICS_DETAIL_URL= `http://localhost:8009/api/ChiTietDeTai/SerchByIdDeTai/` ; // https://quanlydoan.live//api



export function* sagaGetTopicDetails (idDeTai) {
    console.log("sagaTopic" + idDeTai);
    try{
        const reponse = yield axios.get(`${GET_API_TOPICS_DETAIL_URL}${idDeTai.payload}`);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getTopicDetailSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetTopicDetails(){
    yield takeLatest(AcctionTypes.GET_TOPICS_DETAIL, sagaGetTopicDetails);
}

//===================================
