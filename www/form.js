window.onload = function(){
};
    function dontreload(){
            var formulaire = document.getElementsByClassName("form-example");

    for(var j = 0;j < (formulaire.length-1) ; j++) {
        if (formulaire[j].children[1].validity.typeMismatch) {
        window.validiteformulaire = false;
      } else {
        window.validiteformulaire = true;
      }
    }
    if (window.validiteformulaire) {
        var infos = {};
        var info;
        var champ = document.getElementsByClassName("form-example");

        for (var i = 0; i<(champ.length-1) ; i++) {
          var info = champ[i].children[1];
          infos[info.name] = info.value;
        }
        console.log(infos);
        on();
    }
    }
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
