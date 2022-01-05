import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <div className='banner'>
            <img
            className="home__image"
            src="https://media.istockphoto.com/photos/tractor-spraying-soybean-field-picture-id506164764?b=1&k=20&m=506164764&s=170667a&w=0&h=Jape5dTdB-8HNjQFjc6aJODc_XQTqTwxGN4j0-j-Icg="
            alt=""/>
            <h2><span>  Welcome to  <br /></span><span class='spacer'> Agriculture Farm</span></h2>

            </div>
            <div className="home__row">
            <Product
            id="id:1234"
            title="Tomato"
            quantity="2kgs"
            price={29}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Sh1c4mIaAprWaFiUmSFCQNbE-yNRjskDwnKz-s1ME_h57v2a"
            />

          <Product
            id="id:2345"
            title="Orange"
            quantity="5kgs"
            price={500}
            rating={3}
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHSrEojRr2tfEv7WAeqWvHq-T7dSMOmvd61O6xrJ3jR7_YsRFm"
            />
             <Product
            id="id:3456"
            title="Papaya"
            quantity="1.25kgs"
            price={35}
            rating={3}
            image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4h41-WkcbrDtc3lRmIYh4YXVpP-UAvzbIUwVPEN7BDUQo4244"
            />
             <Product
            id="id:4567"
            title="Onion"
            quantity="1kg"
            price={30}
            rating={5}
            image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-SL_NLQG3mB3nK_pcnaqoRQW5uoR2QGV5YNzCLdsHl2v1KEAk"
            />
             <Product
            id="id:5678"
            title="Wheat"
            quantity="5kgs"
            price={156}
            rating={4}
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_390057.jpg"
            />

        
        
            </div>

            <div className="home__row">
            <Product
            id="id:1000"
            title="Potato"
            quantity="1kg"
            price={25}
            rating={4}
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlr7nRw5tfkdjVBnM7RnQNnQC_w9nDQWKD0OHsrjIJfJd6Y_5H"
            />
             <Product
            id="id:0001"
            title="LadiesFinger"
            quantity="1kg"
            price={20}
            rating={5}
            image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ737nV-fZGFGW77UHAX_-JvWqWEFuZ9_nV25Gp97g6Atx8IcmW"
            />
             <Product
            id="id:0011"
            title="Pomegranate"
            quantity="1kg"
            price={200}
            rating={3}
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_321169.jpg"
            />
             <Product
            id="id:0022"
            title="Guava"
            quantity="1kg"
            price={50}
            rating={4}
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_425788.jpg"
            />
             <Product
            id="id:3000"
            title="Brinjal"
            quantity="1kg"
            price={35}
            rating={5}
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQexzgY0U9qyx-rv9yMxnbXrOHIXDCMTAesJr6-dhFuSEtGfb6e"
            />





            </div>


            
        </div>
    );
}

export default Home;
