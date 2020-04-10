import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'PhotoshopCC', price: '$80.99' },
    { name: 'PDFReader', price: '$85.50' },
    { name: 'AdobeLR', price: '$100' }
  ]

  const players = [
    { name: 'Messi', country: 'Argentina' },
    { name: 'Ronaldo', country: 'Portugal' },
    { name: 'Iniesta', country: 'Spain' }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter> </Counter>

        <Post>

        </Post>

        {
          players.map(pr => <Players player={pr}></Players>)
        }


        {
          products.map(product => <Product product={product}></Product>)
        }

        {/*<Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>
      */}
       

      </header>
    </div>
  );
}

function Post(){

  const [posts, setPost] = useState([]) ; 

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[]
  )
  //console.log(posts);
  return(
    <div>
      <h3>Posts : {posts.length}</h3>
      <ul>
        {       
          posts.map(post=><li>{post.title}</li>)  
          //posts.map(post=>console.log(post.title))
        }
      </ul>
    </div>

  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () =>setCount(count+1);
  
    return(
    <div>
      <h1 >Count: {count}</h1>
      <button onClick={handleIncrease}>Increase </button>
    </div>
  )
}

function Players(props) {
  const playerStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    height: '200px',
    width: '200px'
  }
  const { name, country } = props.player;

  return(
    <div style={playerStyle}>
    <h2>{name}</h2>
    <h4>{country}</h4>
    </div>
  )


}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>World's Best Panda</h3>
    </div>

  )
}

export default App;
