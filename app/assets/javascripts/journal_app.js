window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.posts = new JournalApp.Collections.Posts();
    var router = new JournalApp.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
