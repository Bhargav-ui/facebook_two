import axios from 'axios';

export const getPostsApi = (source,user_id) => {
    
    const form = new FormData();
    
    form.append("source",source);
    form.append("user_id",user_id);

    return axios.post("https://www.edstaack.com/api/learning/posts.php",form);

};