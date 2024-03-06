$(function () {
  var titulo = $("h1");
  titulo.on("click", function(){
    titulo.css("color", "#FF1493")
  })
});

$(function () {
  var Link = $("button");
  Link.on("click", function(){
    Link.css("color", "red")
  })
});
