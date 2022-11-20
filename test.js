function randomnum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

var sub0 = [];
for(var i = 0; i< 17; i++){
  sub0.push(randomnum(500,540)
);
}

var sub = [];
for(var i = 0; i< 17; i++){
  sub.push(randomnum(68,71)
);
}

var sub1 = [];
for(var i = 0; i< 17; i++){
  sub1.push(randomnum(6,8)
);
}

var sub2 = [];
for(var i = 0; i< 17; i++){
  sub2.push(randomnum(23,25)
);
}

var a5 = [];
for(var i = 0; i< 17; i++){
  a5.push(randomnum(500,540)
);
}

var b5 = [];
for(var i = 0; i< 17; i++){
  b5.push(randomnum(68,71)
);
}

var c5 = [];
for(var i = 0; i< 17; i++){
  c5.push(randomnum(6,8)
);
}

var d5 = [];
for(var i = 0; i< 17; i++){
  d5.push(randomnum(23,25)
);
}

var e = [];
for(var i = 0; i< 17; i++){
  e.push(randomnum(500,540)
);
}

var f = [];
for(var i = 0; i< 17; i++){
  f.push(randomnum(68,71)
);
}

var g = [];
for(var i = 0; i< 17; i++){
  g.push(randomnum(6,8)
);
}

var h = [];
for(var i = 0; i< 17; i++){
  h.push(randomnum(23,25)
);
}

var p = [];
for(var i = 0; i< 17; i++){
  p.push(randomnum(500,540)
);
}

var j = [];
for(var i = 0; i< 17; i++){
  j.push(randomnum(68,71)
);
}

var k = [];
for(var i = 0; i< 17; i++){
  k.push(randomnum(6,8)
);
}

var m = [];
for(var i = 0; i< 17; i++){
  m.push(randomnum(23,25)
);
}





// 4/f button
{
let co24 = document.getElementById('co24');
co24.addEventListener('click', () => {
  var a = document.querySelectorAll('.forth > .used')
  var element = document.querySelectorAll('.forth > .used > .floor4data')
  if (element.length == 0) {
    for(var i = 0; i<a.length; i++){
      var data = document.createElement("div");
      data.appendChild(document.createTextNode(sub0[i]));
      data.className = 'floor4data';
      a[i].appendChild(data);
  }
  } else {
    for(var i = 0; i<a.length; i++){
      element[i].textContent = sub0[i];
  }}

}
)

var humidity4 = document.getElementById('humidity4');
humidity4.addEventListener('click', () => {
  var a = document.querySelectorAll('.forth > .used')
  var element = document.querySelectorAll('.forth > .used > .floor4data')
  if (element.length == 0) {
    for(var i = 0; i<a.length; i++){
      var data = document.createElement("div");
      data.appendChild(document.createTextNode(sub[i]));
      data.className = 'floor4data';
      a[i].appendChild(data);

  }
  } else {
    for(var i = 0; i<a.length; i++){
      element[i].textContent = sub[i];

  }}

})

var light4 = document.getElementById('light4');
light4.addEventListener('click', () => {
  var a = document.querySelectorAll('.forth > .used')
  var element = document.querySelectorAll('.forth > .used > .floor4data')
  if (element.length == 0) {
    for(var i = 0; i<a.length; i++){
      var data = document.createElement("div");
      data.appendChild(document.createTextNode(sub1[i]));
      data.className = 'floor4data';
      a[i].appendChild(data);

  }
  } else {
    for(var i = 0; i<a.length; i++){
      element[i].textContent = sub1[i];

  }}

})

var temperature4 = document.getElementById('temperature4');
temperature4.addEventListener('click', () => {
  var a = document.querySelectorAll('.forth > .used')
  var element = document.querySelectorAll('.forth > .used > .floor4data')
  if (element.length == 0) {
    for(var i = 0; i<a.length; i++){
      var data = document.createElement("div");
      data.appendChild(document.createTextNode(sub2[i]));
      data.className = 'floor4data';
      a[i].appendChild(data);

  }
  } else {
    for(var i = 0; i<a.length; i++){
      element[i].textContent = sub2[i];

  }}

})
}

