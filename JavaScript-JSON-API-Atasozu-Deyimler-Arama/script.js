
/* fetch('https://sozluk.gov.tr/gts')
  .then(res => res.json())
  .then((json)=>{
    console.log(json);
  }); */


  // TR - Giriş ve çıkış için kullanacağımız HTML nesnelerini değişkenlere alalaım
  //EN - Let's take the HTML objects that we will use for input and output into variables.
  const result = document.getElementById("result");
  const searchBox = document.getElementById("searchBox");
  const searchList = document.getElementById("searchList");


  //JSON kayanğından aldığımız verileri sayfada tutmak için dizi değişkenleri oluşturallım
  const keyword = [];
  const proverbsIdioms = [];

  dataLoad();

  async function dataLoad(){
    const serverRes = await fetch("https://sozluk.gov.tr/atasozu");
    let dataAPI=await serverRes.json();
    console.log(dataAPI)

    dataAPI.forEach(item => {
        keyword.push(item.anahtar)
        proverbsIdioms.push(item.sozum);


    });
        console.log("<<<< KEYWORDS >>>",keyword)

        //mükerrer kelimeleirn süzülmesi için yapılan işlem
        const conjugatedWords=[...new Set(keyword)];
        console.log("<<< CONJUGATED WORDS >>>",conjugatedWords);

    
    conjugatedWords.sort(()=> Math.random() - 0.5); //otomatik çıkan sonuçların karışık gelmesi "sort ediyor"
    let counter = 0;  //sayac atama


    //"forEach" ile arama listesinde öneri listesi oluşturma...anahtar kelimeleri alma
    conjugatedWords.forEach(element =>{
        //öneri liste yığılması nedeni ile sayaçta öneri kısıtlaması yapıldı
        if(counter<5){
            const newPropasal=document.createElement("option");
            searchList.appendChild(newPropasal);
            newPropasal.value=element;
        }

        counter++;
        
    });
  }

  searchBox.addEventListener("input",(event) =>
    filterResult(event.target.value)
  );

  // Aranan anahtar kelimeyi filtrelemek 
  function filterResult(searchWord){
    result.innerHTML="";
    const searchCriteria = new RegExp(searchWord, "gi");
    let paired =proverbsIdioms.filter(say =>searchCriteria.test(say));

    //console.log("<<< PAIRED WORDS >>>",paired);

    // eşleşen kelimenin karakter uzunluğu 3 den büyük olursa filtrelemeye başlaması için oluşturulan if yapısı
            if(searchWord.length <3 ){
                paired =[]
            }


    //"forEach" ile eşleştirme yapılmış kelimelerin consoldan html ekranına aktarılması işlemi
    paired.forEach(es =>{
        const nextResult = document.createElement("li");
        result.appendChild(nextResult);
        nextResult.innerHTML=es;
    })
  }
