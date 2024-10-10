import './Footer.css'
function Footer(){
    return(
<div className='footer'>

<div className='logo'><img src='/freshfield logo.svg' FreshField /></div>

<div className='nut'>
<div > 
<h3 style={{fontSize:"25px", color:"white"}}><b>Navigate</b></h3>

    <ul className='navigate' >
<li>About Us </li>
<li>Our Story</li>
<li>Our Harvest</li>
<li>Benefits</li>
<li>Reviews</li>
<li>Contact Us</li>
<li>Privacy Policy</li>
    </ul>


</div>
<div >
    <h3  style={{fontSize:"25px", color:"white"}}><b>Utility</b></h3>
    
        <ul className='utility' >
            <li>Get Started</li>
            <li>Styleguide</li>
            <li>License</li>
            <li>Changelog</li>
        </ul>

</div>
<div className='freshfieldd'>
    <h3  style={{fontSize:"25px", color:"white"}}><b>Freshfield</b></h3>
    <p>FreshField Farm, 1234 Harvest Lane, </p>
        <p>Countryside, IL 54321, United States</p>
<p>+1 000 000 000</p>
<p>help@freshfield.io</p>
</div>






</div>











</div>














    );


}export default Footer;