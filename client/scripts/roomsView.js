var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomname) {
    //adds a new room to the dropdown list select with id #rooms class
    var templateRoom = _.template(
      "<option><%= roomname %></option>"
    );
    var html = templateRoom(roomname);
    this.$button.on("click", function(){
      this.$select.append(html);
    })
  }
};
