import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Nav from "../Home/Nav"
import { getLocationFromCoords } from '../../apis/GeoLocation';
const Addresses = () => {
    const [showAddAddressForm, setShowAddAddressForm] = useState(false);
    const [addresses, setAddresses] = useState(
        localStorage.getItem("addresses") == null ? [] : 
        JSON.parse(localStorage.getItem("addresses")));


    // values
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [landMark, setLandMark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    // errormsgs
    const [nameMsg, setNameMsg] = useState("");
    const [mobileMsg, setMobileMsg] = useState("");
    const [addressMsg, setAddressMsg] = useState("");
    const [landMarkMsg, setLandMarkMsg] = useState("");
    const [cityMsg, setCityMsg] = useState("");
    const [stateMsg, setStateMsg] = useState("");
    const [pincodeMsg, setPincodeMsg] = useState("");
    const [apiMsg, setApiMsg] = useState("");

    const showAddAddressFormBtn = () => {
        setShowAddAddressForm(true);
    }

    const hideAddressDialog = () => {
        setShowAddAddressForm(false);
    }

    const accessUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(userLocation);
        }
    };

    const userLocation = (location) => {
        // console.log(location.coords.latitude,location.coords.longitude);
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        getLocationFromCoords(location.coords.latitude, location.coords.longitude).then((response) => {
            console.log(response.data);
            let data = response.data;
            if (data.status === "OK") {
                console.log(data);
                let address = data.results[0];
                console.log(address);
                setAddress(address.formatted_address) //formatted_address is complete address
                address.address_components.map((component) => {
                    component.types.map((type) => {
                        if (type == "postal_code") {
                            setPincode(component.long_name);
                        }
                        if (type == "administrative_area_level_1") {
                            setState(component.long_name);
                        }
                        if (type == "administrative_area_level_2") {
                            setCity(component.long_name);
                        }

                    })
                });
                //results
                //formatted_address
                //address_components
                //long_name
                //types
                //"postal_code"
                //"country", adm
            }
        })
    };

    const saveAddress = () => {
        let newAddress = {
            "name": name,
            "mobile": mobile,
            "address": address,
            "landMark": landMark,
            "city": city,
            "state": state,
            "pincode": pincode,
            "lat": lat,
            "lon": lon,
        };

        addresses.push(newAddress);

        setAddresses([...addresses]);
        localStorage.setItem("addresses", JSON.stringify(addresses))
    };

    return (
        <div className="container fixed-top-padding">
            <Nav />
            <div className="row">
                <div className="col-lg-2"> </div>
                <div className="col-lg-7">
                    <div className="card fb-shadow border-0">
                        <div className="card-body">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={showAddAddressFormBtn}>
                                <FontAwesomeIcon icon={faPlus} />Add Address
                            </button>

                            <div className="row">
                                {addresses.map((address, i) =>
                                    <div className="col-lg-12 mb-4" key={i}>
                                    <div className="bg-danger">    Name:{address.name}</div><br />
                                    Mobile:{address.mobile}<br />
                                    Landmark:{address.landMark}<br />
                                    City:{address.city}<br />
                                    State:{address.state}<br />
                                    Pincode:{address.pincode}<br />
                                    Directions:<a href={"http://maps.google.com/maps?q=" + address.lat + "," + address.lon} target="_blank">Click to navigate</a>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showAddAddressForm && (<div className="modal fade show fb-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Address</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={hideAddressDialog}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="button" className="btn btn-warning" onClick={accessUserLocation}>use Current Location</button>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <input type="text" placeholder="Name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                                    <span className="text-danger">{nameMsg}</span>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <input type="text" placeholder="mobile" value={mobile} className="form-control" onChange={(e) => setMobile(e.target.value)} />
                                    <span className="text-danger">{mobileMsg}</span>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
                                    <span className="text-danger">{addressMsg}</span>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <input type="text" placeholder="landMark" value={landMark} onChange={(e) => setLandMark(e.target.value)} className="form-control" />
                                    <span className="text-danger">{landMarkMsg}</span>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <input type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" />
                                    <span className="text-danger">{cityMsg}</span>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <select value={state} className="custom-select" onChange={(e) => setState(e.target.value)}>
                                        <option value="">Select state</option>
                                        <option value="AndraPradesh">AndraPradesh</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Karnataka">Karnataka</option>
                                    </select>
                                    <span className="text-danger">{stateMsg}</span>
                                </div>
                                <div className="col-lg-12 pt-4">
                                    <input type="text" placeholder="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="form-control" />
                                    <span className="text-danger">{pincodeMsg}</span>
                                </div>
                                <div className="col-lg-12 mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={saveAddress}
                                    >
                                        Add Address
                                    </button>
                                    <span className="text-danger">{apiMsg}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
export default Addresses;