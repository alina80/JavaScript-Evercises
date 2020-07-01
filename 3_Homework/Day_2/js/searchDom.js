
// Exercise 1

  var element = document.getElementById('menu');
  console.log(element);
  var getDataInfo = function (el) {
      var dataArray = [];
      var elementLis = el.querySelectorAll('li[data-info]');
      for (var i = 0; i < elementLis.length; i++){
          dataArray.push(elementLis[i].dataset.info);
      }
      return dataArray;
  }

  console.log(getDataInfo(element));

// Exercise 2

  var element2 = document.getElementById('main-contener');
  var getElementClass = function (el) {
       var classArray = [];
       var classes = el.classList;
       classes.forEach(function (elem) {
           classArray.push(elem);
       });
       return classArray;
  }
  console.log(getElementClass(element2));

// Exercise 3

  var element3 = document.querySelector('.pink-color');
  var getElementText = function (elem) {
      return elem.innerText;
  }
  console.log(getElementText(element3));

// Exercise 4

  var elements4 = document.querySelectorAll('.images');
  var getElementAlt = function (elem) {
      var altArray = [];
      elem.forEach(function (el) {
          altArray.push(el.getAttribute('alt'));
      });
      return altArray;
  }
  console.log(getElementAlt(elements4));

// Exercise 5

  var elements5 = document.querySelectorAll('.my-link');
  var getElementHref = function (elem) {
      var hrefArray = [];
      elem.forEach(function (el) {
          hrefArray.push(el.getAttribute('href'));
      });
      return hrefArray;
  }
  console.log(getElementHref(elements5));