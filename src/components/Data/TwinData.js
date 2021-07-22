import { useState } from "react";
import Nav from '../Home/Nav';
const TwinData=()=>{


const [name,setName] = useState("");
const [nameMsg,setNameMsg] = useState("");
const [number,setNumber] = useState("");
const [numberMsg,setNumberMsg] = useState("");

const [idCard,setIdCard] = useState(
    localStorage.getItem("idCard") == null ? []
    : JSON.parse(localStorage.getItem("idCard"))
);

const addFriend=() =>{
    if(name.length > 2) {
        setNameMsg("");

        let newCard= {
            "name":name,
            "number":number,
        };
        idCard.push(newCard);
        setIdCard([...idCard]);
        localStorage.setItem("idCard",JSON.stringify(idCard));
    }
    else{
        setNameMsg("min 2 charactars");
    }
}
    return(
        <>

        <div className="container fixed-top-padding">
            <Nav/>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-7">
                    <h2>add frinend</h2>
                    <div className="card shadow mt-4 p-3">
                        <div className="card-data">
                            <input type="text" className="form-control" placeholder="enter friend name" value={name} onChange={(e) => setName(e.target.value)}/>
                            <div className="text-danger">{nameMsg}</div>
                            <input type="text" className="form-control" placeholder="enter friend name" value={number} onChange={(e) => setNumber(e.target.value)}/>

                       <div className="text-danger">{numberMsg}</div>
                       <button className="btn btn-primary mt-3" onClick={addFriend}>add friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TwinData;