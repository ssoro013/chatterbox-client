var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //template function
    //initialize one time
    //use jquery's load
      //load data from the server to and place the returned html into the matched dom
      this.$chats.load(`http://parse.sfo.hackreactor.com/chatterbox/classes/messages`)
  },

  renderMessage: function(message) {
    //message is an object with properties username, text, roomname
    //render is a function that adds messages to the index.html node div with id="chats"
    //this function essentially appends message to #chats node
    console.log(message);
    var templateMessage=_.template(
      "<div>"+
        "<div><%= message.username %></div>"+
        "<div><%= message.text %></div>"+
        "<div><%= message.roomname %></div>"+
      "</div"
    );
    var html = templateMessage(message);
    this.$chats.append(html);
  }

};