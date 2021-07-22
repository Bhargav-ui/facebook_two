import { useState } from "react";
import Nav from "../Home/Nav";

const Data = () => {

    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");




    const [addCard, setAddCard] = useState(
        localStorage.getItem("addCard") == null ? [] :
            JSON.parse(localStorage.getItem("addCard"))
    );

    const [showUpdate, setShowUpdate] = useState(false);
    const [editName, setEditName] = useState("");
    const [editNameMsg, setEditNameMsg] = useState("");
    const [editMsg, setEditMsg] = useState("");
    const [editFriendId, setEditFriendId] = useState("");

    const addData = () => {

        if (name.length < 2) {
            setNameMsg("add min 4 char");
        }
        else {
            setNameMsg("");

            let newCard = {
                name: name,
                id: addCard.length,
            };

            // setAddCard([...addCard, newCard]);
            addCard.push(newCard);
            setAddCard([...addCard]);
            localStorage.setItem("addCard", JSON.stringify(addCard));

        };

    };

    const deleteFriend = (e) => {
        console.log("delete clicked");

        var index = e.target.getAttribute("index");
        var newData = addCard.filter((friend, i) => {
            return index != i;
        });
        console.log(newData);
        setAddCard([...newData]);
        localStorage.setItem("addCard", JSON.stringify(newData));
    };

    const delteFrinedNewMethod = (e) => {

        let frinedId = e.target.getAttribute("index");
        //  console.log(frinedId);
        let newFriends = addCard.filter((frined, i) => {
            return frined.id != frinedId;
        });
        setAddCard([...newFriends]);
        localStorage.setItem("addCard", JSON.stringify(newFriends));
    };

    const editFriend = (e) => { 
        setShowUpdate(true);
        let id = e.target.getAttribute("friendid");
        let friendName = " ";
        addCard.map(friend => {
            if (friend.id == id) {
                friendName = friend.name;
            }
        });
        console.log(friendName);
        setEditName(friendName);
        setEditFriendId(id);

    };

    const updateFriendName = () => {
        if (editName.length <= 1) {
            setEditNameMsg("min 2 characters");
        }
        else {
            let newData = addCard.map(friend => {
                if (friend.id == editFriendId) {
                    friend.name = editName;
                }
                return friend;
            });
            setAddCard([...newData]);
            setShowUpdate(false);
            setEditName("");
            setEditFriendId("");
            localStorage.setItem("addCard", JSON.stringify(newData));
        }

    };
    return (
        <>
            <div className="container fixed-top-padding">
                <Nav />
                <div className="row">
                    <div className="col-lg-12">
                        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <small className="text-danger">{nameMsg}</small>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <button type="button" className="btn btn-primary" onClick={addData}>Click</button>
                    </div>
                </div>


                {showUpdate && <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        <div className="card shadow border-0 mt-4 p-3">
                            <div className="card-data">
                                <label><small>Friend Name</small></label>
                                <input type="text" placeholder="frined name" value={editName} onChange={e => setEditName(e.target.value)} className="form-control" />
                                <div className="text-warning"><small>{editNameMsg}</small></div>
                                <button type="button" className="btn btn-success  mt-3" onClick={updateFriendName}>Update Name</button>
                                <div className="text-success"><small>{editMsg}</small></div>

                            </div>
                        </div>
                    </div>
                </div>
                }
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        {addCard.map((card, i) => (
                            <div className="card shadow border-0 mt-4 p-3" key={i}>
                                <div className="card-data">
                                    <div className="row">
                                        <div className="col-lg-9 ">{card.name}</div>
                                        <div className="col-lg-3 text-right">

                                            <span
                                                friendid={card.id}
                                                className="fb-pointer"
                                                onClick={editFriend}
                                            >
                                                Edit
                                            </span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <span
                                                index={card.id}  // {i}
                                                className='fb-pointer'
                                                onClick={delteFrinedNewMethod}
                                            >
                                                Delete
                                            </span>
                                        </div>
                                    </div>
                                </div> <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Data;