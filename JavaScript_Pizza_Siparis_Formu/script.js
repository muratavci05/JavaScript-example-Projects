// global oldukları için (iki fonksiyon yapısındada kullanıldı)
var list,options;
var i;

    //listelerden seçim yapılması olayını yakalayarak ilgili fonksiyonu çağırır
    document.addEventListener("change",pizzaCalculate);

//indirim kodu inputunun aktif pasif olma şartı(if yapısı) >>>
function toogle()
{
    list=document.getElementsByName("groupDiscount");
    for(i=0;i<list.length;i++)

    {  
         if(list[i].checked)

        {
            if(list[i].value=="Active")
            {
                document.getElementById("discountCode").disabled=false;

            }
            else if(list[i].value=="Passive")
            {
                document.getElementById("discountCode").disabled=true;
                document.getElementById("discountCode").value="";
                document.getElementById("verifyForm").innerHTML="";


            }
        }

    }

}

// <<<<

function pizzaCalculate()
{   
    //giriş ve çıkış verileri için değişkenler
    var pizzaPrice,entryCode,ingredients;
    //sabit indirim kodu tanımı
    const discountCode="PROMO";
    

   //pizza fiyatını boyut listesinin value undan alma
    list=document.getElementById("sizePizza");
    options=list[list.selectedIndex].value;
    pizzaPrice=Number(options);

    // ek malzeme seçimlerini alıp,fiyata +2 lira yansıtma
    list=document.getElementsByName("groupExtraIngredients");
    document.querySelectorAll("#addedIngredients option").forEach(option =>option.remove());


    for(i=0;i<list.length;i++)
    {
        if(list[i].checked)
        {
            pizzaPrice=pizzaPrice+2;
            ingredients=list[i].value;

            optionC=document.createElement("option");
            document.getElementById("addedIngredients").options.add(optionC);
            optionC.text=ingredients;
        }
    }

    //indirim kodunun doğrulanıp indirim tutarını fiyata yansıtma
    if(document.getElementById("codeTrue").checked)
{


    entryCode=document.getElementById("discountCode").value;
    if(discountCode==entryCode)
    {
        pizzaPrice=pizzaPrice-5;
    }
    else {
        
            document.getElementById("verifyForm").innerHTML="Lütfen Geçerli Bir Kod Giriniz";
    }
}   //sunucuya yazdırma
    document.getElementById("result").innerHTML="Ödenecek Tutar: "+pizzaPrice;
}