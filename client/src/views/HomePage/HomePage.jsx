import React from 'react'
import './HomePage.css'

// imports components
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Menu/Menu'
import Pagination from '../../components/Pagination/Pagination'
import Card from '../../components/Card/Card'


export default function HomePage() {
  const items = [
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    },
    {
      "image": 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
      "name": "videogame",
      "genres": "pc"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Menu />
        <div className="content">
          <Pagination />
          <div className="card-list">
            {items.map((i, index) => (
              <Card key={index} i={i} image={i.image} name={i.name} genres={i.genres} id={index}/>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}
/*
  
*/