import { useState } from "react";

const DataTwo = () => {

    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");


    const [dataTwo, setDataTwo] = useState(
        localStorage.getItem("dataTwo") == null
            ? []
            : JSON.parse(localStorage.getItem("dataTwo"))
    );

    const addFriend = () => {
        dataTwo.push(name);
        setDataTwo([...dataTwo]);
        localStorage.setItem("dataTwo", JSON.stringify(dataTwo))
    };

    return (
        <>
            <div className="container  fixed-top-padding">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        <div className="card shadow border-0 mt-4 p-3">
                            <div className="card-data">
                                <label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="your friend name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <button className="btn btn-primary" onClick={addFriend}>click</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* <div className="col-lg-12"> */}
                    {dataTwo.map((data, i) => (
                        <div className="col-lg-12" key={i}>
                            <div className="card-data">
                                <div className="row">
                                    <div className="col-lg-9">
                                        {data}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default DataTwo;