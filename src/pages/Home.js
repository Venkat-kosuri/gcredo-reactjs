import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home = () => {
    const options = { 
        responsive: {
          0: {
              items: 1,
          },
          700: {
              items: 1,
          },
          1000: {
              items: 1,
    
          }, 
      },
      loop:true ,
      nav:true  ,
      margin:8,
      autoplay: true,
      autoplaySpeed:3000,
      autoplayTimeout:3000,
     /*  smartSpeed:3000, */
      }    
  return (
    <div>
        <div className="home-header">   
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-xs-12 col-md-12 "  >
                    <OwlCarousel {...options}  className="owl-theme"  > 
                    <div style={{ backgroundImage: "url(" + "images/landing-page.jpg" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                    <h3>Meet Your Corporate Training Needs With GCREDO</h3>
                     <h1>CORPORATE <br /> SOLUTIONS</h1>
                     <button className='home-btn'>Learn More</button>
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/landing-page.jpg" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                    <h3>Meet Your Corporate Training Needs With GCREDO</h3>
                     <h1>CORPORATE <br /> SOLUTIONS</h1>
                     <button className='home-btn'>Learn More</button>
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/landing-page.jpg" + ")",}} className='home-sliders'  >
                    <div className="container pt-2">
                    <h3>Meet Your Corporate Training Needs With GCREDO</h3>
                     <h1>CORPORATE <br /> SOLUTIONS</h1>
                     <button className='home-btn'>Learn More</button>
                    </div>
                         </div>
                    <div style={{ backgroundImage: "url(" + "images/landing-page.jpg" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                    <h3>Meet Your Corporate Training Needs With GCREDO</h3>
                     <h1>CORPORATE <br /> SOLUTIONS</h1>
                     <button className='home-btn'>Learn More</button>
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/landing-page.jpg" + ")",}} className='home-sliders'  >
                    <div className="container pt-2">
                    <h3>Meet Your Corporate Training Needs With GCREDO</h3>
                     <h1>CORPORATE <br /> SOLUTIONS</h1>
                     <button className='home-btn'>Learn More</button>
                    </div>
                         </div>
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>

     <div className="abt-gcredo mt-5">
         <div className="container">
             <div className="row">
             <h1 className='content-heading'>WHY GCREDO</h1>
                 <div className="col-xs-12 col-md-12">
                     <ul>
                         <li>GCREDO,Global Credentialling Office, is the world's first certification bords aggregator with vision extending globally reputed and respected certification under one roof </li>
                   
                     <li>Partnering with GCREDO  will get your organization to access all the portfolio certifications for various certification bodies</li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
       
       <div className="benifits-gcredo mt-5">
           <div className="container">
               <div className="row">
                   <h1  className='content-heading mb-4'>Benifits of GCREDO</h1>
                   <div className="col-xs-12 col-md-3">
                       <div className="boxes">
                       <h5 className='boxes-numbers'>01</h5>
                           <center>
                           <p>No-Cost GCREDO onboarding</p>
                           <hr  className="boxes-line1 "/>
                           </center>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-3">
                       <div className="boxes">
                       <h5 className='boxes-numbers mb-4'>02</h5>
                       <center>
                    <p>Hassle-free on boarding to valid individual cerfication boards without any extra paperwork</p>
                    <hr  className="boxes-line"/>
                    </center>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-3">
                       <div className="boxes">
                       <h5 className='boxes-numbers'>03</h5>
                           <center>
                        <p>One partnership to access many certification boards many certifications boards with preferrial certification pricing </p>
                        <hr  className="boxes-line"/>
                        </center>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-3">
                       <div className="boxes">
                       <h5 className='boxes-numbers'>04</h5>
                       <center>
                       <p>Manage all certifications requests to varous boards payments and reports from your GCREDO dashboard </p>
                       <hr  className="boxes-line"/>
                       </center>
                       </div>
                   </div>
               </div>
           </div>
       </div>

     <div className="certificate-partners">
         <div className="container">
             <div className="row">
                 <h1 className='content-heading'>Our Certifications Partners</h1>
                 <div className="col-xs-12 col-md-12">
                 <img src="images/skl_accreditations2.webp" alt=""  className='img-fluid'/>
                 </div>
             </div>
         </div>
     </div>

     <div className="gcredo-enquiry mt-5" style={{ backgroundImage: "url(" + "images/landing.jpg" + ")",}}>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-xs-12 offset-md-4 col-md-8">
                     <p className='text-dark'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias architecto maiores deserunt aperiam blanditiis dolor aspernatur ab eum, labore eius vel sequi reiciendis quibusdam incidunt consectetur, porro a consequuntur eligendi temporibus! Rerum, doloribus reprehenderit ex earum, delectus omnis itaque provident quibusdam debitis, rem nam. Magni dolorum sunt velit enim minima!</p>
                     <button className='navbar-button'>Enquiry Now</button>
                 </div>
             </div>
         </div>
     </div>
          

    </div>
  )
}

export default Home;