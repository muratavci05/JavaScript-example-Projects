    //Dizi tipinde parfüm bilgilerini saklayan değişkenler
    var erkekParfumleri=["Celvin Clein",1000,"Lacoste",1200,"Axe",300,"First Class",500];
    var kadinParfumleri=["Burbery",1500,"Avon",800,"She",600,"Nina Ricci",1300];

    //Girilen veriler için değişkenler
    var urunTipi,urunFiyati,urunAdedi,taksitSayisi;

    //Çıkan sonuçlar için değişkenler
    var araToplam,odenecekTutar,kargoUcreti=7;

    //Global döngü değişkeni
    var i;

    //Global option oluşturma değişkeni
    var secenek;

    //Global select nesnesini tutmak için liste değişkeni 
    var liste;

function taksit()
{
    //Taksit seçenekleri listesini doldurma
    for(i=0;i<=6;i=i+3)
    {
        var secenek=document.createElement("option");
        document.getElementById("urunTaksidi").options.add(secenek);
        secenek.text=i;
    }
}

function adet()
{
    //Ürün adedi listesini doldurma
    for(i=1;i<=10;i++)
    {
        var secenek=document.createElement("option");
        document.getElementById("urunAdedi").options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function listeDoldur()
{
    //Ürün listesini Erkek veya Kadın ürün tipi seçimine bağlı olarak doldurma fonksiyonu

    //Her doldurma işleminden önce listeyi temizleme
    document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

    //Ürün tipi seçimini Erkek(E) veya Kadın(K) olarak elde etme
    for(var i=0;i<document.getElementsByName("urunTipi").length;i++)
    {
        if(document.getElementsByName("urunTipi")[i].checked)
        {
            urunTipi=document.getElementsByName("urunTipi")[i].value;
        }
    }
    console.log(urunTipi);

    //Elde edilen ürün tipi seçimine göre ilgili diziden değerleri alıp getirme
    if(urunTipi=="E")
    {
        //erkek & kadin parfümleri değişkeni tanımlamasında görüldüğü üzere parfüm markalarına 1'er 1'er atlayarak değilde,
        //2'şer 2'şer atlayarak (arada 100-120 vs var)ulaşılıyor bu nedenle aşağıda i'2 şer 2'şer olarak atlayarak ulaşıyor
        for(i=0;i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            document.getElementById("urunListesi").options.add(secenek);
            secenek.text=erkekParfumleri[i];
            secenek.value=erkekParfumleri[i+1];
        }
    }
    else if(urunTipi=="K")
    {
        //erkek & kadin parfümleri değişkeni tanımlamasında görüldüğü üzere parfüm markalarına 1'er 1'er atlayarak değilde,
        //2'şer 2'şer atlayarak (arada 100-120 vs var)ulaşılıyor bu nedenle aşağıda i'2 şer 2'şer olarak atlayarak ulaşıyor
        for(i=0;i<kadinParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            document.getElementById("urunListesi").options.add(secenek);
            secenek.text=kadinParfumleri[i];
            secenek.value=kadinParfumleri[i+1];
        }
    }
}

function fiyatHesapla()
{

    //Ürün adedi seçimi alındı.
    liste=document.getElementById("urunAdedi");
    urunAdedi=liste.options[liste.selectedIndex].value;

    //Ürünün fiyatı alındı.
    liste=document.getElementById("urunListesi");
    urunFiyati=liste.options[liste.selectedIndex].value;

    //Taksit sayısı seçimi alındı.
    liste=document.getElementById("urunTaksidi");
    taksitSayisi=liste.options[liste.selectedIndex].value;

    //Ürün adedine göre birim fiyattan ara toplam hesaplandı
    araToplam=urunAdedi*urunFiyati;

    //Taksit seçimine göre vade farkları eklendi
    if(taksitSayisi==3)
    {
        araToplam=araToplam*1.1;
    }
    else if(taksitSayisi==6)
    {
        araToplam=araToplam*1.2;
    }

    //Vade farkı dahil ara toplam tutarı belirlenip yazdırıldı
    document.querySelector("#txtAraToplam").value=araToplam.toFixed(2);

    //Ara toplam tutarına göre kargo ücreti eklenip eklenmeyeceği belirlendi ve yazdırıldı
    if(araToplam>=100)
    {
        kargoUcreti=0;
        document.getElementById("txtKargo").value=kargoUcreti;
    }
    else 
    {
        kargoUcreti=7;
        document.getElementById("txtKargo").value=kargoUcreti;
    }

    //Kargo ve vade farkı dahil ödenecek tutar belirlenip yazdırıldı
    odenecekTutar=araToplam+kargoUcreti;
    document.getElementById("sonuc").innerHTML="Toplam tutar: "+odenecekTutar.toFixed(2);
}
