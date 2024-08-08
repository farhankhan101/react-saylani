// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import CardList from '../components/CardList';

const Home = ({ theme }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setItems([
        { image: 'https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg', text: 'FOOD 1', buttonText: 'Learn More' },
        { image: 'https://blog.travelkhana.com/tkblog/wp-content/uploads/sites/2/2023/02/A-to-Z-Food-1024x683.jpg', text: 'FOOD 2', buttonText: 'Get Started' },
        { image: 'https://blog.travelkhana.com/tkblog/wp-content/uploads/sites/2/2023/02/A-to-Z-Food-1024x683.jpg', text: 'FOOD 3', buttonText: 'Get Started' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLSxy_eht2GifPaLIcs27-4citrwminvgMg&s', text: 'FOOD 4', buttonText: 'Find Out More' }
      ]);
    };
    fetchData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <Carousel items={items} />
      <CardList items={items} />
    </div>
  );
};

export default Home;
