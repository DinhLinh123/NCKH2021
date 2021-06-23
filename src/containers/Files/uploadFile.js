import axios from 'axios';
import React,{Component} from 'react'; 
import { useParams } from 'react-router';
import GetToken from '../Login/getToken';

export default function ()  {
    let {id} =useParams();
    const [uploadFile, setUploadFile] = React.useState();
    const [superHero, setSuperHero] = React.useState();
    const [uploadResponse, setUploadResponse] = React.useState();
  
    const submitForm = (event) => {
      event.preventDefault();
  
      const dataArray = new FormData();
      dataArray.append("superHeroName", superHero);
      dataArray.append("uploadFile", uploadFile);
  
      axios
        .post(`https://api.quanlydoan.live/api/File/uploads/${id}`, dataArray,GetToken() )
        .then((response) => {
          setUploadResponse(`File uploaded successfully
          
          POST - superHeroName
          value - ${superHero}
          
          FILE - uploadFile`);
        })
        .catch((error) => {
          setUploadResponse(`File uploaded successfully
  
          POST - superHeroName
          value - ${superHero}
          
          FILE - uploadFile`);
        });
    };
    return (
        <div className="App">
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={(e) => setSuperHero(e.target.value)}
          placeholder={"Superhero Name"}
        />
        <br />
        <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
        <br />
        <input type="submit" />
      </form>
      <hr />
      <pre>{uploadResponse}</pre>
    </div>
    );
};

