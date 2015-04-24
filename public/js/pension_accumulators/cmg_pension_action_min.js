function registerAction(){registerHoverAction();registerActionAboutYou();registerActionSavingTab();registerActionResultTab();registerActionSummaryTab()}function registerHoverAction(){$(document).on("mouseover",".icon-tooltip",function(){var d=$(this).attr("information-message");var e=InformationArray[d];$("#infor-tooltip").html(e);var b=$("#content-tooltip").height();var g=$(this).offset().top-$(window).scrollTop();var c=$("#content-tooltip").css("background-image");var h=c.indexOf("480");if(h==-1){var f=$(this).offset().left;var a=g-172;$("#content-tooltip").css({position:"fixed",top:a,left:f+$(this).width()})}else{var f=$(this).offset().left;var a=g-76;$("#content-tooltip").css({position:"fixed",top:a,left:f+$(this).width()})}$("#content-tooltip").show()});$("#content-tooltip").hover(function(){$("#content-tooltip").show()},function(){$("#content-tooltip").hide()});$(document).on("mouseout",".icon-tooltip",function(){$("#content-tooltip").hide()})}function isNumberKey(b){var a=(b.which)?b.which:event.keyCode;if(a!=46&&a>31&&(a<48||a>57)){return false}return true}function registerActionAboutYou(){$(".text-about-you").on("input",function(){var a=checkDataAboutYou();if(a.length==0){eneableTabSavings()}else{disableTabSavings()}});$("input:radio[name=optradio]").change(function(){var a=checkDataAboutYou();if(a.length==0){eneableTabSavings()}else{disableTabSavings()}});$("#nextAboutYou").click(function(){var a=checkDataAboutYou();if(a.length==0){eneableTabSavings();$("#savings").trigger("click")}else{var c=a[0];if(c=="retireAge-smaller-than-currentAge"){content=warningArray["retireAge-smaller-than-currentAge"];disableTabSavings();showWarning(content)}else{content=warningArray["validate-field"]+" "+a[0];for(var b=1;b<a.length;b++){content=content+","+a[b]}disableTabSavings();showWarning(content+"!")}}});$("#savings").click(function(){var a=checkDataAboutYou();if(a.length>0){var c=a[0];if(c=="retireAge-smaller-than-currentAge"){content=warningArray["retireAge-smaller-than-currentAge"];disableTabSavings();showWarning(content)}else{content=warningArray["validate-field"]+" "+a[0];for(var b=1;b<a.length;b++){content=content+","+a[b]}disableTabSavings();showWarning(content+"!")}return false}})}function eneableTabSavings(){$("#savings").attr("href","#tab2");$("#savings").attr("data-toggle","tab")}function disableTabSavings(){$("#savings").removeAttr("href");$("#savings").removeAttr("data-toggle")}function getGender(){if($("input:radio[name=optradio]").is(":checked")){var a=$("input:radio[name=optradio]:checked").val();return a}return 0}function checkDataAboutYou(){var d=new Array();var e=$("#txt-current-age").val();if(e==""||typeof e==="undefined"||e===null){d.push("current age")}var b=getGender();if(b==0){d.push("gender")}var c=$("#txt-current-salary").val();if(c==""||c==0){d.push("current salary")}var a=$("#txt-target-pensions").val();if(a==""&a==0){d.push("target income")}var f=$(".retirementAge").slider().slider("value");if(parseInt(f)<parseInt(e)){d.push("retireAge-smaller-than-currentAge")}return d}function eneableTabResult(){$("#results").attr("href","#tab3");$("#results").attr("data-toggle","tab")}function disableTabResult(){$("#results").removeAttr("href");$("#results").removeAttr("data-toggle")}function checkDataSaving(){var d=$("#txt-deffered-pensions").val();if(d.length>0){return true}var c=$("#txt-current-pensions").val();if(c.length>0){return true}var a=$("#txt-you-paying").val();if(a.length>0){return true}var b=$("#txt-your-employer").val();if(b.length>0){return true}return false}function registerActionSavingTab(){$("#results").click(function(){var a=checkDataSaving();if(a!=true){var b=warningArray["enter-at-least-once-field"];showWarning(b);return false}});$("input:radio[name=company-pension]").change(function(){var a=$(this).attr("id");if(a=="yes"){$(".final-salary").show()}else{$("#txt-income-payable").val(0);$(".final-salary").hide()}});$(".text-savings").on("input",function(){var a=checkDataSaving();if(a==true){}else{disableTabResult()}});$("#nextSavings").click(function(){if(isBox1Visible()){var a=checkDataSaving();if(a==true){eneableTabResult();hiddenBox1()}else{disableTabResult();var c=warningArray["enter-at-least-once-field"];showWarning(c)}}else{if(isBox2Visible()){if(isIncomeVisible()){var b=$("#txt-income-payable").val();if(b==0){var c=warningArray["income-able"];showWarning(c)}else{$("#results").trigger("click")}}else{$("#results").trigger("click")}}}});$("#backSavings").click(function(){if(isBox1Visible()){$("#about-you").trigger("click")}else{if(isBox2Visible()){hiddenBox2()}}});calculatePersonalPay();calculateCompanyPay()}function hiddenBox1(){$(".box-monney-purchase").hide();$(".box-defined-benefits").show()}function hiddenBox2(){$(".box-monney-purchase").show();$(".box-defined-benefits").hide()}function isBox1Visible(){if($(".box-monney-purchase").is(":visible")){return true}else{return false}}function isBox2Visible(){if($(".box-defined-benefits").is(":visible")){return true}else{return false}}function isIncomeVisible(){if($("#txt-income-payable").is(":visible")){return true}else{return false}}function calculatePersonalPay(){$("#txt-you-paying").on("input",function(){var a=$("#txt-you-paying-percent").val();a=getPercent_Contribute();a=a*100;$("#txt-you-paying-percent").val(fixed(a))});$("#txt-you-paying-percent").on("input",function(){var a=$("#txt-you-paying").val();a=round(getCash_Contribute());$("#txt-you-paying").val(a)})}function calculateCompanyPay(){$("#txt-your-employer").on("input",function(){var a=$("#txt-your-employer-percent").val();a=getPercent_Contribute_company();a=a*100;$("#txt-your-employer-percent").val(fixed(a))});$("#txt-your-employer-percent").on("input",function(){var a=$("#txt-your-employer").val();a=round(getCash_Contribute_company());$("#txt-your-employer").val(a)})}function registerActionResultTab(){$('a[id="results"]').on("shown.bs.tab",function(a){eneabledSummary();setTextToTextField();drawChart();setupSlide();onChange()});$("#nextResult").on("click",function(){$("#summary").trigger("click")});$("#backResult").on("click",function(){$("#savings").trigger("click")})}function eneabledSummary(){$("#summary").attr("href","#tab4");$("#summary").attr("data-toggle","tab")}function setupMessage(){var b=yourRetirementDate();$("#year-retire").html(b);var c=$("#age-to-retirement").slider().slider("value");$("#age-retire").html(c);var a=Number(getForecastIncome()).toLocaleString("en").split(".")[0];$("#pound-per-year").html(a)}function setupSlide(){var b=$("#age-to-retirement").slider().slider("value");$("#age-to-retirement-result").slider().slider("value",b);var a=$("#percent-tax-free").slider().slider("value");$("#percent-tax-free-result").slider().slider("value",a)}function setTextToTextField(){var b=round(getCash_Contribute());var d=getPercent_Contribute()*100;$("#txt-you-paying-result").val(b);$("#txt-you-paying-percent-result").val(fixed(d));var e=round(getCash_Contribute_company());var c=getPercent_Contribute_company()*100;$("#txt-your-employer-result").val(e);$("#txt-your-employer-percent-result").val(fixed(c));var a=$("#txt-target-pensions").val();$("#txt-target-pensions-result").val(a)}function disableTxtField(){$("#txt-your-employer-percent-result").attr("disabled","disabled");$("#txt-your-employer-result").attr("disabled","disabled");$("#txt-you-paying-percent-result").attr("disabled","disabled");$("#txt-you-paying-result").attr("disabled","disabled");$("#txt-target-pensions-result").attr("disabled","disabled");$("#oneOffLumpSum").attr("disabled","disabled");$("#print-data").attr("disabled","disabled");$("#nextResult").attr("disabled","disabled");$("#backResult").attr("disabled","disabled");$("#btn-advanced").attr("disabled","disabled")}function eneabledTxtField(){$("#txt-your-employer-percent-result").removeAttr("disabled");$("#txt-your-employer-result").removeAttr("disabled");$("#txt-you-paying-percent-result").removeAttr("disabled");$("#txt-you-paying-result").removeAttr("disabled");$("#txt-target-pensions-result").removeAttr("disabled");$("#oneOffLumpSum").removeAttr("disabled");$("#print-data").removeAttr("disabled");$("#nextResult").removeAttr("disabled");$("#backResult").removeAttr("disabled");$("#btn-advanced").removeAttr("disabled")}function onChange(){$("#txt-your-employer-percent-result").on("change",function(){$("#txt-your-employer-percent").val(fixed($(this).val()));var a=$("#txt-your-employer-result").val();a=round(getCash_Contribute_company());$("#txt-your-employer").val(a);$("#txt-your-employer-result").val(a);drawChart()});$("#txt-your-employer-result").on("change",function(){$("#txt-your-employer").val(fixed($(this).val()));var a=$("#txt-your-employer-percent-result").val();a=getPercent_Contribute_company();a=a*100;$("#txt-your-employer-percent-result").val(fixed(a));$("#txt-your-employer-percent").val(fixed(a));drawChart()});$("#txt-you-paying-percent-result").on("change",function(){$("#txt-you-paying-percent").val(fixed($(this).val()));var a=$("#txt-you-paying-result").val();a=round(getCash_Contribute());$("#txt-you-paying").val(a);$("#txt-you-paying-result").val(a);drawChart()});$("#txt-you-paying-result").on("change",function(){$("#txt-you-paying").val(fixed($(this).val()));var a=$("#txt-you-paying-percent-result").val();a=getPercent_Contribute();a=a*100;$("#txt-you-paying-percent").val(fixed(a));$("#txt-you-paying-percent-result").val(fixed(a));drawChart()});$("#txt-target-pensions-result").on("change",function(){$("#txt-target-pensions").val($(this).val());drawChart()});$("#oneOffLumpSum").on("change",function(){drawChart()});$("input:radio[name='an-grow-percent']").on("change",function(){drawChart();$("#estimated-annual-modal").modal("hide")})}function drawChart(){var d=getForecastIncome();var b=$("#txt-target-pensions").val();showRightContent();showChartRight();disableTxtField();$(".top-arrow").hide();$(".bot-arrow").hide();setupMessage();var c=getCoinBlue(d,b);console.log(c);var a=getCoinRed(c);$(".pound-annual-income").html(Number(b).toLocaleString("en").split(".")[0]);setupCoin(c,a);fallingCoin(1);current_forcecash_income=d;current_target=b}function registerActionSummaryTab(){$('a[id="summary"]').on("shown.bs.tab",function(a){setupMessageSummary();setActionLink()});$("#backSummary").on("click",function(a){$("#results").trigger("click")})}function setActionLink(){$(".summary-link").on("click",function(a){$("#results").trigger("click")})}function setupMessageSummary(){var g=getForecastIncome();var c=$("#txt-target-pensions").val();var f=getForecast_percent_target();f=parseFloat(f)*100;var h=$("#percent-tax-free").slider().slider("value");var e=$("#age-to-retirement-result").slider().slider("value");var b=getTax_Free_Value();if(c>=g){var d=getShortFall();$(".summary-pound-shortfall").html(Number(d).toLocaleString("en").split(".")[0]);showNormal()}else{var a=g-c;$(".summary-pound-excess").html(Number(a).toLocaleString("en").split(".")[0]);showExcess()}$(".summary-pound-pension").each(function(){$(this).html(Number(c).toLocaleString("en").split(".")[0])});$(".summary-pound-income").each(function(){$(this).html(Number(g).toLocaleString("en").split(".")[0])});$(".summary-percent").html(round(f));$(".summary-percent-amount").html(h);$(".summary-retire-age").each(function(){$(this).html(e)});$(".summary-pound-amount").html(Number(b).toLocaleString("en").split(".")[0])}function showNormal(){$(".summary-excess-title").each(function(){$(this).hide()});$(".summary-normal-title").each(function(){$(this).show()})}function showExcess(){$(".summary-excess-title").each(function(){$(this).show()});$(".summary-normal-title").each(function(){$(this).hide()})}function updateDataPrint(){var e=getForecastIncome();var b=$("#txt-target-pensions").val();var f=$("#percent-tax-free").slider().slider("value");var d=$("#age-to-retirement-result").slider().slider("value");var a=getTax_Free_Value();var c=getShortFall();$(".print-pound-pension").html(Number(b).toLocaleString("en").split(".")[0]);$(".print-retire-age").each(function(){$(this).html(d)});$(".print-percent-amount").html(f);$(".print-pound-amount").html(Number(a).toLocaleString("en").split(".")[0]);$(".print-pound-income").html(Number(e).toLocaleString("en").split(".")[0]);$(".print-pound-shortfall").html(Number(c).toLocaleString("en").split(".")[0])}function PrintElement(a){updateDataPrint();Popup($(a).html())}function Popup(b){var a=window.open("","Close Brothers");a.document.write("<html><head><title>Pension Accumulators</title>");a.document.write("</head><body >");a.document.write(b);a.document.write("</body></html>");a.document.close();a.focus();a.print();a.close();return true};