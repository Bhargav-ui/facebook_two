import axios from 'axios';

export const LoginApi = (email,password) => {
    
    const form = new FormData();

    form.append("source","website");
    form.append("signinSrEmail",email);
    form.append("signinSrPassword",password);

    return axios.post("https://www.edstaack.com/api/learning/signin-jarvish.php",form);

}


export const forgotPasswordApi = (source,email) =>{
    const form =new FormData();
    form.append("source",source);
    form.append("recoverSrEmail",email);

return axios.post("https://www.edstaack.com/api/learning/recovery-email-send.php",form);
}


export const resetPasswordApi = (source,pword,confword,uid,hash) =>{
    const form =new FormData();
    form.append("source",source);
    form.append("recoverPwordNewPword",pword);
    form.append("recoverPwordConfirmNewPword",confword);
    form.append("key",hash);
    form.append("uid",uid);

return axios.post("https://www.edstaack.com/api/learning/recovery-update-pword.php",form);
}