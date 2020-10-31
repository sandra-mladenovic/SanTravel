jQuery(document).ready(function() { 

	
	 var nizSlike=['assets/slike/plaza.jpg','assets/slike/moskva2.jpg','assets/slike/plavoMore.jpg'];
	 
	 function promeniSliku(){
		 for(var i = 0; i<nizSlike.length; i++){
			 (function(ind){
				 setTimeout(function(){
					 $("#slike").css('background-image', "url('" + nizSlike[ind] + "')");
			 }, 4000*ind)})(i);
			 
		 }
	}

	promeniSliku()
	setInterval(function(){
	promeniSliku()},3000*nizSlike.length);

	//validacija e-mail-a na index stanici
	
	
	 
	//skrol
	
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 300) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });

	
	
	
	//putovanja
	$('#dodatnoMilano').hide();
	$('#tasterMilano').click(function(e){
       e.preventDefault();

       if($('#dodatnoMilano').is(':visible')){
           $('#dodatnoMilano').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoMilano').slideDown();
           $(this).val('Sakrij');
       }
   });
   
   //dodatno istanbul
   $('#dodatnoIstanbul').hide();
   $('#tasterIstanbul').click(function(e){
       e.preventDefault();

       if($('#dodatnoIstanbul').is(':visible')){
           $('#dodatnoIstanbul').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoIstanbul').slideDown();
           $(this).val('Sakrij');
       }
   });
   
   //bec
   $('#dodatnoBec').hide();
    $('#tasterBec').click(function(e){
       e.preventDefault();

       if($('#dodatnoBec').is(':visible')){
           $('#dodatnoBec').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoBec').slideDown();
           $(this).val('Sakrij');
       }
   });
   
  
   //barselona
    $('#dodatnoBarselona').hide();
    $('#tasterBarselona').click(function(e){
       e.preventDefault();

       if($('#dodatnoBarselona').is(':visible')){
           $('#dodatnoBarselona').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoBarselona').slideDown();
           $(this).val('Sakrij');
       }
   });
   //hurgada
    $('#dodatnoHurgada').hide();
    $('#tasterHurgada').click(function(e){
       e.preventDefault();

       if($('#dodatnoHurgada').is(':visible')){
           $('#dodatnoHurgada').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoHurgada').slideDown();
           $(this).val('Sakrij');
       }
   });
   //krakov
   
    $('#dodatnoKrakov').hide();
    $('#tasterKrakov').click(function(e){
       e.preventDefault();

       if($('#dodatnoKrakov').is(':visible')){
           $('#dodatnoKrakov').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoKrakov').slideDown();
           $(this).val('Sakrij');
       }
   });
   
   //atina
    $('#dodatnoAtina').hide();
    $('#tasterAtina').click(function(e){
       e.preventDefault();

       if($('#dodatnoAtina').is(':visible')){
           $('#dodatnoAtina').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoAtina').slideDown();
           $(this).val('Sakrij');
       }
   });
   
   //prag
   $('#dodatnoPrag').hide();
    $('#tasterPrag').click(function(e){
       e.preventDefault();

       if($('#dodatnoPrag').is(':visible')){
           $('#dodatnoPrag').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoPrag').slideDown();
           $(this).val('Sakrij');
       }
   });
   //lisabon
   $('#dodatnoLisabon').hide();
    $('#tasterLisabon').click(function(e){
       e.preventDefault();

       if($('#dodatnoLisabon').is(':visible')){
           $('#dodatnoLisabon').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoLisabon').slideDown();
           $(this).val('Sakrij');
       }
   });
   //malta
   $('#dodatnoMalta').hide();
    $('#tasterMalta').click(function(e){
       e.preventDefault();

       if($('#dodatnoMalta').is(':visible')){
           $('#dodatnoMalta').slideUp();
           $(this).val('Pročitaj više');
       } else {
           $('#dodatnoMalta').slideDown();
           $(this).val('Sakrij');
       }
   });
   
   
   
   
   
});
	
//navigacija
window.addEventListener("load", popuniNavigaciju);	
function popuniNavigaciju(){
	var nav, ispis, putanja;

	nav = ["Početna", "Putovanja", "O nama", "Kontakt"];
	putanja=["index.html", "putovanja.html", "oNama.html", "kontakt.html"];
	ispis = "<ul>";

	for(var i = 0; i < nav.length; i++){
		ispis += "<li><a href='" + putanja[i] + "'>" + nav[i] +  "</a></li>";
	}
	ispis += "</ul>";
	document.getElementById("navigacija").innerHTML = ispis;
}
	


/* DINAMICKE blok sa putovanjima*/
window.addEventListener("load", popuniAktuelneGradove);
window.addEventListener("load", popuniGradoveZaNovuGodinu);

function popuniAktuelneGradove(){
	var gradovi, ispis;

	gradovi = ["Barselona", "Krakov", "Prag", "Hurgada", "Malta"];
	cene = ["od 79&euro;", "od 180&euro;", "od 79&euro;", "od 689&euro;", "od 479&euro;"];

	ispis = "<ul id='podMeni'>";
	ispis +="<li><a href='putovanja.html' class ='aPutovanja'>Aktuelna putovanja </a></li>";

	for(var i = 0; i < gradovi.length; i++){
		ispis += "<li><a href='putovanja.html#" + gradovi[i] + "'>" + gradovi[i] + "<p id='cene'>"+ cene[i] + "</p></a></li>";
	}
	ispis += "</ul>";
	if(document.getElementById("listaAktuelno") != null)
	document.getElementById("listaAktuelno").innerHTML = ispis;
}


