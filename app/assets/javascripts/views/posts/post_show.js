JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],
  
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);

  },
  
  render: function(){
    // var that = this;
    // this.model.fetch({
      // success: function(){
        var content = this.template({post: this.model});
        this.$el.html(content);
    //       }
    // });
    return this;
  },
  
});