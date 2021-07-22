import axios from "axios";


export const SigninApi =(name,email,contryCode,phoneNumber,password,source) => {

let form =new FormData();

form.append("signupSrName",name);
form.append("signupSrEmail",email);
form.append("signupMobCon",contryCode);
form.append("signupMob",phoneNumber);
form.append("signupSrPassword",password);
form.append("source",source);

return axios.post("https://www.edstaack.com/api/learning/signup-jarvish.php",form);
}