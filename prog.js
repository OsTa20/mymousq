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
//  start form
let divform = document.getElementById('form');
let divform2 = document.getElementById('form2');
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

let newaccount = document.getElementById('newaccount');
function fnewaccount(){
  divform2.style.display = 'none';
  divform.style = "top: 0;display: block;";
}
newaccount.addEventListener('click', fnewaccount);

let singout = document.getElementById('singout');
function fsingout(){
  var confirmvar = confirm("هل أنت متأكد من تبديل الحساب");
  if(confirmvar == true){
    studdata.style.display = 'none';
    divform2.style.display = 'block';
    document.location.reload();
  }
}
singout.addEventListener('click', fsingout);

let usersid = [];
let usersimgsrc = [];
let usersname = [];
let usersname2 = [];

if (window.localStorage.length != 0){
  divform.style.display = 'none';
  studdata.style.display = 'none';
  divform2.style.display = 'block';
  
  usersid = window.localStorage.usersid.split(',');
  // userspoint = window.localStorage.userspoint.split(',');
  usersimgsrc = window.localStorage.usersimgsrc.split(',');
  usersname = window.localStorage.usersname.split(',');
  
  for(var n=0; n<usersid.length; n++){
    var divusers = document.createElement('div');
    divusers.classList.add('users');
    var divusersimg = document.createElement('img');
    divusers.classList.add('users_img');
    var divusersspan = document.createElement('span');
    divusers.classList.add('users_name');
    
    divusersimg.src = usersimgsrc[n];
    divusersspan.textContent = usersname[n];
    
    divusers.appendChild(divusersimg);
    divusers.appendChild(divusersspan);
    divform2.insertBefore(divusers,divform2.children[2]);
    
    divusers.addEventListener('click', function(){
      fdivusers(this.lastChild.textContent);
    });
  }
  
  function fdivusers(namevar){
    divform2.style.display = 'none';
    studdata.style.display = 'block';
    for(let i=0; i<studentdata.length; i++){
      if(namevar == studentdata[i]['name']){
        
        stu_id = studentdata[i]['id'];
        hpoint = studentpoint[i]['point'];
        stimg = studentdata[i]['imgsrc'];
        
        howpoint.innerHTML = hpoint + "نقطة";
        stuimg.src = stimg;
        stuname.innerHTML = namevar;
        
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
        divform.style = "top: -100%;";
        studdata.style = 'display: block;';
        var divformtime = setTimeout(function(){
          divform.style = "display: none;";
          clearTimeout(divformtime);
        },1000);
        usexit = true;
        
        stu_id = studentdata[i]['id'];
        hpoint = studentpoint[i]['point'];
        stimg = studentdata[i]['imgsrc'];
        
        if(window.localStorage.length == 0){
          usersid.push(stu_id);
          window.localStorage.usersid = usersid;
          
          usersimgsrc.push(stimg);
          window.localStorage.usersimgsrc = usersimgsrc;
          
          usersname.push(uname);
          window.localStorage.usersname = usersname;
        }
        else {
          usersname = window.localStorage.usersname.split(',');
          if(usersname.indexOf(uname) == -1){
            usersid = window.localStorage.usersid.split(',');
            usersid.push(stu_id);
            window.localStorage.usersid = usersid;
          
            usersimgsrc = window.localStorage.usersimgsrc.split(',');
            usersimgsrc.push(stimg);
            window.localStorage.usersimgsrc = usersimgsrc;
            
            usersname = window.localStorage.usersname.split(',');
            usersname.push(uname);
            window.localStorage.usersname = usersname;
          }
        }
        
        howpoint.innerHTML = hpoint + "نقطة";
        stuimg.src = stimg;
        stuname.innerHTML = uname;
          
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
  for(let v=0; v<2; v++){
    usname_pa[v].value = ''
  }
}
sendbtn.addEventListener('click',fsendbtn);
//  end form
