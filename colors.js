var Links = {
  setColor: function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i< alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $("a").css("color", color);
  },
};

var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night mode") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day mode";

    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night mode";

    Links.setColor("black");
  }
}

// function nightDayHandler(self) {
//   var target = document.querySelector("body");
//   if (self.value === "night mode") {
//     target.style.backgroundColor = "black";
//     target.style.color = "white";
//     self.value = "day mode";
//     var alist = document.querySelectorAll("a");
//     var i = 0;
//     while (i < alist.length) {
//       alist[i].style.color = "yellow";
//       i = i + 1;
//     }
//   } else {
//     target.style.backgroundColor = "white";
//     target.style.color = "black";
//     self.value = "night mode";
//     var alist = document.querySelectorAll("a");
//     var i = 0;
//     while (i < alist.length) {
//       alist[i].style.color = "blue";
//       i = i + 1;
//     }
//   }
// }
