const LeftNavLink = ({ linkData }) => {
    return (

        <>
            <div className="media links-bg p-2 rounded-sm">
                <img src={linkData.imagePath} alt="snow" className="link-icon link-radius" />
                <div className="media-body p-2">
                    <h5>{linkData.titletext}</h5>
                </div>
            </div>
        </>

    )
}

export default LeftNavLink;