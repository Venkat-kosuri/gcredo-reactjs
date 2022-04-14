import React from 'react'
import {Link} from 'react-router-dom';
import {Tab,Row,Col,Nav} from 'react-bootstrap';
import {AiOutlineArrowRight} from 'react-icons/ai'
const IABAC = () => {
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
                <h1  className='content-heading mb-4'>IABAC</h1>
                     <p className='content-description'>The International Association of Business Analytics Certification- IABAC™ is a globally recognised professional organization dedicated to the advancement of applied data science and business analytics. IABAC's vision is to be the leading professional association that accelerates the use of data science and related technologies by corporations, academia, and professionals in line with the changing industry needs. IABAC Certifications are widely acclaimed and recognized in the data science and business analytics domains.
</p>
                </div>
            </div>
        </div>
    </div>

    <div className="pages-tabs">
        <div className="container">    
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col xs={12} md={3}>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link eventKey="first">Data Science Certifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Business Analytics Certification</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Artificial Intelligence Certification</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col xs={12} md={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <div className='row'>
            <h1 className='content-heading'>Data Science Certifications</h1>
        <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Data Science Foundation
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Beginner Level Certification
Fresher’s oriented Program
</p>
    <p>The Data Science Foundation course addresses the fundamental ideas of data science, effectively imparting foundational knowledge in the field and helping embark on a data science career. 
</p>
    <div>
    <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Data Science Developer
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Beginner - Intermediate Level Certification
Global Recognition
</p>
    <p>Certified Data Science Developer Certification is acclaimed for practical knowledge of integrating developer abilities into data science and obtaining competency in the data science toolkit. 
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Machine Learning Expert
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Intermediate - Expert Level Certification
Global Recognition - Testimony of Skills
</p>
    <p>Certified Machine Learning Expert Course assists in adding value to anyone interested in a Machine Learning career, helping master machine learning to become a machine learning expert. 
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Data Scientist
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Intermediate - Expert Level

Highly pursued Data Science Certification
</p>
    <p>Certified Data Scientist is a career-oriented course for beginning and intermediate learners wishing to get into the fast-paced data science domain, providing a solid foundation of data science.
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 " style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Data Scientist - Operations
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Data Science Specialization in Operations
Operations overview, predictive analytics, challenges and use cases.
</p>
    <p>Certified Data Scientist Operations course covers best practices for infusing Data Science into organizational operations by providing opportunities for companies eager to absorb data science.
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Data Scientist - Finance
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Data Science Specialization in Finance
Finance overview, predictive analytics, challenges and use cases.
</p>
    <p>The Certified Data Scientist - Finance programme promises to revolutionise the way finance is done by giving financial analysts who want to master data science skills the opportunity to do so.
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Data Scientist - HR
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Data Science Specialization in HR
HR overview, predictive analytics, challenges and use cases.
</p>
    <p>The Certified Data Scientist - HR speciality broadens understanding of creating strategies and best practices for using data science models in human resource activities within their company. 
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Data Scientist - Marketing
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Data Science Specialization in Marketing
Marketing overview, predictive analytics, challenges and use cases.
</p>
    <p>Certified Data Scientist - marketing course provides theoretical and practical knowledge on data science uses in marketing, instilling best practices in the discharge of data science in marketing.
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Data Science Certified Manager
</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Data Science Specialization for Managers
Global Recognition
</p>
    <p>Data Science for Managers course is developed, keeping managers and business leaders in mind, in comprehending the value of data and making the most of data science in their management activities. 
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className='row'>
        <h1 className='content-heading'>Business Analytics Certifications</h1>
        <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Foundation

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Fresher Oriented Program
Globally recognized credential

</p>
    <p>The Business Analytics Foundation Course is for freshers in the field of business analytics, covering the cores of business analytics and related topics of statistics and machine learning.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Business Analytics Expert

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Advanced level BA Certification
Globally recognized credential

</p>
    <p>The Business Analytics Expert Course is about applying business analytics concepts to industrial functions helping candidates in becoming an expert in analytics and effective implementation.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Visual Analytics Expert

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Assessment based certification - Testimony of skills
Globally recognized credential

</p>
    <p>Certified Visual Analytics Expert is a globally recognized certification, an expert-level course aiming to inculcate mastery in both theoretical and practical applications of Visual Analytics. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Business Analytics for Managers

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Managers 
Globally recognized credential

</p>
    <p>Business Analytics for Managers is intended for senior positions requiring a lot of decision-making. Managers or business leaders in industries can sign up and receive proper exposure to the domain.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Specialist Banking

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Banking domain
Globally recognized credential

</p>
    <p>Business Analytics in Banking Course focuses on the applications of business analytics in the banking industry, assisting the company’s operation and advancing analytics deployment.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Specialist Agriculture

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Agriculture domain
Globally recognized credential

</p>
    <p>The Agriculture industry's Business Analytics speciality improves the ability to apply Business Analytics methodologies for cost reduction, descriptive and predictive analytics. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Specialist Healthcare

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Healthcare domain
Globally recognized credential

</p>
    <p>Business Analytics in Healthcare Course covers the key processes in healthcare management, as well as BA methodologies that can be utilized in healthcare economics.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Specialist  Logistics

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Logistics domain
Globally recognized credential

</p>
    <p>The Business Analytics in Logistics expands the knowledge of applying Business Analytics methodologies to create a value-driven logistic network that aligns supply and demand. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Specialist Insurance

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Insurance domain
Globally recognized credential

</p>
    <p>The Business Analytics Specialisation in Insurance covers key processes in insurance management, as well as BA methodologies that can be applied to the insurance business.


</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Business Analytics Specialist Retail

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Business Analytics Specialization - Retail domain
Globally recognized credential

</p>
    <p>Business Analytics Specialization in Retail is about applying BA to retail and helping improve the candidate's skills in cost reduction, descriptive, and predictive analytics.
</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <div className='row'>
        <h1 className='content-heading'>Artificial Intelligence Certifications</h1>
        <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Artificial Intelligence Foundation



</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Artificial Intelligence Course for Beginners
Focus on AI Fundamentals

</p>
    <p>IABAC's Artificial Intelligence Foundation is designed to give a thorough understanding of AI's foundational concepts, as well as its diverse applications and use cases in a variety of fields.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Machine Learning Associate

</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Key Certification for Machine Learning Aspirants
Principles of ML and Algorithms


</p>
    <p>Certified Machine Learning Associate Course is internationally recognised and helps candidates meet deadlines in a fast-paced business setting, candidates will learn and grasp workflow rules.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Artificial Intelligence Expert


</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Advanced Level Certification in AI
Mastery of AI Techniques and Practices 


</p>
    <p>Certified Artificial Intelligence Expert Course paints a picture of AI concepts and their applications in the industry, enabling candidates to get an upper hand in the broad domain of AI.

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Deep Learning Expert


</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Expert level Certification in Artificial Intelligence
Comprising an extensive syllabus of AI


</p>
    <p>The Certified Deep Learning Expert Course is about applying DL knowledge to a variety of business functions, allowing candidates to study deep learning techniques following industry best practices. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified NLP Expert


</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Specialization in Natural Language Processing
Central concepts of NLP


</p>
    <p>The Natural Language Processing (NLP) specialisation provides you with hands-on experience in delivering computer vision projects as well as knowledge of NLP methodologies and best practices. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Artificial Intelligence Certified Executive


</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Certification Course for Senior Executives
Leading AI concepts, challenges and industry cases



</p>
    <p>Executive Certification in Artificial Intelligence provides high-level knowledge of AI, principles, algorithms, applications and challenges, which are critical for strategic decision-making. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-xs-12 col-md-4">
                <div className="card mt-3 mb-3" style={{width: '17rem',height:'26rem'}}>
  <div className="card-body">
    <h5 className="card-title text-left">Certified Computer Vision Expert


</h5>
    <p className="text-left"  style={{fontStyle: 'italic'}}>Specialization in Computer Vision
Key elements and techniques of Computer Vision


</p>
    <p>The Computer Vision specialisation allows the candidate to gain hands-on experience in delivering Computer Vision projects while also learning about Computer Vision techniques and best practices. 

</p>
    <div>
     <div className="d-flex justify-content-between ">
      <img src="images/icfqtr.png" alt="" />
      <strong className='cards-icons'><AiOutlineArrowRight></AiOutlineArrowRight></strong>
    </div>
    </div>
  </div>
</div>
                </div>
                
        </div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
    </div>
   



    </div>
  )
}

export default IABAC