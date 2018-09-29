import {
  DOM as $
} from "../../core/dom.js";

import {
  baseController
} from "../../core/baseController.js";

export class users extends baseController {

  constructor() {

    super();
    this.greeting = 'users!';
    this.moreText = 'Bacon ipsum...';
    this.counter = 0;


  }


  compositionComplete() {

    this.bind('username');
    let el = $.el("#header");
    let button = $.el(".my-button")[0];


    $.on(button, 'click', () => {
      this.$scope.username = "hello ghazi";
    });

    $.on(el, 'click', function () {
      alert("hello");
    });

  }


}