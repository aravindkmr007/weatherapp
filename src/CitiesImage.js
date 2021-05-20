import React, { useState} from "react";

const CitiesImages = () => {
    const [Cities, setCities] = useState([
        {
            CityName: "Chennai",
            href : "https://upload.wikimedia.org/wikipedia/commons/c/c6/Chennai_Central_side.jpg"
        },
        {
            CityName: "Delhi",
            href : "https://tse2.mm.bing.net/th/id/OIP.Qrc-HQICcs8D8oKDmtkptAHaE7?pid=ImgDet&rs=1"
        },
        {
            CityName: "Mumbai",
            href : "https://th.bing.com/th/id/OIP.IA7pBOR2AGsfy1DoJR2pOgHaEi?pid=ImgDet&rs=1"
        },
        {
            CityName: "Bangalore",
            href : "https://tse2.mm.bing.net/th/id/OIP.ERcLGGwOqmM9HUN58AY7iwHaEn?pid=ImgDet&rs=1"
        },
        {
            CityName: "Thiruvananthapuram",
            href : "https://tse4.mm.bing.net/th/id/OIP.ZIFTbbjEcIegSTn6_A1ytgHaFL?pid=ImgDet&rs=1"
        },
    ])
    return Cities
}

export default CitiesImages

