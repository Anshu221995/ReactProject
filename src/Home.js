import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
    <p>React is an open-source JavaScript library for building user interfaces or UI components. </p>
    <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. </p>
  </GridWrapper>
)


// import React from 'react';
// //import logo from './logo.svg';  // Tell Webpack this JS file uses this image
// //console.log(logo); // /logo.84287d09.png


// export function Home() {   // Import result is the URL of your image  
//   return <img src={'//s3.amazonaws.com/betterboh/u/img/prod/68/1555383933_female-chef-cutting-veggies_brighter_2400x2247.jpg'} alt="Logo" />;
// }

// export default Home;

// import React from 'react';
// //import './App.css';
// import img from './img.png'



// export function Home() {
//   return (
//     <div  styles={{ backgroundImage:`url(${img.png})` }}>
//       <p>This is a paragraph and I am writing on the home page</p>
//     </div>
  
//   )
// }

// export default Home;