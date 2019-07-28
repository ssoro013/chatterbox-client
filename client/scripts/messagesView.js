var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //template function
    //initialize one time
    //use jquery's load
      //load data from the server to and place the returned html into the matched dom
      // this.$chats.load(`http://parse.sfo.hackreactor.com/chatterbox/classes/messages`)
  },

  renderMessage: function(message) {
    //message is an object with properties username, text, roomname
    //render is a function that adds messages to the index.html node div with id="chats"
    //this function essentially appends message to #chats node

    //in template, use <%- instead of <%= to avoid hackers :)

    message.roomname = message.roomname || null;
    message.text = message.text || null;
    message.username = message.username || null;
    var templateMessage=_.template(
      "<div class='chat' id='<%- roomname %>'>"+
        "<div class='username'><%- username %>:</div>"+
        "<div ><%- text %></div>"+
        "<div><%- roomname %></div>"+
      "</div"
    );
    var html = templateMessage(message);
    this.$chats.prepend(html);
  }

};