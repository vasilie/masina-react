import React, { Component } from 'react';
import uuid from "uuid";
import Media from '../Media';
import Heading from "../Heading";

import '../../App.css';

class Homepage extends Component {
  constructor(){
      super();
      this.state = {
          projects: [],
          media:[],
          heading:{}
      }
  }


  componentWillMount(){
      this.getProjects();
  }
  componentDidMount(){
  }
  getProjects(){
    this.setState({
      projects:[
        {
            id:uuid.v4(),
            title: "Business",
            category: "Web Design"
        },
        {
            id:uuid.v4(),
            title: "Social App",
            category: "Mobile Design"
        },
        {
            id:uuid.v4(),
            title: "Ecommerce Shopping cart",
            category: "Web Developent"
        }
      ],
      media: [
        {
          id:uuid.v4(),
          title: "Medved, a mašina.",
          type:"horizontal",
          img:"medvedmashina.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at porro dolorem, sapiente suscipit, quaerat aspernatur dolore omnis impedit soluta recusandae in, amet deleniti et velit harum modi, architecto rerum."
        },
        {
          id:uuid.v4(),
          title: "Radojka, a mašina.",
          type:"horizontal",
          img:"radojka.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at porro dolorem, sapiente suscipit, quaerat aspernatur dolore omnis impedit soluta recusandae in, amet deleniti et velit harum modi, architecto rerum."
        },
        {
          id:uuid.v4(),
          title: "Mašin-bravar, a mašina.",
          type:"vertical",
          img:"tito.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at porro dolorem, sapiente suscipit, quaerat aspernatur dolore omnis impedit soluta recusandae in, amet deleniti et velit harum modi, architecto rerum."
        },
        {
          id:uuid.v4(),
          title: "Samo sloga, a mašina.",
          type:"vertical",
          img:"gears.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at porro dolorem, sapiente suscipit, quaerat aspernatur dolore omnis impedit soluta recusandae in, amet deleniti et velit harum modi, architecto rerum."
        },
        {
          id:uuid.v4(),
          title: "Samo sloga,srbina masina.",
          type:"horizontal",
          img:"masina.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at porro dolorem, sapiente suscipit, quaerat aspernatur dolore omnis impedit soluta recusandae in, amet deleniti et velit harum modi, architecto rerum."
        },
      ],
      heading:
        {
          hOne:"RADIO MAŠINA",
          hTwo:"Potrudi se, možda i ti postaneš"
        }
  });
  }
  render() {
    return (
      <div className="Homepage">
          <div className="wrapper">
            <Heading heading={this.state.heading}/>
            <Media media={this.state.media} />
          </div>
    </div>
    );
  }
}


export default Homepage;
