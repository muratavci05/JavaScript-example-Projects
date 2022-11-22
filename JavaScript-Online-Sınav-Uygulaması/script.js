let sunucudanDonen;

var baglanti = new XMLHttpRequest();
  baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen=JSON.parse(baglanti.responseText);
        soruGetir();
    }
  };
  baglanti.open("GET", "db.json", true);
  baglanti.send();

  const sonucAlani=document.getElementsByClassName("soruAlani")[0];
  const soru=document.getElementById("soru");
  const secenekler=document.getElementsByName("secenek");

  const aciklamaA=document.getElementById("aciklamaA");
  const aciklamaB=document.getElementById("aciklamaB");
  const aciklamaC=document.getElementById("aciklamaC");
  const aciklamaD=document.getElementById("aciklamaD");

  const gonderButtonu=document.getElementById("gonder")

  let puan=0;
  let sira=0;



  function soruGetir(){
    secimiTemizle();
    console.log(sunucudanDonen);

    let siradakiSoru=sunucudanDonen.sorular[sira];

    soru.innerHTML=siradakiSoru.soru;
    aciklamaA.innerText=siradakiSoru.secenekA;
    aciklamaB.innerText=siradakiSoru.secenekB;
    aciklamaC.innerText=siradakiSoru.secenekC;
    aciklamaD.innerText=siradakiSoru.secenekD;



  }

  function secimiTemizle(){
    secenekler.forEach(secenek=>secenek.checked=false);
  }

  function secimiAl(){
    let secim;

    secenekler.forEach(secenek => {
        if (secenek.checked==true)
        {
            secim=secenek.id;
        }
        
    })
    return secim;
  }

  gonderButtonu.addEventListener("click",()=>{
    const secilen=secimiAl();
    console.log(secilen);

    if(secilen){
        if(secilen === sunucudanDonen.sorular[sira].cevap){
            puan++;
        }
    }

    sira++;

    if(sira < sunucudanDonen.sorular.length)
    {
        soruGetir();
    }
    else{
        sonucAlani.innerHTML=
        `
            <h2> Mevcut Sorular İçerisinden ${puan}/${sunucudanDonen.sorular.length} oranında başarı sağladınız</h2>
        `

        gonderButtonu.setAttribute("onclick","location.reload()");
        gonderButtonu.innerHTML=("Yeniden Başla");
    }

  })



