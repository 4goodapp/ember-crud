// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  
  // this route will be our collection of users
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
