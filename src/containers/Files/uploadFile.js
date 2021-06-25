import axios from 'axios';
import React,{Component, useState} from 'react'; 
import { useParams } from 'react-router';

import GetToken from '../Login/getToken';
import Cookies from 'js-cookie';

export default function ()  {
    let {id} =useParams();
    const [uploadFile, setUploadFile] = React.useState();
    const [superHero, setSuperHero] = React.useState();
    const [uploadResponse, setUploadResponse] = React.useState();
    console.log("uploadResponse ", uploadResponse);
  
    const submitForm = (event) => {
      event.preventDefault();
    const url= '/C:/Users/Dinh Thi Thuy Linh/Documents/BTL net1 (new).docx';
      const dataArray = new FormData();
      dataArray.append("superHeroName", superHero);
      dataArray.append("formFileCollection", url);
      console.log("uploadFile ", '/C:/Users/Dinh Thi Thuy Linh/Documents/BTL net1 (new).docx');
      console.log("superHero ", superHero);
  
      axios
        .post(`https://api.quanlydoan.live/api/File/uploads/${id}`, dataArray,GetToken() )
        .then((response) => {
          setUploadResponse(
            response.dataArray
          //   `File uploaded successfully
          
          // POST - superHeroName
          // value - ${superHero}
          
          // FILE - uploadFile`
          );
        })
        .catch((error) => {
          setUploadResponse("err: ", error);
        });
    };

    console.log("uploadFile ", uploadFile);

//     var axios = require('axios');
// var FormData = require('form-data');
// var fs = require('fs');
// var data = new FormData();
// data.append('formFileCollection', fs.createReadStream(`${uploadFile}`));

// var config = {
//   method: 'post',
//   url: 'https://api.quanlydoan.live/api/File/uploads/7',
//   headers: { 
//     'Authorization': 'Bearer A2DA5A1E5CEFE07F3A852F6DF3D993352FFE330F4A3C20490595E98613A14E56', 
//     ...data.getHeaders()
//   },  
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// }   
    return (
        <div className="App">
      <form onSubmit={submitForm}>
         {/* <input
          type="text"
          onChange={(e) => setSuperHero(e.target.value)}
          placeholder={"Superhero Name"}
        /> */}
        <br />
        <input type="file" onChange={(e) => setUploadFile(e.target.file)} />
        <br />
        <input type="submit" />
      </form>
      <hr />
      {/* <pre>{uploadResponse}</pre> */}

      
     </div>
    );
};




