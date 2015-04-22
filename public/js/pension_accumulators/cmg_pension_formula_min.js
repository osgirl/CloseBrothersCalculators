function parseFloatCMG(a){if(a==""||typeof a=="underfined"){return 0}else{return parseFloat(a)}}function getYearToRetirement(){var b=$("#age-to-retirement").slider().slider("value");var a=$("#txt-current-age").val();var c=b-a;return parseInt(c)}function getTax_free_Percent(){var b=$("#percent-tax-free").slider().slider("value");var a=b/100;a=parseFloat(a);return a}function getDefer_compound(){var d=$("#txt-deffered-pensions").val();if(d==""||d=="underfined"){d=0}d=parseFloatCMG(d);var c=getInterestOnPot();var a=getYearToRetirement();var b=d*Math.pow((1+c/1),a);b=parseFloat(b);return round(b)}function getCurrent_compound(){var d=$("#txt-current-pensions").val();if(d==""||typeof d=="undefined"){d=0}d=parseFloatCMG($("#txt-current-pensions").val());var c=getInterestOnPot();var a=getYearToRetirement();var b=d*Math.pow((1+c/1),a);b=parseFloatCMG(b);return round(b)}function getCash_Contribute(){var c=parseFloatCMG($("#txt-current-salary").val());var a=parseFloatCMG($("#txt-you-paying-percent").val());var b=((a*c)/12)/100;b=parseFloatCMG(b);return round(b)}function getPercent_Contribute(){var c=parseFloatCMG($("#txt-current-salary").val());var b=parseFloatCMG($("#txt-you-paying").val());var a=(b/c)*12;a=parseFloatCMG(a);return a}function getCash_Contribute_company(){var c=parseFloatCMG($("#txt-current-salary").val());var b=parseFloatCMG($("#txt-your-employer-percent").val());var a=((b*c)/12)/100;a=parseFloatCMG(a);return round(a)}function getPercent_Contribute_company(){var c=parseFloatCMG($("#txt-current-salary").val());var b=parseFloatCMG($("#txt-your-employer").val());var a=(b/c)*12;a=parseFloatCMG(a);return a}function getRisk_selection(){var a=growthRate[$("input:radio[name='an-grow-percent']:checked").val()];return parseFloatCMG(a)}function getTax_Free_Value(){var b=parseFloatCMG(getRetirementPot());var a=getTax_free_Percent();var d=parseFloatCMG(b*a);var c=parseFloatCMG(LTA*(25/100));if(d<=c){return round(d)}else{return round(c)}}function yourRetirementDate(){var a=getYearToRetirement();var e=new Date();var c=e.getFullYear();var b=parseInt(c)+parseInt(a);b=parseFloatCMG(b);return round(b)}function getInterestOnPot(){var a=getRisk_selection()/100;a=parseFloatCMG(a);return a}function getRetirementPot(){var g=getDefer_compound();var h=getCurrent_compound();var f=getCash_Contribute();var a=getCash_Contribute_company();var l=getYearToRetirement();var e=getInterestOnPot();var b=parseFloatCMG($("#oneOffLumpSum").val());var d=(parseFloatCMG(f)+parseFloatCMG(a))*12;var k=parseFloatCMG(e)+1;var j=parseInt(l+1);var c=Math.pow(k,j);c=(c-1)/parseFloatCMG(e);var i=d*c-d+b+parseFloatCMG(h)+parseFloatCMG(g);i=parseFloatCMG(i);return round(i)}function getPotMinus_taxFreeCash(){var c=parseFloatCMG(getRetirementPot());var b=parseFloatCMG(getTax_Free_Value());var a=c-b;a=parseFloatCMG(a);return round(a)}function getAnnuity_rate(){var c=getGender();var a=$("#age-to-retirement").slider().slider("value");if(c==male){var b=annuityMale[a];b=parseFloatCMG(b);return round(b)}else{if(c==female){var b=annuityFemale[a];b=parseFloatCMG(b);return round(b)}}}function getAnnuity_income(){var a=getPotMinus_taxFreeCash();var c=getAnnuity_rate();var b=(a/100000)*c;b=parseFloatCMG(b);return round(b)}function getFinalSalaryScheme(){var a=parseFloatCMG($("#txt-income-payable").val());a=round(a);return parseFloatCMG(a)}function getForecastIncome(){var b=parseFloatCMG(getAnnuity_income());var c=getFinalSalaryScheme();var a=b+c;a=parseFloatCMG(a);return round(a)}function getForecast_percent_target(){var b=getForecastIncome();var c=parseFloatCMG($("#txt-target-pensions-result").val());var a=b/c;return parseFloatCMG(a)}function getShortFall(){var b=getForecastIncome();var c=parseFloatCMG($("#txt-target-pensions-result").val());var a=c-b;return parseFloatCMG(a)}function getCoinBlue(c,a){if(parseFloatCMG(c)>=parseFloatCMG(a)){d=totalCoin}else{var b=(c/a)*100;var d=round(b);d=d/coinPercent}d=parseInt(d);if(d==0){d=1}console.log("coin blue "+d);return d}function getCoinRed(b){if(b>=totalCoin){return 0}var a=totalCoin-b;return a}function round(a){var c=parseFloat(a);c=Math.round(c);var b=new Number(c).toFixed(0);return b}function fixed(a){var b=new Number(a).toFixed(1);return b};