import React from "react";




const Footer = () =>
{

    const data = new Date();
    const year = data.getFullYear();
    return (
        <>
            <footer className="bg-light text-center footer">
                <p className ="text-center">@{year} Manideep Mobiles,All Rights Reserved | Terms and conditions</p>

            </footer>
            </>
    )
}
export default Footer;