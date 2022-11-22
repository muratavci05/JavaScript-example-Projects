//Girilen veriler için değişkenler
var urunTipi,urunSecimi,urunSayisi,urunTaksidi;

//Çıkan sonuçlar için değişkenler
var araToplam,odenecekToplamTutar,kargoUcreti=7;

//Döngü değişkeni
var i;

//nesne(option) değişkenleri
var liste,secenek;

//Dizi tipinde parfüm bilgilerini saklayan değişkenler
var erkekParfumleri=["Celvin Clein",1000,"Lacoste",1200,"Axe",300,"First Class",500];
var kadinParfumleri=["Burbery",1500,"Avon",800,"She",600,"Nina Ricci",1300];

function urunAdediDoldur()
{
    //Ürün adedi listesini doldurma
    for(i=1;i<=10;i++)
    {
        secenek=document.createElement("option");
        liste=document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function urunTaksidiDoldur()
{
    for(i=0;i<=12;i=i+3)
    {
        secenek=document.createElement("option");
        liste=document.getElementById("urunTaksidi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function urunleriGetir()
{
    //Ürün listesini Erkek veya Kadın ürün tipi seçimine bağlı olarak doldurma fonksiyonu

    //Her doldurma işleminden önce listeyi temizleme
    document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

    liste=document.getElementsByName("urunTipi");
    for(i=0;i<liste.length;i++)
    {
        if(liste[i].checked)
        {
            urunTipi=liste[i].value;
        }
    }
    console.log(urunTipi);


    //Elde edilen ürün tipi seçimine göre ilgili diziden değerleri alıp getirme
    if(urunTipi=="E")
    {
        for(i=0;i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=erkekParfumleri[i];
            secenek.value=erkekParfumleri[i+1];
        }
    }
    else if(urunTipi=="K")
    {
        for(i=0;i<kadinParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=kadinParfumleri[i];
            secenek.value=kadinParfumleri[i+1];
        }
    }
}

function Hesapla()
{
    //Ürünün listesi alındı.
    liste=document.getElementById("urunListesi");
    urunSecimi=liste[liste.selectedIndex].value;
    console.log(urunSecimi);

    //Ürün adedi seçimi alındı.
    liste=document.getElementById("urunAdedi");
    urunAdedi=liste[liste.selectedIndex].value;
    console.log(urunAdedi);
    
    //Taksit sayısı seçimi alındı.
    liste=document.getElementById("urunTaksidi");
    urunTaksidi=liste[liste.selectedIndex].value;
    console.log(urunTaksidi);

    //Ürün adedine göre birim fiyattan ara toplam hesaplandı
    araToplam=urunSecimi*urunAdedi;
    

    //Taksit seçimine göre vade farkları eklendi
    if(urunTaksidi==3)
    {
        araToplam=araToplam*1.1;
    }
    else if(urunTaksidi==6)
    {
        araToplam=araToplam*1.2;
    }
    else if(urunTaksidi==9)
    {
        araToplam=araToplam*1.3;
    }
    else if(urunTaksidi==12)
    {
        araToplam=araToplam*1.4;
    }

    console.log(araToplam.toFixed(2));
    //Vade farkı dahil ara toplam tutarı belirlenip yazdırıldı
    document.getElementById("txtAraToplam").value=araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value=urunSecimi;


    if(araToplam<100)
    {
        document.getElementById("txtKargo").value=kargoUcreti;
        odenecekTutar=araToplam+kargoUcreti;
    }

    //Ara toplam tutarına göre kargo ücreti eklenip eklenmeyeceği belirlendi ve yazdırıldı
    else if(araToplam>=100)
    {
        document.getElementById("txtKargo").value=0;
        odenecekTutar=araToplam;
    }
    //Kargo ve vade farkı dahil ödenecek tutar belirlenip yazdırıldı
    console.log(odenecekTutar);
    document.getElementById("sonuc").innerHTML="Ödemeniz gereken toplam tutarı(Vade farkı ve kargo dahil): "+odenecekTutar;


}
