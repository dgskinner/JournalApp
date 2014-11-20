JournalApp.Routers.Router = Backbone.Router.extend({
  
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "index",
    "posts/:id/edit": "edit",
    "posts/:id": "show"
    
  },
  
  index: function(){
    // this.posts = new JournalApp.Collections.Posts;
    // var indexView = new JournalApp.Views.PostsIndex({collection: this.posts});
    JournalApp.posts.fetch();
    var indexView = new JournalApp.Views.PostsIndex({collection: JournalApp.posts});
    this.$rootEl.html(indexView.render().$el);
    
  },
  
  show: function(id){
    var post = JournalApp.posts.getOrFetch(id);
    var showView = new JournalApp.Views.PostShow({ model: post });
    this.$rootEl.html(showView.render().$el);
  },
  
  edit: function(id){
    var post = JournalApp.posts.getOrFetch(id);
    var postFormView = new JournalApp.Views.PostForm({model: post});
    this.$rootEl.html(postFormView.render().$el);
  } 
  
});
