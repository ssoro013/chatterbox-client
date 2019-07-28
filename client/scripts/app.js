var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      //gets information from the server
      //examine the response from the server request:
      //data.results is the array of all messages
      //use MessageView.renderMessage function to append each message to the chats
      console.log(data);
      var messages = data.results;
      // console.log(messages)
      for (var i=messages.length - 1; i>=0; i--){
        MessagesView.renderMessage(messages[i])
      }
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
