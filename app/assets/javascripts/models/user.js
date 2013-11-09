// /models/user.js

App.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  bio: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  creationDate: DS.attr('date')
});

App.User.FIXTURES = [
  {
    id: 1,
    name: 'Julien Knebel',
    email: 'julienknebel@gmail.com',
    bio: 'Freelance web & print designer + front-end developer',
    avatarUrl: './assets/avatars/jk.jpg',
    creationDate: 'Fri Aug 09 2013 15:13:16 GMT+0200 (CEST)'
  }, 
  {
    id: 2,
    name: 'Sponge Bob',
    email: 'bob@sponge.com',
    bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
    avatarUrl: './assets/avatars/sb.jpg',
    creationDate: 'Fri Aug 07 2013 10:10:10 GMT+0200 (CEST)'
  },
  {
    id: 3,
    name: 'Dean Winchester',
    email: 'deany@plopmail.com',
    bio: ':)',
    avatarUrl: './assets/avatars/dean.jpg',
    creationDate: 'Mon Jan 30 2013 12:12:12 GMT+0200 (CEST)'
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john@doe.com',
    bio: 'Sed do eiusmod tempor velit esse cillum dolore eu fugiat pariatur.',
    avatarUrl: './assets/avatars/default.png',
    creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
  }
];
