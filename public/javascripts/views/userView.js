var app = app || {};
var active = active || {};

app.loginView = Backbone.View.extend({
  el: $('#login-content'),
  initialize: function() {
    active.userCollection = new app.userCollection();
    active.userCollection.fetch();
    console.log(active.userCollection);
    console.log("SearchList instaniated");
    this.render();
  },
  events: {
    "click #login-btn" : "login"
  },
  render: function() {
    var template = document.getElementById('login-template').innerHTML;
    console.log(template);
    var compiledTemplate = _.template(template);
    this.el.innerHTML = template;
  },
  login: function() {
    var data = {
      username: document.getElementById('login-username').value,
      password: document.getElementById('login-password').value
    };
    var name = active.userCollection.get("username");
    console.log(name);
    if (name == data.username) {
      var pass = active.userCollection.get("password");
      console.log(pass);
      if (pass == data.password) {
        console.log(name + "\n" + pass);
        // active.collection = new app.searchCollection();
      }
    }
    // console.log(data);
    // passport.authenticate("local", { failureRedirect: "/" }), function(req, res) {
    //   this.el.innerHTML = "";
    //   active.collection = new app.searchCollection();
    // };
  }
});

// app.ModelView = Backbone.View.extend({
//   initialize: function() {
//     console.log("We have instantiated our model view.");
//     this.render();
//   },
//   render: function() {
//     // var data = this.model.attributes;
//     console.log("Rendering ModelView");
//     var data = this.model.attributes;
//     console.log("Grabbing template");
//     var template = document.getElementById('location-template').innerHTML;
//     console.log("Transforming template");
//     var compiledTemplate = _.template(template);
//     console.log("Creating HTML from template and model data...");
//     var html = compiledTemplate(data);
//     this.el.innerHTML = this.el.innerHTML + html;
//   }
// });
//