function popuniGradoveZaNovuGodinu(){
	var gradovi, ispis;

	gradovi = ["Milano", "Istanbul", "Beč", "Atina", "Lisabon"];
	cene = [" od 79&euro;", " od 180&euro;", " od 79&euro;", " od 189&euro;",  " od 279&euro;"];
	
	ispis = "<ul id='podMeni'>";
	ispis +="<li><a href='putovanja.html' class ='aPutovanja'>Doček Nove Godine</a></li>";

	for(var i = 0; i < gradovi.length; i++){
		ispis += "<li><a href='putovanja.html#" + gradovi[i] + "'>" + gradovi[i] + "<p id='cene'>"+ cene[i] + "</p></a></li>";
	}
	ispis += "</ul>";
	if(document.getElementById("listaNovaG") != null)
	document.getElementById("listaNovaG").innerHTML = ispis;
	
}

//O nama - galerija

window.addEventListener("load", popuniSlajder);

function popuniSlajder(){
	var putanja, slike, ispis;
	ispis="";
	putanja = "assets/slike/";
	slike=["jezero.jpg", "azurnaObala.jpg", "italija.jpg"];

	
	for( var i = 0; i<slike.length; i++){
		ispis+= "<img class='dinSlike' src='" + putanja + slike[i] + "'/>";
	}
	if(document.getElementById("slajderSaSlikama") != null)
	document.getElementById("slajderSaSlikama").innerHTML=ispis;
}
window.addEventListener("load", popuniDane);

function popuniDane(){
	var dan, ispis;
	
	dan=[];
	ispis="<select id='izDan'></select>";
	ispis+="<option value ='0'>Dan</option>";
	
	for(var i = 1; i<=31; i++){
		ispis+="<option value='" + i + "'>" + i + "</option>";
	}
	ispis+="</select>";
	if(document.getElementById("dan") != null)
	document.getElementById("dan").innerHTML=ispis;
}
window.addEventListener("load", popuniMesec);

function popuniMesec(){
	var mesec, ispis;
	
	mesec=["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
	ispis="<select id='izM'></select>";
	ispis+="<option value ='0'>Mesec</option>";
	
	for(var i = 0; i<mesec.length; i++){
		ispis+="<option value='" + mesec[i] + "'>" + mesec[i] + "</option>";
	}
	ispis+="</select>";
	if(document.getElementById("mesec") != null)
	document.getElementById("mesec").innerHTML=ispis;
}

window.addEventListener("load", popuniGodinu);

function popuniGodinu(){
	var godina, ispis;
	
	godina=[];
	ispis="<select id='izG'></select>";
	ispis+="<option value ='0'>Godina</option>";
	
	for(var i = 1980; i<=2018; i++){
		ispis+="<option value='" +i + "'>" + i + "</option>";
	}
	ispis+="</select>";
	if(document.getElementById("godina") != null)
	document.getElementById("godina").innerHTML=ispis;
}

//provera
if(document.getElementById("dugmeK") != null)
window.document.getElementById("dugmeK").addEventListener("click", function(){
	
	var validno = true;
	var podaci = [];
	
	 var ime = document.querySelector("#ime").value.trim();
     var email = document.querySelector("#email").value;
	 var poruka=document.getElementById("poruka").value;
	 
	  var imeGreska = document.querySelector("#greskaIme");
      var emailGreska = document.querySelector("#greskaEmail");
	  var porukaGreska=document.querySelector("#greskaPoruka");
	  
	  var reIme = /^[A-Z][a-z]{2,11}$/;
	  var reEmail=/^[a-z]+\.[a-z]+\.([1-9][0-9]{0,3})\.(1[0-8])\@gmail\.com\$/;
	  
	   // ime == "Pera" 
        if(ime == "") {
           imeGreska.innerHTML = "Polje za ime je obavezno."; 
           validno = false;  
        } else if(!reIme.test(ime)) {
            imeGreska.innerHTML = "Podatak za ime nije u ispravnom formatu.";
            validno = false;
        } else {
            podaci.push(ime);
            imeGreska.innerHTML = "";   
        }
		
		if(email == "") {
           emailGreska.innerHTML = "Polje za e-mail je obavezno."; 
           validno = false;  
        } else if(!reEmail.test(email)) {
            emailGreska.innerHTML = "Podatak za e-mail nije u ispravnom formatu.";
            validno = false;
        } else {
            podaci.push(email);
            emailGreska.innerHTML = "";   
        }
		
		if(poruka == "") {
           porukaGreska.innerHTML = "Polje za poruku ne može da bude prazno."; 
           validno = false;  
        } else {
            podaci.push(poruka);
            porukaGreska.innerHTML = "";   
        }
});

if(document.getElementById("tbPosalji") != null)
window.document.getElementById("tbPosalji").addEventListener("click", function(){
	
	var emailIndex = document.querySelector("#tbEmail").value;
	var emailIndexGreska = document.querySelector("#emailIndexGreska");
	var reEmail=/^[a-z]+\.[a-z]+\.([1-9][0-9]{0,3})\.(1[0-8])\@gmail\.com\$/;

	 if(!reEmail.test(emailIndex)) {
            emailIndexGreska.innerHTML = "<p>E-mail adresa nije u ispravnom formatu.</p>";

        } else if(emailIndex=="") {
            emailIndexGreska.innerHTML = "";   
        }
	
});





































