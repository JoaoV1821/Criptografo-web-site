function main() {

    // Base64
    function base(text, mode) {

        if (mode == 'encrypt') {

            return btoa(text);

        } else if (mode == 'decrypt') {

            return atob(text);
        };

    };

    // Cifra de César
    function cesar(text, chave, mode) {

        var numberChave = parseInt(chave);

        if (mode == 'encrypt') {

            var letrasEncript = [];

            for (var i = 0; i < text.length; i++) {
                var charCod = text[i].charCodeAt();

                if (charCod >= 65 && charCod <= 90) {
                    var charCript = String.fromCharCode(((charCod - 65 + numberChave) % 26) + 65);

                  } else if (charCod >= 97 && charCod <= 122) {
                    var charCript = String.fromCharCode(((charCod - 97 + numberChave) % 26) + 97);
                  } else {
                      var charCript = String.fromCharCode(charCod);
                  }
               

                letrasEncript.push(charCript);
            };

            letrasEncript = letrasEncript.toString().replace(/,/g, '');

            return letrasEncript;

        } else if (mode == 'decrypt') {

            var letrasDecript = [];


            for (var i = 0; i < text.length; i++) {
                var charCod = text[i].charCodeAt();

                if (charCod >= 65 && charCod <= 90) {
                    var charDecript = String.fromCharCode(((charCod - 65 - numberChave) % 26) + 65);
                    
                  } else if (charCod >= 97 && charCod <= 122) {
                    var charDecript = String.fromCharCode(((charCod - 97 - numberChave) % 26) + 97);
                  } else {
                    var charDecript = String.fromCharCode(charCod);
                  }

                letrasDecript.push(charDecript);
                console.log(charCod)
            };

            letrasDecript = letrasDecript.toString().replace(/,/g, '');
            
            return letrasDecript;

        };

    };


    var form = document.querySelector('#form');
    var options = document.querySelector('#options');
    var chaveCesar = document.querySelector('#chave-cesar');
    var sectionCesar = document.querySelector('#chave');
    var submit = document.querySelector('#submit');
    var text = document.querySelector('#tradutor-text');
    var optionDec = document.querySelector('#optionDec');
    var optionCrip = document.querySelector('#optionCrip');

    options.addEventListener('click', function () {

        if (options.value == 'base') {
            sectionCesar.style.visibility = 'hidden';

        } else if (options.value == 'cesar') {
            sectionCesar.style.visibility = 'visible';
        };
    });


    optionCrip.addEventListener('click', function () {
        submit.innerText = 'Criptografar';
    });


    optionDec.addEventListener('click', function () {
        submit.innerText = 'Descriptografar';
    });


    submit.addEventListener('click', function (event) {
        event.preventDefault();

        if (submit.innerText == 'Criptografar') {

            if (text.value == '') {

                text.placeholder = 'Digite um valor';

            } else {

                var cifrado = document.querySelector('#cifrado');

                if (form.options.value == 'cesar') {

                    cifrado.value = cesar(text.value, chaveCesar.value, 'encrypt');

                } else if (form.options.value == 'base') {

                    cifrado.value = base(text.value, 'encrypt');
                };
            };

        } else if (submit.innerText == 'Descriptografar') {

            if (text.value == '') {

                text.placeholder = 'Digite um valor';

            } else {

                var cifrado = document.querySelector('#cifrado');

                if (form.options.value == 'cesar') {

                    cifrado.value = cesar(text.value, chaveCesar.value, 'decrypt');

                } else if (form.options.value == 'base') {

                    cifrado.value = base(text.value, 'decrypt');
                };
            };
        };
    });
};

main();