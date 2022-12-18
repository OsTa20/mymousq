//  start dialog
let header = document.querySelector('header');
let dialog = document.getElementById('dialog');
let studdata = document.getElementById('studdata');
let naorpawr = document.getElementById('naorpawr');
let stuimg = document.getElementById('stuimg');
let stuname = document.getElementById('stuname');
let howpoint = document.getElementById('howpoint');
let entmypresent = document.getElementById('entmypresent');

let opcldi = false;
let stu_id;
let hpoint;
let stimg;
function fdialog(){
  if(opcldi == false){
    header.style = "height: 750px;";
    dialog.innerHTML = '><';
    opcldi = true;
  }
  else {
    header.style = "height: 110px;";
    dialog.innerHTML = '|||';
    opcldi = false;
  }
}
dialog.addEventListener('click',fdialog);
//  end dialog
//  start student data

 
//  end student data
//  start form
let divform = document.getElementById('form');
let usname_pa = document.getElementsByClassName('input');
let fop = document.getElementsByClassName('fop');
let sendbtn = document.getElementById('sendbtn');
let file = document.getElementById('file');
let sure = 0;
let uname;
let upass;

let show = document.getElementById('show');
let showvar = false;
function fshow(){
  if(showvar == false){
    usname_pa[1].type = 'text';
    showvar = true;
  }
  else {
    usname_pa[1].type = 'password';
    showvar = false;
  }
}
show.addEventListener('click',fshow);

// window.onload = function(){
//   if(window.localStorage['enter'] == false){
//     form.style.display = 'none';
//   }
//   else {
//     form.style.display = 'block';
//   }
// }
// window.localStorage['enter'] = false;

let studentpresent = [];
if (window.localStorage.id != undefined){
  form.style.display = 'none';
  studdata.style.display = 'block';
  
  stu_id = Number(window.localStorage.id);
  window.localStorage.point = studentpoint[stu_id -1]['point'];;
  hpoint = window.localStorage.point;
  stimg = window.localStorage.imgsrc;
        
  stuname.innerHTML = window.localStorage.name;
  howpoint.innerHTML = hpoint + "نقطة";
  stuimg.src = stimg;
        
  for(var k=datepresent.length-1; k>-1; k--){
    var fadiv = document.createElement('div');
    fadiv.classList.add('days');
    var bospan = document.createElement('span');
    bospan.classList.add('daysspan');
          
    fadiv.textContent = datepresent[k][0];
    alert(stu_id +' '+ datepresent[k][1]);
    if(datepresent[k][1].indexOf(stu_id) == -1){
      bospan.classList.add('stexit');
      bospan.textContent = "حاضر";
    }
    else {
      bospan.classList.add('stntexit');
      bospan.textContent = "غائب";
    }
    fadiv.appendChild(bospan);
    entmypresent.appendChild(fadiv);
  }
}
let usexit  = false;
function fsendbtn(){
  for(let i=0; i<2; i++){
    if(usname_pa[i].value != ''){
      fop[i].style.display = 'none';
      sure++;
    }
    else {
      fop[i].style.display = 'block';
    }
  }
  if(sure == 2){
    uname = usname_pa[0].value;
    upass = usname_pa[1].value;
    for(let i=0; i<studentdata.length; i++){
      if((uname == studentdata[i]['name']) && (upass == studentdata[i]['password'])){
        divform.style = "top: -100%;display: none;";
        studdata.style = 'display: block;';
        usexit = true;
        stu_id = studentdata[i]['id'];
        window.localStorage.id = stu_id;
        hpoint = studentpoint[i]['point'];
        window.localStorage.point = hpoint;
        stimg = studentdata[i]['imgsrc'];
        window.localStorage.imgsrc = stimg;
        
        stuname.innerHTML = uname;
        window.localStorage.name = uname;
        howpoint.innerHTML = hpoint + "نقطة";
        stuimg.src = stimg;
          
        // window.localStorage['enter'] = true;
        
        //alert(window.localStorage['enter']);
        for(var k=datepresent.length-1; k>-1; k--){
          var fadiv = document.createElement('div');
          fadiv.classList.add('days');
          var bospan = document.createElement('span');
          bospan.classList.add('daysspan');
          
          fadiv.textContent = datepresent[k][0];
  
          if(datepresent[k][1].indexOf(stu_id) == -1){
            bospan.classList.add('stexit');
            bospan.textContent = "حاضر";
          }
          else {
            bospan.classList.add('stntexit');
            bospan.textContent = "غائب";
          }
          fadiv.appendChild(bospan);
          entmypresent.appendChild(fadiv);
        }
      }
    }
    if(usexit == false){
      naorpawr.style = 'color: red;';
      naorpawr.innerHTML = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
  }
  sure = 0;
}
sendbtn.addEventListener('click',fsendbtn);
//  end form