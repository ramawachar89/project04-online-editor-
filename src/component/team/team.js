import React from 'react'
import './team.css'

export default function Team(){
    return(
        <div className="team"><h2 >Bring the Whole Team</h2>
        <p className='para'>Each team and team member gets all the features of a PRO membership. That means the Team can do things like upload Assets, use features like Collab Mode, Professor Mode, Presentation Mode, and Live View, and apply custom CSS to Posts, Profiles, and Embeds.</p>
        <button className='btnStart'>Start a Team</button>
        <h2>Loved by hundreds of teams, including:</h2>
        
       <div style={{marginLeft:"2rem"}} className='imggg'>
        <img height="62rem" src='https://cpwebassets.codepen.io/assets/packs/airbnb-cb44d3434e60956b120c2cfd2afa9a23.png'/>
       <img  height="32rem"  src='https://cpwebassets.codepen.io/assets/packs/grubhub-f05150a98afe6175f221f4bc75ac3372.png'/>
      <img height="32rem"  src='https://cpwebassets.codepen.io/assets/packs/square-e4a6fa8c30a53180c593a11aeb1618c2.png'/>
      <img height="32rem"  src='https://cpwebassets.codepen.io/assets/packs/netflix-8b4f0b76ad5ccaa1b6326267be6c396f.png'/>
      <img height="32rem"  src='https://cpwebassets.codepen.io/assets/packs/adobe-0d9fee1af16f2db73270e52fbdcf4fe8.png'/>
      <img height="32rem"  src='https://cpwebassets.codepen.io/assets/packs/salesforce-63204abcda6bd196c6a6da3bb4911510.png'/>
      </div> 
        
        </div>
    )
}