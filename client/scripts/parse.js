var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,//windom.CAMPUS comes from client/env/config.js which is sfo

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    //
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post messages', error);
      }
    })
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};