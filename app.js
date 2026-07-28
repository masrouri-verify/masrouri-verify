const coins = {

"MSR-1405-BRJ-FB-000001":{
type:"تمام سکه بانکی",
karat:"900",
weight:"8.133 گرم",
status:"معتبر",
brand:"بورس سکه مسروری",
date:"1405/01/01",
image:"assets/coins/full-bank.webp"
},

"MSR-1405-BRJ-HB-000001":{
type:"نیم سکه بانکی",
karat:"900",
weight:"4.066 گرم",
status:"معتبر",
brand:"بورس سکه مسروری",
date:"1405/01/01",
image:"assets/coins/half-bank.webp"
},

"MSR-1405-BRJ-QB-000001":{
type:"ربع سکه بانکی",
karat:"900",
weight:"2.033 گرم",
status:"معتبر",
brand:"بورس سکه مسروری",
date:"1405/01/01",
image:"assets/coins/quarter-bank.webp"
},

"MSR-1405-BRJ-FN-000001":{
type:"تمام سکه عادی",
karat:"900",
weight:"8.133 گرم",
status:"معتبر",
brand:"بورس سکه مسروری",
date:"1405/01/01",
image:"assets/coins/full-normal.webp"
},

"MSR-1405-BRJ-HN-000001":{
type:"نیم سکه عادی",
karat:"900",
weight:"4.066 گرم",
status:"معتبر",
brand:"بورس سکه مسروری",
date:"1405/01/01",
image:"assets/coins/half-normal.webp"
},

"MSR-1405-BRJ-QN-000001":{
type:"ربع سکه عادی",
karat:"900",
weight:"2.033 گرم",
status:"معتبر",
brand:"بورس سکه مسروری",
date:"1405/01/01",
image:"assets/coins/quarter-normal.webp"
}

};function checkCoin(){

const serial =
document.getElementById("codeInput").value.trim();

const result =
document.getElementById("result");

if(coins[serial]){

const coin=coins[serial];

result.innerHTML=`

<div class="result-card">

<img
class="coin-image"
src="${coin.image}"
alt="${coin.type}"
>

<h3>✅ اصالت کالا تأیید شد</h3>

<div class="item">
<b>شماره سریال:</b>
${serial}
</div>

<div class="item">
<b>نوع سکه:</b>
${coin.type}
</div>

<div class="item">
<b>وزن:</b>
${coin.weight}
</div>

<div class="item">
<b>عیار:</b>
${coin.karat}
</div>

<div class="item">
<b>وضعیت:</b>
${coin.status}
</div>

<div class="item">
<b>برند:</b>
${coin.brand}
</div>

<div class="item">
<b>تاریخ ثبت:</b>
${coin.date}
</div>

</div>

`;

}else{

result.innerHTML=`

<div class="result-card">

<h3 style="color:#ff4d4d;">
❌ شماره سریال یافت نشد
</h3>

<div class="item">
این شماره در سامانه اصالت بورس سکه مس
