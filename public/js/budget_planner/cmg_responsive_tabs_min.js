/*
----------------Information--------------------------------

1.Budget Responsive tabs JS

<<<<<<< HEAD
2.All function in this file manage the responsive of tabs in page.
=======
2.All functions in this file manage the responsive of tabs in page.
>>>>>>> release_03_04_2015

3.Version 1.0.0

4.Company - Claybourne McGregor Consulting Ltd 

5.Author - Lan.Ta 

6.Date - 30-03-2015

*/
var fakewaffle=(function(b,a){a.responsiveTabs=function(e){a.currentPosition="tabs";var d=b(".nav-tabs.responsive");var f="";var g="";var c="";if(e===undefined){e=["xs"]}b.each(e,function(){f+=" hidden-"+this;g+=" visible-"+this});b.each(d,function(){var h=b(this);var j=h.find("li a");var i=h.find("li button");var k=b("<div></div>",{"class":"panel-group responsive"+g,id:"collapse-"+h.attr("id")});b.each(j,function(){var n=b(this);var l=n.attr("id");var o=n.attr("class")===undefined?"":n.attr("class");var m="accordion-toggle";var r=n.parent().attr("class")===undefined?"":n.parent().attr("class");var t=n.parent().attr("style")===undefined?"":n.parent().attr("style");var p="panel-default";var s=n.get(0).hash.replace("#","collapse-");if(o.length>0){m+=" "+o}if(r.length>0){r=r.replace(/\bactive\b/g,"");p+=" "+r;p=p.replace(/\s{2,}/g," ");p=p.replace(/^\s+|\s+$/g,"")}if(n.parent().hasClass("active")){c="#"+s}var q=n.find("td.tenPersent:eq(1) img").attr("src");n.find("td.tenPersent:eq(1) img").attr("src","images/budget_planner/arrow_up.png");k.append(b("<div>").attr("class",p).html(b("<div>").attr("class","panel-heading").attr("style",t).html(b("<h4>").attr("class","panel-title").html(b("<a>",{id:l,"class":m,"data-toggle":"collapse","data-parent":"#collapse-"+h.attr("id"),href:"#"+s,html:n.html()})))).append(b("<div>",{id:s,"class":"panel-collapse collapse"})));n.find("td.tenPersent:eq(1) img").attr("src",q)});b.each(i,function(){var s=b(this);var l=s.attr("id");var n=s.attr("class")===undefined?"":s.attr("class");var m="accordion-toggle";var r=s.parent().attr("class")===undefined?"":s.parent().attr("class");var o=s.parent().attr("style")===undefined?"":s.parent().attr("style");var q="panel-default";var p="collapse-calculate";if(n.length>0){m+=" "+n}if(r.length>0){r=r.replace(/\bactive\b/g,"");q+=" "+r;q=q.replace(/\s{2,}/g," ");q=q.replace(/^\s+|\s+$/g,"")}if(s.parent().hasClass("active")){c="#"+p}k.append(b("<div>").attr("class",q).html(b("<div>").attr("class","panel-heading").attr("style",o).html(b("<h4>").attr("class","panel-title").html(b("<button>",{id:l,"class":m,"data-toggle":"collapse","data-target":"#collapse-calculate","data-parent":"#collapse-"+h.attr("id"),html:s.html()})))).append(b("<div>",{id:p,"class":"panel-collapse collapse"})))});h.after(k);h.addClass(f);b(".tab-content.responsive").addClass(f)});a.checkResize();a.bindTabToCollapse();if(c){b(c).collapse("show")}};a.checkResize=function(){if(b(".panel-group.responsive").is(":visible")===true&&a.currentPosition==="tabs"){a.tabToPanel();a.currentPosition="panel"}else{if(b(".panel-group.responsive").is(":visible")===false&&a.currentPosition==="panel"){a.panelToTab();a.currentPosition="tabs";setHeightTabPane()}}};a.tabToPanel=function(){var c=b(".nav-tabs.responsive");b.each(c,function(d,e){var f=b(e).parent().parent().find(".tab-content").find(".tab-pane");var d=0;b.each(f,function(h,j){var k=b(j).attr("id").replace(/^/,"#collapse-");var g=b(j).find("table.containInput");var i=getTotalInput(g);b(j).removeClass("tab-pane").addClass("panel-body").appendTo(b(k));if(i>0){b(k).parents().find("div.panel-default:eq("+h+") table.table-nonborder td:eq(1) span").html("£"+i);b(k).parents().find("div.panel-default:eq("+h+")").find(".table-responsive").find("tr:eq(0)").find("td.tenPersent img.validate").removeClass("hidden")}else{b(k).parents().find("div.panel-default:eq("+h+") table.table-nonborder td:eq(1) span").html("");b(k).parents().find("div.panel-default:eq("+h+")").find(".table-responsive").find("tr:eq(0)").find("td.tenPersent img.validate").addClass("hidden")}h++})})};a.panelToTab=function(){var c=b(".panel-group.responsive");b.each(c,function(f,e){var h=b(e).attr("id").replace("collapse-","#");var d=b(h).parent().parent().find(".tab-content")[0];var g=b(e).find(".panel-body");b.each(g,function(){var k=b(this).attr("id");console.log("id panel :"+k);var i=b(this).find("table.containInput");var j=getTotalInput(i);if(j>0){b("ul#myTab a[data-target='#"+k+"']").find("table.table-nonborder td:eq(1) span").html("£"+j);b("ul#myTab a[data-target='#"+k+"']").find(".table-responsive").find("tr:eq(0)").find("td.aquarter div.validate").removeClass("hidden")}else{b("ul#myTab a[data-target='#"+k+"']").find("table.table-nonborder td:eq(1) span").html("");b("ul#myTab a[data-target='#"+k+"']").find(".table-responsive").find("tr:eq(0)").find("td.aquarter div.validate").addClass("hidden")}});g.removeClass("panel-body").addClass("tab-pane").appendTo(b(d))});setHeightTabPane()};a.bindTabToCollapse=function(){var c=b(".nav-tabs.responsive").find("li a");var d=b(".panel-group.responsive").find(".panel-collapse");c.on("shown.bs.tab",function(h){var g=b(h.currentTarget.hash.replace(/#/,"#collapse-"));g.collapse("show");g.closest("div.panel-default").find("a").removeClass("collapsed");if(h.relatedTarget){var f=b(h.relatedTarget.hash.replace(/#/,"#collapse-"));f.collapse("hide");f.closest("div.panel-default").find("a").addClass("collapsed")}});d.on("shown.bs.collapse",function(h){var g=b(h.target).context.id.replace(/collapse-/g,"#");b('a[href="'+g+'"]').tab("show");var f=b(h.currentTarget).closest(".panel-group.responsive");b(f).find(".panel-body").removeClass("active");b(h.currentTarget).find(".panel-body").addClass("active")})};b(window).resize(function(){a.checkResize()});return a}(window.jQuery,fakewaffle||{}));