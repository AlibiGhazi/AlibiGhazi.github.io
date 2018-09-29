import {
  route,
  route2
} from "./core/router.js";

import {
  users
} from "./app/viewmodel/users.js";


route('/', 'home', function () {});
route('/page1', 'template1', function () {
  this.greeting = 'Hello world!';
  this.moreText = 'Bacon ipsum...';
  this.counter = 0;

});



route2('/users', users);





route('*', 'error404', function () {});