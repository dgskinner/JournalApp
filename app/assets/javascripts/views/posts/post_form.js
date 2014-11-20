JournalApp.Views.PostForm = Backbone.View.extend({

  template: JST['post_form'],
  
  events: {
    "submit form.edit": "submit"
  },
  
  initialize: function(options){

  },
  
  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },
  
  submit: function (event) {
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
    var title = formData.post.title;
    var body = formData.post.body;
    var that = this;
    this.model.save({title: title, body: body}, {
      patch: true,
      success: function() {
        Backbone.history.navigate("/#", {trigger: true});
      },
      error: function() {
        that.render();
      }
    });
    
  }
  
});