import React from 'react';
import './Section1.css';
import Button from 'react-bootstrap/Button';

function Section1() {
    return (
        <section className="section1">
        <div className="first_div">
             <h1  className="first">Learn Without Limits</h1>
             <p className="second">Take the next step in your career with a world class learning experience.</p>
             <Button style={{color:"white", background:"rgb(0, 86, 210)"}} className="third">Join Today</Button>           
        </div>
        <div className="second_div">
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/33EmCuyKJT5MD5DOiYCcCV/993af7e2f4b789aed6193ff1978fe5d6/IN_HERO_C.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40"
            alt=""/>
        </div>
        </section>
    )
}

export default Section1
