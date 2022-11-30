"use strict";
// Numeric Enums
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Espanhol"] = 1] = "Espanhol";
    Idiomas[Idiomas["Ingl\u00EAs"] = 2] = "Ingl\u00EAs";
    Idiomas[Idiomas["Frances"] = 3] = "Frances";
})(Idiomas || (Idiomas = {}));
// Strings Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUAR";
    Dia["Quinta"] = "QUIN";
    Dia["Sexta"] = "SEXT";
})(Dia || (Dia = {}));
console.log(Dia.Segunda);
