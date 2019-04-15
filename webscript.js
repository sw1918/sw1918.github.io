n = document.getElementById('name').offsetWidth;
h = document.getElementById('home').offsetWidth;
p = document.getElementById('proj').offsetWidth;
t = document.getElementById('teach').offsetWidth;
c = document.getElementById('cv').offsetWidth;
d = document.getElementById('drop').offsetWidth;

//Width of name and dropdown button
w0 = n + d;
//Width of name, dropdown, and teaching
w1 = w0 + t;
//Width of name, teaching, project, and dropdown
w2 = w1 + p;
//Width of name, teaching, project, and cv
w3 = w2 + c - d;

reloc();
window.addEventListener("resize", reloc);

function reloc() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  //debug
  //document.getElementById('debug0').innerHTML = w3;
  //document.getElementById('debug1').innerHTML = x;

  if (x > w3 + 150) {
    document.getElementById('cv').style.display = 'block';
    document.getElementById('drop').style.display = 'none';
    document.getElementById('proj').style.display = 'block';
    document.getElementById('teach').style.display = 'block';
    document.getElementById('home').style.display = 'block';
  }

  if (x <= w3 + 150 && x > w2 + 50) {
    document.getElementById('cv').style.display = 'none';
    document.getElementById('drop').style.display = 'block';
    document.getElementById('proj').style.display = 'block';
    document.getElementById('teach').style.display = 'block';
    document.getElementById('home').style.display = 'block';

    document.getElementById('homed').style.display = 'none';
    document.getElementById('teachd').style.display = 'none';
    document.getElementById('projd').style.display = 'none';

    if (document.getElementById('cv').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#42464d"; 
    }
    if (document.getElementById('proj').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#36393f"; 
    }

  }
  
  if (x <= w2 + 150 && x > w1 + 50) {
    document.getElementById('cv').style.display = 'none';
    document.getElementById('drop').style.display = 'block';
    document.getElementById('proj').style.display = 'none';
    document.getElementById('teach').style.display = 'block';
    document.getElementById('home').style.display = 'block';

    document.getElementById('homed').style.display = 'none';
    document.getElementById('teachd').style.display = 'none';
    document.getElementById('projd').style.display = 'block';

    if (document.getElementById('proj').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#42464d"; 
    }
    if (document.getElementById('teach').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#36393f"; 
    }
  }

    if (x <= w1 + 150 && x > w0 + 50) {
    document.getElementById('cv').style.display = 'none';
    document.getElementById('drop').style.display = 'block';
    document.getElementById('proj').style.display = 'none';
    document.getElementById('teach').style.display = 'none';
    document.getElementById('home').style.display = 'block';

    document.getElementById('homed').style.display = 'none';
    document.getElementById('teachd').style.display = 'block';
    document.getElementById('projd').style.display = 'block';

    if (document.getElementById('teach').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#42464d"; 
    }
    if (document.getElementById('home').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#36393f"; 
    }
  }

    if (x <= w0 + 150) {
    document.getElementById('cv').style.display = 'none';
    document.getElementById('drop').style.display = 'block';
    document.getElementById('proj').style.display = 'none';
    document.getElementById('teach').style.display = 'none';
    document.getElementById('home').style.display = 'none';

    document.getElementById('homed').style.display = 'block';
    document.getElementById('teachd').style.display = 'block';
    document.getElementById('projd').style.display = 'block';

    if (document.getElementById('home').className == "current") {
      document.getElementById('btn').style.backgroundColor = "#42464d"; 
    }
  }

}

