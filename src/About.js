// import React from 'react';
// import styled from 'styled-components';
// const GridWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   margin-top: 1em;
//   margin-left: 6em;
//   margin-right: 6em;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: minmax(25px, auto);
// `; 
// export const About = () => (
//   <GridWrapper>
//     <h2>About Page</h2>
//     <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
//     <p>I am a kitty cat, sup, feed me, no cares in the world</p>
//     <p>Meow meow, I tell my human purr for no reason but to chase after</p>


//   </GridWrapper>
// )

import React, {Component} from 'react';

export class About extends Component{
    constructor(){
        super();
        this.state={
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
        }
    }
    render(){
        

        return<div className='card text-center'>
                <img src={this.state.avatr_url}
                alt='' className= 'round-img' style={{width: '60px' }}
                 />
            

                <h3>{this.state.login}</h3>
                <div>
                <a href ={this.state.html_url} className= 'btn btn-dark btn-sm my-1'>
                More
                </a>
                </div>

            </div>

        
    }

}
export default About;
