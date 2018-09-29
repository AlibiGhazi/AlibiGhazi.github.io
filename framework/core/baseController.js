export class baseController {





  constructor() {
    this.$scope = {};
    window.$scope = this.$scope;
    this.bindClasses = [];
  }

  bind(name) {
    this.bindClasses.push(name);
    this.attachEvent(this.bindClasses);

  }

  attachEvent(classNames) {
    var self = this;
    classNames.forEach(function (className) {
      let elements = document.getElementsByClassName(className);
      console.log(elements);

      for (var index in elements) {
        if (isNaN(index))
          break;
        elements[index].onkeyup = function () {
          for (var index in elements) {
            if (isNaN(index))
              break;
            elements[index].value = this.value;
          }
        }
      }
      Object.defineProperty(self.$scope, className, {
        set: function (newValue) {
          for (var index in elements) {
            if (isNaN(index))
              break;
            elements[index].value = newValue;
          }
        }
      });
    });
  };



}