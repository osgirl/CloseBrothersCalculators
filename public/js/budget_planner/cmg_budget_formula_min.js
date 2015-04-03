/*
----------------Information--------------------------------

1.Budget Formula JS

2.All function in this file manage the formula of budget in page.

3.Version 1.0.0

4.Company - Claybourne McGregor Consulting Ltd 

5.Website : http://www.c-mg.com/

6.Author - Lan.Ta 

7.Date - 30-03-2015

*/


var Weekly_Type=1;var Fortnightly_Type=2;var Monthly_Type=3;var Yearly_Type=4;var Weekly_multiplicand=4.333333333;var Fortnightly_multiplicand=2.166666667;var Monthly_multiplicand=1;var Yearly_multiplicand=0.08333333333;function round(a){var c=parseFloat(a);c=Math.round(c);var b=new Number(c).toFixed(0);return b}function calculateInputBaseOnType(d,c){var b=0;if(c==Weekly_Type){var a=(d*Weekly_multiplicand);b=round(a)}else{if(c==Fortnightly_Type){var a=(d*Fortnightly_multiplicand);b=round(a)}else{if(c==Monthly_Type){b=Math.round(d)}else{if(c==Yearly_Type){var a=d*Yearly_multiplicand;b=round(a)}}}}return b}var totalsArray=new Array();function getTotalIncome(){var a=totalsArray.tab1;return a}function getTotalOutcome(){var a=0;for(var b=2;b<=getSizeArray();b++){a=a+totalsArray["tab"+b]}return a}function getPersent(b,c){var a=(c/b)*100;console.log("this persent not round"+a);if(a<1&a>0){a=1}a=round(a);console.log("this persent round"+a);console.log(a);return a}function getSizeArray(){var a=$(".row-heading").size();return a}function checkZero(){var a=false;for(var b=1;b<=getSizeArray();b++){if(totalsArray["tab"+b]==null){showPopUp=true;return showPopUp}}return a}function checkTotalOutcome(){var b=getTotalIncome();var a=getTotalOutcome();if(a>b){$("#myModal2").modal("show")}}function drawFlotJs(){var c=[];var b=getTotalIncome();var g=getTotalOutcome();if(b>g){var f=b-g;var l=ImageArray[1]+"||"+tabName.tab1+":£"+f;c[0]={label:l,data:getPersent(b,f),color:tabColor.tab1};var j=1;for(var d=2;d<=getSizeArray();d++){if(totalsArray["tab"+d]>0){var l=combineToToolTip(d);c[j]={label:l,data:getPersent(b,totalsArray["tab"+d]),color:tabColor["tab"+d]};j++}}drawChart(c);$(".labelChart").html('<span class="total">Total monthly disposable income</span> <p>£'+Number(f).toLocaleString("en").split(".")[0]+"</p>")}else{if(b==g){var j=0;for(var d=2;d<=getSizeArray();d++){if(totalsArray["tab"+d]>0){var l=combineToToolTip(d);c[j]={label:l,data:getPersent(b,totalsArray["tab"+d]),color:tabColor["tab"+d]}}j++}drawChart(c);$(".labelChart").html('<span class="total">Total monthly disposable income</span> <p>£ 0.00</p>')}else{if(b<g){if(checkOutcomeExceedTotalIncome()){for(var d=2;d<=getSizeArray();d++){var k=totalsArray["tab"+d];if(k>=b){var l=combineToToolTip(d);c[0]={label:l,data:100,color:tabColor["tab"+d]};break}}drawChart(c);var a=g-b;$(".labelChart").html('<span class="total">Total monthly disposable income</span> <p class="exceed">£ -'+Number(a).toLocaleString("en").split(".")[0]+"</p>")}else{c=getDataSpecialCase();var e=[];var h=c.length-1;for(var d=0;d<c.length;d++){e[h]=c[d];h--}console.log(e);drawChart(e);var a=g-b;$(".labelChart").html('<span class="total">Total monthly disposable income</span> <p class="exceed">£ -'+Number(a).toLocaleString("en").split(".")[0]+"</p>")}}}}}function getDataSpecialCase(){var d=getTotalIncome();var g=0;var h=0;for(var f=2;f<=getSizeArray();f++){h=f;var a=getPersent(d,totalsArray["tab"+f]);g=g+parseInt(a);if(g>100){break}}var e=[];var b=0;var k=100;for(var c=h;c>1;c--){var a=parseInt(getPersent(d,totalsArray["tab"+c]));if(k>a){var l=combineToToolTip(c);e[b]={label:l,data:a,color:tabColor["tab"+c]};k=k-a;b++}else{if(k==a){var l=combineToToolTip(c);e[b]={label:l,data:a,color:tabColor["tab"+c]};return e}else{if(k<a){var l=combineToToolTip(c);e[b]={label:l,data:k,color:tabColor["tab"+c]};return e}}}}}function combineToToolTip(a){var b=ImageArray[a]+"||"+tabName["tab"+a]+":£"+totalsArray["tab"+a];return b}function checkOutcomeExceedTotalIncome(){var a=totalsArray.tab1;for(var b=2;b<=getSizeArray();b++){var c=totalsArray["tab"+b];if(c>=a){return true}}return false};