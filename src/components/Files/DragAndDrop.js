import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadFileApi } from '../../apis/Files';

const DragAndDrop = () => {

    const [allowedMimeTypes, setAllowedMimeTypes] = useState([
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webm"
    ]);

    const [valideFilesMsg, setValidFilesMsg] = useState("");
    const[images, setImages] = useState([]);

    const onDrop = useCallback((files) => {
        let validFilesCount = 0;
        files.map((file) => {
            // console.log(file);

            let typeMatching = 0;
            allowedMimeTypes.map(type => {
                if (type == file.type) {
                    typeMatching = 1;
                }
            });
            if (typeMatching == 1) {
                if (file.size < 2097152) {
                    validFilesCount = validFilesCount + 1;
                    // console.log("call api");
                    uploadFileApi("react app",file).then(
                        (response) =>{
                            if(response.data.result == "success"){
                                images.push(response.data.data.imagePath)
                                        setImages( images ); 
                            }
                        }
                    )
                }
            }

        });
        setValidFilesMsg(validFilesCount + " out of " + files.length + " files uploaded");
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    return (
        <>
            <div className="row mt-4 mb-4">
                <div className="col-lg-2">  </div>
                <div className="col-lg-7">
                    <div className="card shadow border-0">
                        <div className="card-body" {...getRootProps()}>
                            <input {...getInputProps()} />
                Drag and Drop files here
                </div>
                        <div className="card-body mt-3 text-center">
                            <p className="mb-3"> {valideFilesMsg} </p>
                            <p>
                                {
                                    images.map((image,i )=>( 
                                        // <p key={i}>{ image }</p>))
                                        <img src={image} alt="" className="image-fluid" key={i}/>))
                                    }
                            </p>
                        </div>
                    </div>

                </div>  
            </div>
        </>
    )
}

export default DragAndDrop;