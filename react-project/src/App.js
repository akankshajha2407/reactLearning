import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Img1 from "./images/bgimage.jpg";
import Img2 from "./images/hybrid.jpg";
import Img3 from "./images/new.jpg";
import Img4 from "./images/react.png";
import Img5 from "./images/angular.png";
function App() {
  return (
    <>
      <section id="home">
        <div className="topbanner container-fluid px-0 "style={styles.topbanner}>
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-6">
                <h1>
                  <h style={{color: "#ff0000"}}>
                    <b>Mobile</b>
                  </h>{" "}
                  <h style={{color: "#000"}}>
                    <b>App Development</b>
                  </h>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum amet leo.
                </p>
                <div class="mt-4">
                  <button style={styles.Quotebtn}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counter">
    <section style={styles.counterSection}>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 col-6 mb-lg-0 mb-md-0 mb-2">
            <h2> 
              <span class="count">1000+</span>
            </h2>
            <p>clients</p>
          </div>
          <div class="col-md-3 col-6 mb-lg-0 mb-md-0 mb-2">
            <h2>
              <span class="count">3000+</span>
            </h2>
            <p>projects</p>
          </div>
          <div class="col-md-3 col-6  mb-lg-0 mb-md-0 mb-2">
            <h2>
              <span class="count">6 year</span >
            </h2>
            <p>Experience</p>
          </div>
          <div class="col-md-3 col-6  mb-lg-0 mb-md-0 mb-2">
            <h2>
              <span class="count">100+</span>
            </h2>
            <p>staff</p>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section>
<div class="wrapper">
<h2 class="ads" style={{textAlign: "center", marginBottom: "25px"}}>Our Custom Mobile <h style={{color: "#ff0000"}}>App Developement Services</h></h2>
<div class="container">

  <div class="row">
    <div class="col-sm-12 col-md-6" >
      <div class="view overlay zoom"><img src={Img1} width="100%" height="350 px" style={{marginBottom: "10px"}} class="rounded-3" class="img-fluid " alt="smaple image"/></div>
    </div>
    <div class="col-sm-12 col-md-6 border-radius: 10px">
      <div class="native"><h3><h style={{color: "#3339FF"}}><b>Native</b></h><h style={{color: "#ff0000"}}> Mobile App Developement</h></h3></div>
      <br/>
      <p>fhdsiu hvifdvb  fbvjhb ufhf bvidfubfs dfiuhebvsbvud vdfbveifv udfvdf b vudfb vdsv bfdhv iufg fhvuyga vhniu efbd ci d idfunv fdiuv vhfdiv hdfio dfv dfui fvh dfuifv idfuvh fdiuuh vdfuiv uvf </p>
      <li>nudf hfdfvi ff</li>
      <li>fnbie vnfduv fdiuv</li>
      <li>vbe fe dniv ijoem c</li>
    </div>
  </div>
</div>
<br/>

<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6 order-md-last">
      <img src={Img2} width="100%" height="350 px" style={{marginBottom: "10px"}}class="rounded-3"/>
    </div>
    <div class="col-sm-12 col-md-6 order-md-first" >
      <h3 class="native"><h style={{color: "#3339FF"}}><b>Hybrid</b></h><h style={{color: "#ff0000"}}> Mobile App Developement</h></h3>
      <br/>
      <p>fhdsiu hvifdvb  fbvjhb ufhf bvidfubfs dfiuhebvsbvud vdfbveifv udfvdf b vudfb vdsv bfdhv iufg fhvuyga vhniu efbd ci d idfunv fdiuv vhfdiv hdfio dfv dfui fvh dfuifv idfuvh fdiuuh vdfuiv uvf </p>
      <li>nudf hfdfvi ff</li>
      <li>fnbie vnfduv fdiuv</li>
      <li>vbe fe dniv ijoem c</li>
    </div> 
    </div>
</div>
<br/>
<div class="container">
  <div class="row">
    <div class=" col-sm-12 col-md-6 ">
      <img src={Img1} width="100%" height="350 px" style={{marginBottom: "10px"}} class="rounded-3"/>
    </div>
    <div class="col-sm-12 col-md-6">
      <h3 class="native"><h style={{color: "#3339FF"}}><b>Android</b></h> <h style={{color: "#ff0000"}}>App Developement</h></h3>
      <br/>
      <p>fhdsiu hvifdvb  fbvjhb ufhf bvidfubfs dfiuhebvsbvud vdfbveifv udfvdf b vudfb vdsv bfdhv iufg fhvuyga vhniu efbd ci d idfunv fdiuv vhfdiv hdfio dfv dfui fvh dfuifv idfuvh fdiuuh vdfuiv uvf </p>
      <li>nudf hfdfvi ff</li>
      <li>fnbie vnfduv fdiuv</li>
      <li>vbe fe dniv ijoem c</li>
    </div>
    </div>
</div>
<br/>
<div class="container">
  <div class="row">
    <div class=" col-sm-12 col-md-6 order-md-last">
      <div class="picture"><img src={Img2} width="100%" height="350 px" style={{marginBottom: "10px"}} class="rounded-3"/></div>
    </div>
    <div class=" col-sm-12 col-md-6 order-md-first">
      <h3 class="native"><h style={{color: "#3339FF"}}><b>Cross Platform</b></h><h style={{color: "#ff0000"}}> Developement</h></h3>
      <br/>
      <p>fhdsiu hvifdvb  fbvjhb ufhf bvidfubfs dfiuhebvsbvud vdfbveifv udfvdf b vudfb vdsv bfdhv iufg fhvuyga vhniu efbd ci d idfunv fdiuv vhfdiv hdfio dfv dfui fvh dfuifv idfuvh fdiuuh vdfuiv uvf </p>
      <li>nudf hfdfvi ff</li>
      <li>fnbie vnfduv fdiuv</li>
      <li>vbe fe dniv ijoem c</li>
    </div> 
    </div>
</div>
    <br/><br/>
    <div class="text-center">
    <button type="button" class="btn btn-primary">Contact Us</button>
    </div>
</div>
</section>

<h2 class="ads" style={{textAlign: "center"}}><h style={{color: "#ff0000"}}>Technologies</h> We Work With</h2><br/><br/>
<section>
<div class="tech">
<div class="container">
  <div class="row align-items-start">
    <div class="col-md-3 col-sm-12 col-6">
      <img src="react.png"/>
    </div>
    <div class="col-md-3 col-sm-12 col-6">
      <img src={Img5}/>
    </div>
    <div class="col-md-3 col-sm-12 col-6">
      <img src={Img4}/>
    </div>
    <div class="col-md-3 col-sm-12 col-6">
      <img src={Img5}/>
    </div>
  </div>
</div></div>
<br/><br/><br/>
</section>
    
    </>
  );
}

export default App;

var styles={
  Quotebtn:{
    display: "inline-block",
    padding: "0.625rem 1.875rem",
    lineHeight: "1.5625rem",
    backgroundColor: "#3339FF",
    border: "0.1875rem solid #ffffff",
    color: "#ffffff",
    fontSize: "0.9375rem",
    fontWeight: "600",
    textTransform: "capitalize",
    boxShadow: "0px 2px 10px -1px rgb(0 0 0 / 19%)",
    
    transition: "all .4s ease-out 0s",
  },
  counterSection:{
    backgroundColor: "#ff0000da",
    padding:"2.5rem 0",
  },
  topbanner:{
    width:"100%",
    background: "url('new.jpg') no-repeat center center fixed",
    backgroundSize:"cover",
    padding:"10.875rem 0 4rem",
  }
}