import React from "react"

export default function DFimg(props) {

    return (
        <div className="dfimg-whole">
            <div className="dfimg-status">
                <img src="./assets/brand.png"/>
                <span className="dfimg-header">Thanh Vo<img src="./assets/svg/verify.svg" className="verified" alt="verified"/></span>
                <span className="dfimg-account">@0nit</span>
                <div className="dfimg-text">{props.text}</div>
            </div>
            <img src={props.img} className="dfimg-img"/>
        </div>
    )
}