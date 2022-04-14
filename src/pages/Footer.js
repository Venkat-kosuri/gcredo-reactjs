import React from 'react';
import {footer} from './Data';
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa';
import {ImYoutube} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'


const Footer =()=>{ 

    return(
        <div className="Footer mt-5" >
        <div className="container">
          <div className="row ">
          {
             
              footer.map( item => (  
               
                     <div className=" col-lg-3 col-xs-12 col-md
                     -3 col-sm-6 d-flex mb-3" key={item.id} >
                       <div >
                       <h5 style={{fontSize:"15px"}}>{item.heading}</h5>
                         <div>
                           <h5 style={{fontSize:"20px"}}>{item.d1}</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d2}</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d3}</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d4}</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d5}</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d6}</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d7 }</h5>
                           <h5 style={{fontSize:"15px"}}>{item.d8 }</h5>

                           
                         </div>
                       </div>
                       
                     </div>
                     
                     
                 
              ))
            }
             <div className="container" >
<div className="row"   style={{float:'right',border:"2px solid white"}} >
<div className="col-xs-12 col-md-12">


FOLLOW US ON &nbsp;&nbsp;<FaFacebookSquare/> &nbsp;<ImYoutube /> &nbsp;<BsLinkedin />&nbsp;<FaTwitterSquare/>

</div>
</div>
</div>
          </div>
          
        </div>
         





</div>      
    );
};

export default Footer;