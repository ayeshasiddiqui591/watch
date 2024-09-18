import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WatchList.css';
import w1 from './w1.png';
import w2 from './w2.jpg';
import w3 from './w3.jpg';
import w4 from './w4.jpg';
import w5 from './w5.jpg';
import w6 from './w6.jpg';
import new1 from './new1.jpg';
import new2 from './new2.jpg';
import new3 from './new3.jpg';
import new4 from './new4.jpg';
import new5 from './new9.jpg';
import new6 from './new6.png';
import new7 from './new10.jpg';
import new8 from './new8.png';
const WatchList = () => {
  const navigate = useNavigate();

  const newArrivals = [
    {
      id: 1,
      name: 'Jacob & Co. Epic X',
      price: '₹34,00,000',
      image: w1,
    },
    {
      id: 2,
      name: 'Tudor Black Bay',
      price: '₹3,59,400',
      image: w2,
    },
    {
      id: 3,
      name: 'Norqain Adventure',
      price: '₹3,61,000',
      image: w3,
    },
    {
      id: 4,
      name: 'Ulysse Nardin Diver',
      price: '₹14,80,000',
      image: w4,
    },
  ];

  const trending = [
    {
      id: 1,
      name: 'Jacob & Co. Epic X',
      price: '₹34,00,000',
      image: new1,
    },
    {
      id: 2,
      name: 'Tudor Black Bay',
      price: '₹3,59,400',
      image: new2,
    },
    {
      id: 3,
      name: 'Norqain Adventure',
      price: '₹3,61,000',
      image: new3,
    },
    {
      id: 4,
      name: 'Ulysse Nardin Diver',
      price: '₹14,80,000',
      image: new4,
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: 'Jacob & Co. Epic X',
      price: '₹34,00,000',
      image: new5,
    },
    {
      id: 2,
      name: 'Tudor Black Bay',
      price: '₹3,59,400',
      image: new6,
    },
    {
      id: 3,
      name: 'Norqain Adventure',
      price: '₹3,61,000',
      image: new7,
    },
    {
      id: 4,
      name: 'Ulysse Nardin Diver',
      price: '₹14,80,000',
      image: new8,
    },
  ];

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="watch-list">
      <section>
        <h2>New Arrivals</h2>
        <div className="watches">
          {newArrivals.map((watch) => (
            <div className="watch-card" key={watch.id} onClick={() => handleClick(watch.id)}>
              <img src={watch.image} alt={watch.name} />
              <h3>{watch.name}</h3>
              <p>{watch.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Trending</h2>
        <div className="watches">
          {trending.map((watch) => (
            <div className="watch-card" key={watch.id} onClick={() => handleClick(watch.id)}>
              <img src={watch.image} alt={watch.name} />
              <h3>{watch.name}</h3>
              <p>{watch.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Best Sellers</h2>
        <div className="watches">
          {bestSellers.map((watch) => (
            <div className="watch-card" key={watch.id} onClick={() => handleClick(watch.id)}>
              <img src={watch.image} alt={watch.name} />
              <h3>{watch.name}</h3>
              <p>{watch.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WatchList;
