import React from 'react'
import { Link} from 'react-router-dom';

function ICFQ() {
  return (
    <div>
       <div className="ICFQ"  >
               <div className="container text-left">
                 <div className="row">
                 <div className="col-xs-12 col-md-12 ">
                     <h1 className="header2a" style={{color:'#333',marginTop:'150px',fontWeight:'bold'}}>ICFQ Certifications</h1>
                     </div>
                     </div>
                     </div>
                     </div>
                     <div className="page-changing">
           <div className="container text-start">
             <div className="row">
             <ol class="breadcrumb page-changes">
                     <Link to='/' className="page-routing breadcrumb-item  ">Home</Link>
                     <Link to='/itil' className="page-routing breadcrumb-item ">Certification Categories</Link>
                     <Link to='/ICFQ' className="page-routing breadcrumb-item text-dark ">ICFQ Certification </Link>
                  </ol>
             </div>
           </div>
         </div>

<div className="sect2">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-12 mt-3 ">
                <ol className="breadcrumb">
   <h1> ICFQ Certification</h1>
   <strong  style={{fontSize:'20px'}}><p className="mt-4">The International Council For Quality (ICFQ ®) is a global body, established to address the challenges that arise within an organization in pursuit of quality. ICFQ is a certification board with a goal of establishing quality standards within organizations. The ICFQ® courses are developed through extensive research with inputs from subject matter experts within the Quality domain . </p></strong>
    </ol>
</div>
 </div>
 </div>
</div>

<div className="sect3">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '18rem',height:'23rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Green Belt Certification</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Intermediate Level Certification in Six Sigma</p>
    <p>The ICFQ ® Six Sigma Green Belt Certification is an intermediate level one that aids in the development of a six sigma methodological foundation and explains the tools and procedures needed to implement the methodology.</p>
   
    <div>
    <img src="./images/icfq.png" class="img-fluid" style={{width:'50px',height:'50px',backgroundColor:'grey'}} /><span style={{fontSize:'42px',float:'right'}}>&#8594;</span>
    </div>
  </div>
</div>


                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '18rem',height:'23rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Black Belt Certification</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Advanced Level Certification in Six Sigma
</p>
<p>The ICFQ ® Six Sigma Black Belt Certification is of excellent quality and a mark of professional excellence. Black Belts are experts who can teach Six Sigma ideas, principles, as well as supporting systems and technologies. 
</p>
   
    <div>
    <img src="./images/icfq.png" class="img-fluid" style={{width:'50px',height:'50px',backgroundColor:'grey'}} /><span style={{fontSize:'42px',float:'right'}}>&#8594;</span>
    </div>
  </div>
</div>
 </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '18rem',height:'22rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Yellow Belt Certification
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Entry-level certification in Six Sigma
</p>
    <p>Yellow Belt Certification gives an exceptional start over six sigma. The base level of six sigma expertise is covered a thorough understanding of Six sigma's basic metrics and improvement methods by the Yellow Belt certification.
</p>
   <div>
   <img src="./images/icfq.png" class="img-fluid" style={{width:'50px',height:'50px',backgroundColor:'grey'}} /><span style={{fontSize:'42px',float:'right'}}>&#8594;</span>
    </div>
  </div>
</div>
</div>

<div className="col-xs-12 col-md-4 ">
                <div className="card " style={{width: '18rem',height:'25rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Master Black Belt Certification
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Advanced level certification in Six Sigma

</p>
    <p>Master Black Belt Course creates experts who have in-depth knowledge of current industry trends as well as expertise in designing techniques for maximising available organisational resources in order to achieve long-term success. 

</p>
   <div>
   <img src="./images/icfq.png" class="img-fluid" style={{width:'50px',height:'50px',backgroundColor:'grey'}} /><span style={{fontSize:'42px',float:'right'}}>&#8594;</span>
    </div>
  </div>
</div>
</div>



</div>
</div>
</div>


</div>
             

             


  )
}

export default ICFQ