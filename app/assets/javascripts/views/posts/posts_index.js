JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],
  
  initialize: function(options){
    this.listenTo(this.collection, "add change:title remove reset sync", this.render);
  },
  
  render: function(){
    // var that = this;
    // this.collection.fetch({
      // success: function(){

    var content = this.template({posts: this.collection});
    this.$el.html(content);
      // }
    // });
    return this;
    
  },
  
  events: {
    "click button.delete" : "deletePost"
  },
  
  deletePost: function(event){
    var $button = $(event.target);
    var postId = $button.data("id");
    var post = this.collection.get(postId);
    post.destroy();
  }
});
