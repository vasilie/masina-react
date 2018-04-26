const io = require('./index.js').io

var nicknames = [];

updateNicknames = () => {
  io.sockets.emit("usernames",nicknames);
}

module.exports = function(socket){
  console.log("Socket id "  + socket.id);
  socket.on("new user",function(data,callback){
  console.log("socket manager data" + data.nick);
  console.log(nicknames.indexOf(data.nick));
  console.log(nicknames);
    if (nicknames.findIndex(x => x.nickname==data.nick)!=-1){
      callback(false);
    } else {

      callback(true);

      socket.nickname = data.nick;
      socket.color = data.color;
      nicknames.push({nickname:socket.nickname,color:socket.color});
      updateNicknames();
    }
  });

  socket.on('send message', function(data){
    io.sockets.emit('new message',{msg:data,nick:socket.nickname,color:socket.color});
  });

  socket.on("disconnect",function(data){
    if(!socket.nickname){
      return;
    } else {
      console.log("=================");
      console.log("Socket nickname:" + socket.nickname);
      console.log("======Nicknames======");
      console.log(nicknames);
      nicknames.splice(nicknames.findIndex(x => x.nickname==socket.nickname),1);

      console.log("======SplicedNicknames======");
      console.log(nicknames);
      updateNicknames();
    }
  });

}
