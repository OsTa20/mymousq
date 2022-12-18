//  start mypoint
let mypoint = document.getElementById('mypoint');
let entmypoint = document.getElementById('entmypoint');
let gobackbtn = document.getElementsByClassName('gobackbtn');

function fmypodiv(){
  studdata.style.display = 'none';
  entmypoint.style.display = 'block';
  // alert(stu_id +' '+ hpoint+' '+stimg + ' '+uname);
}
mypoint.addEventListener('click',fmypodiv);

function fgobackbtn0(){
  entmypoint.style.display = 'none';
  studdata.style.display = 'block';
}
gobackbtn[0].addEventListener('click',fgobackbtn0);
//  end mypodiv
//  start mypresent
let mypresent = document.getElementById('mypresent');

function fmypresent(){
  studdata.style.display = 'none';
  entmypresent.style.display = 'block';
}
mypresent.addEventListener('click',fmypresent);

function fgobackbtn1(){
  entmypresent.style.display = 'none';
  studdata.style.display = 'block';
}
gobackbtn[1].addEventListener('click',fgobackbtn1);
//  end mypresent
//  start myactivat
let myactiv = document.getElementById('myactiv');
let entmyactiv = document.getElementById('entmyactiv');

function fmyactiv(){
  studdata.style.display = 'none';
  entmyactiv.style.display = 'block';
}
myactiv.addEventListener('click',fmyactiv);

function fgobackbtn2(){
  entmyactiv.style.display = 'none';
  studdata.style.display = 'block';
}
gobackbtn[2].addEventListener('click',fgobackbtn2);
//  end myactivat
//  start mycomp
let mycomp = document.getElementById('mycomp');
let entmycomp = document.getElementById('entmycomp');

function fmycomp(){
  studdata.style.display = 'none';
  entmycomp.style.display = 'block';
}
mycomp.addEventListener('click',fmycomp);

function fgobackbtn3(){
  entmycomp.style.display = 'none';
  studdata.style.display = 'block';
}
gobackbtn[3].addEventListener('click',fgobackbtn3);
//  end mycomp