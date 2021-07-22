import { useState } from 'react';
import snow from '../../images/snow.jpg';
import LeftNavLink from './LeftNavLink';
const Links = () => {

    const [linksData, setLinksData] = useState([
        {
            imagePath: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-1/c56.0.332.332a/124166152_100435125221758_919992968816793874_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=l81NhRI0AA8AX8JeVPW&_nc_ht=scontent.fhyd14-2.fna&tp=29&oh=199119ca8d758112750add162ee60a74&oe=609B8E78",
            titletext: "Bhargava"
        },
        {
            imagePath: "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png",
            titletext: "abc"
        },
        {
            imagePath: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-1/c56.0.332.332a/124166152_100435125221758_919992968816793874_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=l81NhRI0AA8AX8JeVPW&_nc_ht=scontent.fhyd14-2.fna&tp=29&oh=199119ca8d758112750add162ee60a74&oe=609B8E78",
            titletext: "Bhargava"
        },
        {
            imagePath: "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png",
            titletext: "abc"
        }
    ])

    return (
        <>
            {linksData.map((link, i) => (
            <LeftNavLink linkData={link} key={i} />
                   ))}
        </>
    );
};

export default Links;