// 5/f button
{
  let co25 = document.getElementById('co25');
  co25.addEventListener('click', () => {
    var a = document.querySelectorAll('.fifth > .used')
    var element = document.querySelectorAll('.fifth > .used > .floor5data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(a5[i]));
        data.className = 'floor5data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = a5[i];
    }}
  
  })
  
  var humidity5 = document.getElementById('humidity5');
  humidity5.addEventListener('click', () => {
    var a = document.querySelectorAll('.fifth > .used')
    var element = document.querySelectorAll('.fifth > .used > .floor5data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(b5[i]));
        data.className = 'floor5data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = b5[i];
    }}
  
  })
  
  var light5 = document.getElementById('light5');
  light5.addEventListener('click', () => {
    var a = document.querySelectorAll('.fifth > .used')
    var element = document.querySelectorAll('.fifth > .used > .floor5data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(c5[i]));
        data.className = 'floor5data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = c5[i];
    }}
  
  })
  
  var temperature5 = document.getElementById('temperature5');
  temperature5.addEventListener('click', () => {
    var a = document.querySelectorAll('.fifth > .used')
    var element = document.querySelectorAll('.fifth > .used > .floor5data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(d5[i]));
        data.className = 'floor5data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = d5[i];
    }}
  
  })
  }

// 6/f button
{
  let co26 = document.getElementById('co26');
  co26.addEventListener('click', () => {
    var a = document.querySelectorAll('.sixth > .used')
    var element = document.querySelectorAll('.sixth > .used > .floor6data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(e[i]));
        data.className = 'floor6data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = e[i];
    }}
  
  })
  
  var humidity6 = document.getElementById('humidity6');
  humidity6.addEventListener('click', () => {
    var a = document.querySelectorAll('.sixth > .used')
    var element = document.querySelectorAll('.sixth > .used > .floor6data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(f[i]));
        data.className = 'floor6data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = f[i];
    }}
  
  })
  
  var light6 = document.getElementById('light6');
  light6.addEventListener('click', () => {
    var a = document.querySelectorAll('.sixth > .used')
    var element = document.querySelectorAll('.sixth > .used > .floor6data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(g[i]));
        data.className = 'floor6data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = g[i];
    }}
  
  })
  
  var temperature6 = document.getElementById('temperature6');
  temperature6.addEventListener('click', () => {
    var a = document.querySelectorAll('.sixth > .used')
    var element = document.querySelectorAll('.sixth > .used > .floor6data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(h[i]));
        data.className = 'floor6data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = h[i];
    }}
  
  })
  }

// 7/f button
{
  let co27 = document.getElementById('co27');
  co27.addEventListener('click', () => {
    var a = document.querySelectorAll('.seventh > .used')
    var element = document.querySelectorAll('.seventh > .used > .floor7data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(p[i]));
        data.className = 'floor7data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = p[i];
    }}
  
  })
  
  var humidity7 = document.getElementById('humidity7');
  humidity7.addEventListener('click', () => {
    var a = document.querySelectorAll('.seventh > .used')
    var element = document.querySelectorAll('.seventh > .used > .floor7data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(j[i]));
        data.className = 'floor7data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = j[i];
    }}
  
  })
  
  var light7 = document.getElementById('light7');
  light7.addEventListener('click', () => {
    var a = document.querySelectorAll('.seventh > .used')
    var element = document.querySelectorAll('.seventh > .used > .floor7data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(k[i]));
        data.className = 'floor7data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = k[i];
    }}
  
  })
  
  var temperature7 = document.getElementById('temperature7');
  temperature7.addEventListener('click', () => {
    var a = document.querySelectorAll('.seventh > .used')
    var element = document.querySelectorAll('.seventh > .used > .floor7data')
    if (element.length == 0) {
      for(var i = 0; i<a.length; i++){
        var data = document.createElement("div");
        data.appendChild(document.createTextNode(m[i]));
        data.className = 'floor7data';
        a[i].appendChild(data);
    }
    } else {
      for(var i = 0; i<a.length; i++){
        element[i].textContent = m[i];
    }}
  
  })
  }


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var slidernum = document.getElementById("myRange").value
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider5.oninput = function() {
  output5.innerHTML = this.value;
}

var slider6 = document.getElementById("myRange6");
var output6 = document.getElementById("demo6");
output6.innerHTML = slider6.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider6.oninput = function() {
  output6.innerHTML = this.value;
}

var slider7 = document.getElementById("myRange7");
var output7 = document.getElementById("demo7");
output7.innerHTML = slider7.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider7.oninput = function() {
  output7.innerHTML = this.value;
}





