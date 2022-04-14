import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai';

const DEVOPS = () => {
  return (
    <div>
         <section className='datascience-certification' style={{ backgroundImage: "url(" + "images/certification.jpg" + ")",}}>
           <div className='container'>
             <div className='row'>
              <div className="col-xs-12 col-md-12 ">
                <h1 >Data Science Certification</h1>
              </div>
              </div>
              </div>
              </section>

             <div className="page-changing">
           <div className="container text-start">
             <div className="row">
             <ol class="breadcrumb page-changes">
                     <Link to='/' className="page-routing breadcrumb-item  ">Home</Link>
                     <Link to='/itil' className="page-routing breadcrumb-item ">Certification Categories</Link>
                     <Link to='/iabac' className="page-routing breadcrumb-item text-dark ">IABAC Certification </Link>
                  </ol>
             </div>
           </div>
         </div>

    <div className="iabac-heading mt-3 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-12">
                <h1  className='content-heading mb-4'>DevOpsON</h1>
                     <p className='content-description'>The DevOpsON community is a learning group that is centered around setting quality standards for DevOps, wherein competency-based education can be reinforced by collaborating with respected thought leaders in their chosen domains. DevOpsON's mission is to create a community where members can access the most cutting-edge, inspirational, and transformational DevOps information, courses, and certifications, centered around evolving DevOps techniques and concepts. DevOpsON aims to produce information that encourages conversation, cooperation, and transformation, as well as to promote a healthy dialogue among global members from a variety of technical backgrounds and experiences.

</p>
                </div>
            </div>
        </div>
    </div>
     
    <div className="pages-tabs">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-3">
                <div className="card mt-3 mb-3" style={{width: '18rem',height:'25rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">DevOps Foundation
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>DevOps for Freshers
Comprehensive understanding of DevOps basics
</p>
    <p>The DevOps Foundation course establishes a foundational grasp of DevOps principles and its application to boost communication, collaboration, and integration between software developers and operations personnel. 
</p>
    <div>
    <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt=""  width='50px' />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-3">
                <div className="card mt-3 mb-3" style={{width: '18rem',height:'25rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">DevOps Practitioner
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Engage in DevOps Practices 
Become a DevOps Practising Professional

</p>
<p>The DevOps Practitioner Course helps comprehend the DevOps framework from a practical application standpoint, the fundamentals of DevOps, contemporary IT issues, cultural change management, and implementation methods.
</p>
    <div>
    <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt=""  width='50px' />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
 </div>
                <div className="col-xs-12 col-md-3">
                <div className="card mt-3 mb-3" style={{width: '18rem',height:'25rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">DevOps Architect

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Practical command over DevOps
Build DevOps Models

</p>
    <p>The DevOps Architect Course provides the skills needed to build and implement corporate applications, manage every aspect of the software development process, design an automated, efficient delivery pipeline.

</p>
   <div>
    <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt=""  width='50px' />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
</div>
<div className="col-xs-12 col-md-3 ">
                <div className="card mt-3 mb-3 " style={{width: '18rem',height:'25rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">DevOps Master

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Master the DevOps Domain
Sought after DevOps Certification

</p>
    <p>The DevOps Master Certification is an advanced-level certification of mastery over a combination of principles, knowledge, and practical skills to introduce and promote DevOps in organisations. 

</p>
   <div>
    <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt=""  width='50px' />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
</div>
<div className="col-xs-12 col-md-3 ">
                <div className="card " style={{width: '18rem',height:'25rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">DevOps Test Engineer

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>DevOps Engineer for Testing
Conduct testing of DevOps 


</p>
    <p>The goal of the DevOps Test Engineer Course is to teach, test, and validate DevOps terminology, principles, practises, automation, and value. It's important to keep the Development and Operations in check. 


</p>
   <div>
    <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt=""  width='50px' />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
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

export default DEVOPS