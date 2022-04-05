function main () {

    function base(text, mode) {
        var textLower = text.toLowerCase();

        if (mode == 'encrypt') {

            return btoa(textLower);

        } else {

            return atob(textLower);
        };

    };

    function cesar(text, chave, mode) {

        var textLower = text.toLowerCase();
        var numberChave = parseInt(chave);
        
        if (mode == 'encrypt') {

            for (var i=0; i < textLower.length; i++) {

                var charCode = textLower.charCodeAt(i);
                
                if ((charCode + numberChave) > 122) {
    
                    charCode = 97;
                    textLower = textLower.replace(textLower[i], String.fromCharCode(charCode));
    
                } else {
    
                    var criptChar = String.fromCharCode(charCode + numberChave);
                    textLower = textLower.replace(textLower[i], criptChar);
                };
                
            };
    
            return textLower;

        } else {

            for (var i=0; i < textLower.length; i++) {

                var charCode = textLower.charCodeAt(i);
    
                if((charCode - numberChave) < 97) {
    
                    charCode = 122;
                    textLower = textLower.replace(textLower[i], String.fromCharCode(charCode));
    
                } else {
    
                    var criptChar = String.fromCharCode(charCode - numberChave);
                    textLower = textLower.replace(textLower[i], criptChar);
                };
            };
    
            return textLower;
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

    options.addEventListener('click', function() {

        if (options.value == 'base') {
            sectionCesar.style.visibility = 'hidden';

        } else if (options.value == 'cesar') {
            sectionCesar.style.visibility = 'visible';
        };
    });


    optionCrip.addEventListener('click', function () {
        submit.innerText = 'Criptografar';
    });


    optionDec.addEventListener('click', function() {
        submit.innerText = 'Descriptografar';
    });


    submit.addEventListener('click', function(event) {
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
    
                    cifrado.value = cesar(text.value, chaveCesar.value, 'decrypt' );
        
                } else if (form.options.value == 'base') {
        
                    cifrado.value = base(text.value, 'decrypt');
                };
            };
        };
    });
};

main();