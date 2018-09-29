export class DOM {


  static el(selector) {
    if (selector.includes("#"))
      return document.getElementById(selector.substr(1));

    return document.querySelectorAll(selector);
  }

  static on(el, eventName, eventHandler) {
    el.addEventListener(eventName, eventHandler);
  }

}