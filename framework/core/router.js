import {
  tmpl
} from "./templateEngine.js";

let routes = {};
let el = null;



// The route registering function:
function route(path, templateId, controller) {
  routes[path] = {
    templateId: templateId,
    controller: controller
  };
}

function router() {
  // Lazy load view element:
  el = el || document.getElementById('view');
  // Current route url (getting rid of '#' in hash as well):
  var url = location.hash.slice(1) || '/';
  // Get route by url:
  var route = routes[url];
  // Do we have both a view and a route?
  if (el && route.controller) {
    // Render route template with John Resig's template engine:
    let ctrl = new route.controller();
    el.innerHTML = tmpl(route.templateId, ctrl);
    if (typeof ctrl.compositionComplete === 'function') {


      ctrl.compositionComplete();

    }


  }
}


// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);




function route2(path, vm) {
  var l = "/framework/app/view/" + path.replace(/\//g, '') + ".html";
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'text/html');

  fetch(l, {
      method: 'get',
      headers: myHeaders
    })
    .then(function (data) {
      return data.text();
    }).then(function (txt) {
      console.log(txt);
      var dd = txt;
      route(path, dd, vm);
    });
}
export {
  route,
  route2
};