function krediHesapla()
{
    var cekilecekTutar,vadeSayisi;
    var aylikTaksit,odenecekToplamTutar;
    
    cekilecekTutar=document.getElementById("txtKrediTutari").value;
    
    var liste = document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;
    
    if (vadeSayisi ==12){
      odenecekToplamTutar=cekilecekTutar*1.1;
    }
    if (vadeSayisi ==24){
      odenecekToplamTutar=cekilecekTutar*1.2;
    }
    if (vadeSayisi ==36){
      odenecekToplamTutar=cekilecekTutar*1.3;
    }
    if (vadeSayisi ==48){
      odenecekToplamTutar=cekilecekTutar*1.4;
    }
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML ="Geri Odeme Toplamı: "+odenecekToplamTutar + "</br>"
     + "Aylık taksit tutarınız: " + aylikTaksit.toFixed(2);
}