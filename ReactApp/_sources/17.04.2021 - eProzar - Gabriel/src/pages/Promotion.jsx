import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Promotion.css';
import getProductsForCategory from '../productList';

function Promotion() {

    const today = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
    const monthName = monthNames[today.getMonth()];
    const formatedDate = `${today.getDate()} of ${monthName},`

    
    function randomProduct(id) {
        const randomProd = getProductsForCategory(id);
        return randomProd[Math.floor(Math.random() * getProductsForCategory(id).length)];
    }

    let productList1 = randomProduct(1);
    let productList2 = randomProduct(2);
    let productList3 = randomProduct(3);


    return (
      <div className='Promotion'>
        <Carousel className="Promotion-Carousel">
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={productList1.image}
              alt='First slide'
            />
            <Carousel.Caption>
              <h2>{productList1.name}</h2>
              <p className="text-light fs-5">{`For the ${formatedDate} ${productList1.name}:`}</p>
              <span className="text-success">Price from <em>{productList1.price}</em> to {'$' + (Math.floor(productList1.price.slice(1) / 2))}</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={productList2.image}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h2>{productList2.name}</h2>
              <p className="text-light fs-5">{`For the ${formatedDate} ${productList2.name}:`}</p>
              <span className="text-success">Price from <em>{productList2.price}</em> to {'$' + (Math.floor(productList2.price.slice(1) / 2))}</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={productList3.image}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h2>{productList3.name}</h2>
              <p className="text-light fs-5">{`For the ${formatedDate} ${productList3.name}:`}</p>
              <span className="text-success">Price from <em>{productList3.price}</em> to {'$' + (Math.floor(productList3.price.slice(1) / 2))}</span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Promotion;