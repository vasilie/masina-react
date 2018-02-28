import React, { Component } from 'react';
import $ from "jquery";
import Heading from "../Heading";
import MediaItem from "../MediaItem";

const artMedia = {
  width:"30%",
  clear:"both",
  float:"left",
  margin:"20px"
};
class ArtPage extends Component {
  constructor(){
      super();
      this.state = {
          art:[]
      }
  }
  getArt(){
    $.ajax({
      url:"http://masina.develop/art",
      dataType:"json",
      cache:false,
      success:function(data){
        this.setState({art:data.data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error:function(xhr,status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
      this.getArt();
  }
  componentDidMount(){
      this.getArt();
  }

  render() {
    let mediaItems;
    if (this.state.art){
      mediaItems = this.state.art.map( artItem => {
          return (
             <img style={artMedia} src={"http://masina.develop/storage/app/media/" + artItem.img}  />
          );
      });
    }
    return (
      <div className="wrapper--big">
          {mediaItems}
      </div>
    );
  }

}


export default ArtPage;
