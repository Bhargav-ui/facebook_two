import queryString from 'query-string';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetPasswordApi } from '../../apis/Login';
const RecoverPassword = () => {

    // query paramenters
    let params = queryString.parse(window.location.search);
    const [hash, setHash] = useState(params.hash);
    const [ref, setRef] = useState(params.ref);

    // values
    const [pword, setPword] = useState("");
    const [confPword, setConfPword] = useState("");
    const [apiSuccess, setApiSuccess] = useState(false);
    const [pwrodMsg, setPwordMsg] = useState("");
    const [confPwordMsg, setConfPwordMsg] = useState("");
    const [apiMsg, setApiMsg] = useState("");



    const updatePassword = () => {

        if (pword.length < 8) {
            setPwordMsg('min 8 characters');
        }
        else {
            if (pword != confPword) {
                setConfPwordMsg("Not matching")
            }
            else {
                //   console.log(pword,hash,ref);
                resetPasswordApi("react app", pword, confPword, ref, hash).then(
                    (response) => {
                        if (response.data.result == "success") {
                            setApiSuccess(true);
                        } else {
                            setApiSuccess(false);
                            setApiMsg(response.data.msg);
                        }
                    }
                );
            }
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6 mt-3 text-center">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h2>Set new password</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label><small>PASSWORD</small></label>
                                        <input type="text" className="form-control" placeholder="new password" value={pword} onChange={e => setPword(e.target.value)} />
                                        <span className="text-danger">{pwrodMsg}</span>
                                    </div>
                                    <div className="col-lg-12">
                                        <label><small>COMFIRM PASSWORD</small></label>
                                        <input type="text" className="form-control" placeholder="Confirm password" value={confPword} onChange={e => setConfPword(e.target.value)} />
                                        <span className="text-danger">{confPwordMsg}</span>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <button type="button" className="btn btn-success" onClick={updatePassword}>Update Password</button>
                                        <span className="text-danger">{apiMsg}</span>
                                        {
                                            apiSuccess == true && (
                                                <div className="alert alert-success mt-3">
                                                    password updated successfully.{" "}
                                                    <Link to="/">Click here to Login</Link>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    )
}
export default RecoverPassword;


// http://localhost:3000/recover_password?ref=14&hash=c473379aa643d3b3e598ee9c6c8bb9fc&name=ram