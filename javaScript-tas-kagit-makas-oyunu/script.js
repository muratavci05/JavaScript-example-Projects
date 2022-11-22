function oyunuBaslat(secim){ 

//Kullanıcı seçimini değişkenlere aktar
let kullaniciSecimi=secim.id;
console.log("KULLANICI",kullaniciSecimi);

//Bilgisayar secimini degiskene aktar
let rastgeleSayi=Math.floor(Math.random()*3);
let bilgisayarSecimi=["tas","kagit","makas"][rastgeleSayi];

console.log("BİLGİSAYAR",bilgisayarSecimi);

//Puanlamaları dizi olarak değişkene aktarma
// *** Burada ki veri dizisi şeklinde yapılan object(nesne) tanımı JSON yapısına benzemetedir ***
let oyunPuanlamalari={
    "tas":{"makas":1,"tas":0.5,"kagit":0},
    "kagit":{"tas":1,"kagit":0.5,"makas":0},
    "makas":{"kagit":1,"makas":0.5,"tas":0}
};

//Diziden yaptığımız seçime karşılık gelen puanı alalım
let kullaniciPuani=oyunPuanlamalari[kullaniciSecimi][bilgisayarSecimi];
console.log("KULLANICI PUANI",kullaniciPuani);

//Kayıtlı tüm resimlerin kaynak adresleri
let kayitliResimler={
    "tas":document.getElementById("tas").src,
    "kagit":document.getElementById("kagit").src,
    "makas":document.getElementById("makas").src
};

//Sonucun boş bir ekranda çıkması için resimleri silelim (var olan secenekleri sildik)
document.getElementById("tas").remove();
document.getElementById("kagit").remove();
document.getElementById("makas").remove();

//Boş ekranda sonuçlar için yeni nesneler oluşturma
let kullaniciResmi=document.createElement("img");
let bilgisayarResmi=document.createElement("img");
let sonucMesaji=document.createElement("div");

//Resim nesnelerine seçimlere göre uygun kaynakların bağlanması
kullaniciResmi.src=kayitliResimler[kullaniciSecimi];
bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi];

//oluşturduğumuz nesneleri kapsayıcı altına  appent(monte) edelim
document.getElementById("container").appendChild(kullaniciResmi);
document.getElementById("container").appendChild(sonucMesaji);
document.getElementById("container").appendChild(bilgisayarResmi);


//Puana bakarak şart kontrolüyle sonucu yazdıralım
sonucMesaji.classList.remove("basarili","basarisiz","berabere");

if (kullaniciPuani===0){
    sonucMesaji.innerHTML="Maalesef Kaybettiniz :(";
    sonucMesaji.classList.add("basarisiz");
    sonucMesaji.style.color="red";
    sonucMesaji.style.fontSize="20px"
}
else if(kullaniciPuani===0.5){
    sonucMesaji.innerHTML="Sonuç Berabere !?";
    sonucMesaji.classList.add("berabere");
    sonucMesaji.style.color="blue";
    sonucMesaji.style.fontSize="20px"


}
else {
    sonucMesaji.innerHTML="Tebrikler Kazandınız :))";
    sonucMesaji.classList.add("basarili");
    sonucMesaji.style.color="green";
    sonucMesaji.style.fontSize="20px"



}


}