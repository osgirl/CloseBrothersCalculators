$.fn.animatecss=function(a,b){return this.addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",b)};$.fn.animateRotate=function(d,c,b,e,a){return this.each(function(){var g=$(this);var f=g.position().top;$({top:f}).animate({top:c},{duration:b,easing:e,step:function(i){var h=(1-i/c)*d;g.css({transform:"rotate("+h+"deg)",top:i})},complete:a||$.noop})})};function setupCoin(d,a){if(d>0){var c="<div class='coinBlue' id='coin1'></div>"}else{var c="<div class='coinRed' id='coin1'></div>"}for(var b=2;b<=totalCoin;b++){if(b>d){c=c+"<div class='coinRed' id='coin"+b+"'></div>"}else{c=c+"<div class='coinBlue' id='coin"+b+"'></div>"}}$("#coin-container").html(c)}function fallingCoin(a){var d="#coin"+a;$(d).show();var e=$("#coin-container").height()-25;console.log("heightContainer :"+e);var c=$(d).height()/2-5;var b=e-(c*a);var f=70*(a%2===0?1:-1);$(d).animateRotate(f,b,300-c*a,"linear",function(){if(a<totalCoin){a=a+1;fallingCoin(a)}else{console.log("coin done");setHeightDiv();eneabledTxtField()}})}function setHeightDiv(){var a=getForecastIncome();var i=getShortFall();var g=$("#txt-target-pensions").val();var b=getCoinBlue(a,g);var c=getCoinRed(b);$(".pound-income-inform").html(Number(a).toLocaleString("en").split(".")[0]);if(b>5&b<totalCoin&c>5){var f=(c*($(".coinRed").height()/2-5))+($(".coinRed").height()/2);var h=f-$(".arrow-top").height()-$(".arrow-bot").height();$(".arrow-mid").css("height",0);var e=($("#coin-container").height()-25-f)/2-$(".bot-arrow").height()/2;$(".bot-arrow").css("margin-top",e);$("#print-div").css("margin-top",e+9);animationShortFall(h-2,i);animationIncomed();return true}else{if(b==totalCoin){$(".top-arrow").hide();var d=($("#coin-container").height()-25)/2-$(".bot-arrow").height()/2;$(".bot-arrow").css("margin-top",d);$("#print-div").css("margin-top",d+7);animationIncomed();return true}else{if(b<=5&b>3){var f=(c*($(".coinRed").height()/2-5))+($(".coinRed").height()/2);var h=f-$(".arrow-top").height()-$(".arrow-bot").height();$(".arrow-mid").css("height",0);$(".bot-arrow").css("margin-top","0");if(b==4){$("#print-div").css("margin-top","-1px")}else{$("#print-div").css("margin-top","19px")}animationShortFall(h-4,i);animationIncomed();return true}else{if(b<=3){c=21;var f=(c*($(".coinRed").height()/2-5))+($(".coinRed").height()/2);var h=f-$(".arrow-top").height()-$(".arrow-bot").height();var j=checkScreenXsSM();$(".arrow-mid").css("height",0);if(j==true){animationShortFall(h,i)}else{animationShortFall(h-4,i)}$(".bot-arrow").css("margin-top","0");$("#print-div").css("margin-top","-1px");animationIncomed();return true}else{if(c<=5){var f=(2*($(".coinRed").height()/2-5))+($(".coinRed").height()/2);var h=f-$(".arrow-top").height()-$(".arrow-bot").height();$(".arrow-mid").css("height",0);var e=($("#coin-container").height()-25-$(".top-arrow").height())/2-$(".bot-arrow").height()/2;$(".bot-arrow").css("margin-top",e);$("#print-div").css("margin-top",e+7);animationIncomed();animationShortFall(h-2,i);return true}}}}}}function animationShortFall(a,b){$(".bot-arrow-pension").hide();setTimeout(function(){$(".top-arrow").show();$(".arrow-mid").animate({height:a},"slow",function(){$(".pound-shortfall").html(Number(b).toLocaleString("en").split(".")[0]);$(".bot-arrow-pension").fadeIn()})},200)}function animationIncomed(){setTimeout(function(){console.log("income animate");$(".bot-arrow").show();$(".print-div").hide();$(".shortfall").hide();var a=$(".bot-arrow").offset().left;$(".bot-arrow").css({left:a}).animate({left:"10px"},"slow",function(){$(".shortfall").fadeIn();$(".print-div").show()})},200)}function drawSlideRetirementAge(){var a=["55","60","65","70","75"];$("#age-to-retirement").slider({min:55,max:75,step:1,value:65}).slider("pips",{rest:"label",step:5,label:a}).slider("float")}function drawSlidePercentTaxFreeCash(){var a=["0","5","10","15","20","25"];$("#percent-tax-free").slider({min:0,max:25,step:1}).slider("pips",{rest:"label",step:5,label:a}).slider("float")}function drawSlideAboutYou(){drawSlideRetirementAge();drawSlidePercentTaxFreeCash()}function drawSlideResult(c,b){var a=["55","60","65","70","75"];$("#age-to-retirement-result").slider({min:55,max:75,step:1,value:c}).slider("pips",{rest:"label",step:5,label:a}).slider("float").on("slidechange",function(h,g){var f=$("#age-to-retirement-result").slider().slider("value");$("#age-to-retirement").slider().slider("value",f);drawChart()});var d=["0","5","10","15","20","25"];$("#percent-tax-free-result").slider({min:0,max:25,step:1,value:b}).slider("pips",{rest:"label",step:5,label:d}).slider("float").on("slidechange",function(h,g){var f=$("#percent-tax-free-result").slider().slider("value");$("#percent-tax-free").slider().slider("value",f);drawChart()})}function drawSlide(){drawSlideAboutYou();drawSlideResult(65,0)}function showWarning(a){$("#warningModal").find(".modal-body").html(a);$("#warningModal").modal("show")}function showInfor(c,b,a){$("#infor").html(a);$("#infor").css("top",c);$("#infor").css("left",b);$("#infor").show()}function hideInfor(){$("#infor").hide()}function showChartRight(){$(".right-content-draw").show();$(".right-content-default").hide()}function hideChartRight(){$(".right-content-draw").hide();$(".right-content-default").show()}function checkScreenXsSM(){if($("#check-ui").is(":visible")){return false}else{return true}}function showRightContent(){$("#right-content").show()}function hideRightContent(){$("#right-content").hide()}function drawRightContent(){var a=checkScreenXsSM();if(a==true){hideRightContent()}else{showRightContent()}};