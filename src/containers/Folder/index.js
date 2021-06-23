import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMonHoc from '../../layout/HeaderMonHoc';
import { StyledSemester } from '../Semesters/styled';
import { getFolders } from './action';
import { FcFolder } from 'react-icons/fc';
import { Link, useParams } from 'react-router-dom';

const Folder = () => {
    let { idHocKy } = useParams();
    let {tenHocKy} = useParams();
    let { tenMonHoc } = useParams();
    let {idMonHoc} = useParams();
    let {typeApprover} = useParams();
    const dispatch = useDispatch();
    const folderSelecter = useSelector((state) => state.reducerFolder.list);
    useEffect(() => {
        dispatch(getFolders());
        
      }, []);
      console.log("folderSelecter.folderName = ", folderSelecter);
    return (
        <StyledSemester.Flex>
            <div><HeaderMonHoc /></div>
        <div className="Body">
        <div>
            <h1>Quản lý các Folder</h1>
            <StyledSemester.Body>
                {folderSelecter.map ((item, index ) => {
                    return (
            <Link to={`/mon-hoc/${tenHocKy}/${idHocKy}/${tenMonHoc}/${idMonHoc}/${typeApprover}/quan-ly-folder/file/${item.id}`}>
                <div className="folder" key={index}>
                    <div className="folderIcon"><FcFolder /></div>
                    <div className="nameFolder">{item.folderName}</div> 
                </div>
                </Link>
                )})}
            </StyledSemester.Body>
        </div>
        </div>
        </StyledSemester.Flex>
    );
};

export default Folder;