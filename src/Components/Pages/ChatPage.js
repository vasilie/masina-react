import React, { Component } from 'react';
import io from 'socket.io-client';
import $ from 'jquery';

const socketUrl = "http://masinaradio.net:3231";

var pera;


class ChatPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      socket:null,
      nickname:null,
      color:'black'
    };
    this.initSocket = this.initSocket.bind(this);
  }
  componentDidMount(){
    this.initSocket();

  }
  getColor(){
    var r,g,b;
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    var color = "rgb("+r+","+g+","+b+")";
    return color;
  }
  initSocket = () => {
    console.log('socket state:' + this.state.socket);
    const socket = io(socketUrl);

    socket.on('connect', ()=>{
      console.log("connected");
    })
    this.setState({socket});
    var $messageForm = $("#send-message");
    var $nickForm = $("#setNick");
    var $nickBox = $("#nickname");
    var $users = $("#users");
    var $nickError = $("#nickError");
    var $messageBox = $("#message")
    var $chat = $("#chat");
    let that = this;
    $nickForm.submit(function(e) {
      e.preventDefault();
      console.log($nickForm.val().length);
      if ($nickBox.val().length === 0){
        $nickError.html("Username must have at least one character");
        return;
      }
      that.setState({
        nickname: $nickBox.val(),
        color:that.getColor()
      });
      socket.emit("new user",{nick:that.state.nickname, color:that.state.color},function(data){
        console.log('emmited');
        console.log(data);
        console.log('emmited');
        if (data){

          $("#nickWrap").hide();
          $(".contentWrap").show();
        } else {
          $nickError.html("That username is already taken");
        }
      });
      $nickBox.val("");
    });
    $messageForm.submit(function(e){
      e.preventDefault();
      socket.emit('send message', $messageBox.val());
      $messageBox.val('');
    });
    $messageForm.keypress(function (e) {
        if(e.which == 13 && !e.shiftKey) {
            $(this).closest("form").submit();
            e.preventDefault();
            return false;
        }
    });
    socket.on("usernames",function(data){
      var html = '';
      pera = data;
      // console.log(data[0].nickname);
      for (let i=0;i<data.length;i++){
        console.log(i);
        html+="<p style='background:"+data[i].color+"'>"+data[i].nickname+"</p>";
      }
      $users.html(html);
    });
    socket.on('new message', function(data){
      $chat.prepend("<p class='message'><span style='color:"+data.color+"'>"+data.nick+"</span>: "+data.msg+"</p>");
    });
  }

  render() {
    return (
      <div className='wrapper--big'>
        <div id="nickWrap">
          <p>Enter a Nickname</p>
          <p id='nickError'></p>
          <form action="" id='setNick'>
            <input type="text" id='nickname'/>
            <input type="submit" />
          </form>
        </div>
        <div className="contentWrap">
          <div className="chatWrap">
            <div id="chat">
              <div className="typeAct"></div>
            </div>
            <form id='send-message'>
              <textarea type="text" id='message'></textarea>
              <input type="submit" />
            </form>
          </div>
          <div id="users"></div>
        </div>
      </div>
    );
  }

}

export default ChatPage;
