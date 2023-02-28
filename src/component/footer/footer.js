import React from "react";
import './footer.css'

export default function Footer(){
    const footerParts=[
        {a:"CodePen"},
        {a2:"For"},
        {a3:"Social"},
        {a4:"Community"},
        {name:"CodePen About Blog Podcast Documentation Support Shop"},
        {name2:"For Teams Education Privacy EmbedsAsset Hosting"},
        {name3:"Social YouTube Twitter Instagram Mastodon"},
        {name4:"Community Spark Challenges Topics Code of Conduct"},
        {copyright:"©2023 CodePen"},
        {copyright1:"Demo or it didn't happen."},
        {copyright2:"Terms of Service · Privacy Policy"}

 


    ]
    return(
        <>
        
        {footerParts.map((a)=>(
            <>
            <div className="footer">
                {a.name}
                {a.name2}
                {a.name3}
                {a.name4}
            </div>
            <div className="copyright" style={{color:"white"}}>
                {a.copyright}
                {a.copyright1}
                {a.copyright2}
            </div>
         </>
        ))}
        </>
    )
}