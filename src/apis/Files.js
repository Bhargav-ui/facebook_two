import axios from "axios";

export const uploadFileApi = (source, file) => {
    let form = new FormData();

    form.append("source", source);
    form.append("uploaded_file", file);


    return axios.post("https://www.edstaack.com/api/learning/file_uploads.php", form);

}


