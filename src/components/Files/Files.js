 import { useState } from 'react';
import { uploadFileApi } from '../../apis/Files';
import Nav from '../Home/Nav';
import DragAndDrop from './DragAndDrop';
// import DragAndDrop from "./DragAndDrop";

const Files = () => {

    //Message
    const [fileMsg, setFileMsg] = useState("")
    const [apiMsg, setApiMsg] = useState("");

    //value
    const [file, setFile] = useState([]);
    const [allowedMimeTypes, setAllowedMimeTypes] = useState([
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webm"
    ]);
    const [imagePath, setImagePath] = useState("");

    const uploadFile = () => {
        let noOfErrors = 0;
        let fileTypeError = 1;
        console.log(file);
        if (file.length == 0) {
            noOfErrors = 1;
            setFileMsg("Please select image");
        }
        if (file.length > 0) {
            allowedMimeTypes.map((type) => {
                if (type == file[0].type) {
                    fileTypeError = 0;
                }
            });
            if (fileTypeError == 1) {
                noOfErrors = 1;
                setFileMsg("Images only allowed");
            }
            else {
                //1 kb = 1024 bytes
                //1 mb = 1024 KB
                //2 MB = 2 * 1024 * 1024 bytes
                // setFileMsg("");
                if (file[0].size > 2097152){
                    noOfErrors = 1;
                    setFileMsg("Max allowed size is 2 MB");
                }
                else {
                    setFileMsg("");
                }
            }
        }
        if (noOfErrors == 0) {
            uploadFileApi("react app", file[0]).then(
                (response) => {
                    // console.log(response);
                    if (response.data.result === "success") {
                        setApiMsg(response.data.data.imagePath);
                        setImagePath(response.data.data.imagePath);
                    }
                    else {
                        setApiMsg(response.data.msg);
                    }
                }
            )
        }
    };

    //resume varibles

    const[doc,setDoc] =  useState([]);
    const[docMsg,setDocMsg] = useState("");
    const[docApiMsg,setDocApiMsg] = useState("");
    const[allowedDocTypes,setAllowedDocTypes] = useState([
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
        "text/plain",
    ]);

    const [docPath,setDocPath] = useState("");

    const uploadDoc = ()=>{
        console.log(doc);
        let noOfErrors = 0 ;
        let fileTypeError =1;
        if(doc.length === 0) {
            setDocMsg("please select document");
            noOfErrors = 1 ;
        }
        else{
            setDocMsg("");
        }

        if(doc.length > 0) {
            allowedDocTypes.map((type) =>{
                if(type== doc[0].type){
                    fileTypeError = 0;
                } 
            });

            if(fileTypeError == 1 ) {
                noOfErrors = 1 ;
                setDocMsg("please select word or pdf or text files")
            }
            else{
                if(doc[0].size > 2097152) {
                    noOfErrors = 1 ;
                    setDocMsg("Max 2MB only allowed");
                }
                else {
                    setDocMsg("");
                }
            }
        }
        if(noOfErrors === 0 ){
            uploadFileApi("react app",doc[0]).then((response) =>{
                // console.log(response);
                if(response.data.result == "success") {
                    setDocPath(response.data.data.imagePath);
                }
                else{
                    setDocApiMsg(response.data.msg);
                }
            });
        }
    };

    return (
        <>
            <div className="container fixed-top-padding">
                <Nav />
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h3>File uploads</h3>
                                <div className="row">
                                    <div className="col-lg-12 mt-4">
                                        <label>SELECT FILE</label>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                onChange={(e) => setFile(e.target.files)}
                                            />
                                            <label className="custom-file-label" htmlFor="imputGroupFile2" >
                                                Choose file
                                        </label>
                                        </div>
                                        <span className="text-danger">{fileMsg}</span>
                                    </div>
                                    <div className="col-lg-12 mt-4 mb-3">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={uploadFile}>Upload File</button>

                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <p>{apiMsg}</p>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        {imagePath.length > 0 && 
                                        <img src={imagePath} alt=""
                                    className="img-fluid"/>
                                }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* pdf or document uploader */}
                <div className="row mt-4">
                <div className="col-lg-2"></div>  
                    <div className="col-lg-7">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h3>Upload Resume</h3>
                                <div className="row">
                                    <div className="col-lg-12 mt-4">
                                        <label>SELECT FILE</label>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                onChange={(e) => setDoc(e.target.files)}
                                            />
                                            <label className="custom-file-label" htmlFor="imputGroupFile2">
                                                Choose file
                                        </label>
                                        </div>
                                        <span className="text-danger">{docMsg}</span>
                                    </div>
                                    <div className="col-lg-12 mt-4 mb-3">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={uploadDoc}>Upload documents</button>

                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <p>{docApiMsg}</p>
                                    </div>
                                     <div className="col-lg-12 mt-4">
                                       {docPath.length > 0 && (
                                             <iframe
                                             src={
                                               "https://docs.google.com/gview?url=" +
                                               docPath +
                                               "&embedded=true"
                                             }
                                             className="doc-viewer"
                                             frameBorder="0"
                                             s crolling="auto"
                                             height="100%"
                                             width="100%"
                                           ></iframe>
                                        )}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DragAndDrop/>
            </div>
        </>
    )
}

export default Files;