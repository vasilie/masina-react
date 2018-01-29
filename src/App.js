import React, { Component } from 'react';
import $ from "jquery";
import Projects from "./Components/Projects";
import Media from "./Components/Media";
import AddProject from "./Components/AddProject";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import uuid from "uuid";
import Todos from "./Components/Todos";
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
          projects: [],
          todos: []
      }
  }
  getTodos(){
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/todos",
      dataType:"json",
      cache:false,
      success:function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error:function(xhr,status, err){
        console.log(err);
      }
    });
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
      ],
      heading:
        {
          hOne:"RADIO MAŠINA",
          hTwo:"Potrudi se, možda i ti postaneš"
        }
  });
  }
  componentWillMount(){
      this.getProjects();
      this.getTodos();
  }
  componentDidMount(){
      this.getTodos();
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});

  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
          <Header />
          {/*<AddProject addProject = {this.handleAddProject.bind(this)}></AddProject>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/> */}
          <div className="wrapper">
            <Heading heading={this.state.heading}/>
            <Media media={this.state.media} />
          </div>
          {/*<Todos todos={this.state.todos} /> */}
          <Footer />
    </div>
    );
  }
}


export default App;
