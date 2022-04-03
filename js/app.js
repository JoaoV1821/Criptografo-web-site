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
    var cesarRadio = document.querySelector('#cesar');
    var baseRadio = document.querySelector('#base');
    var chaveCesar = document.querySelector('#chave-cesar');
    var sectionCesar = document.querySelector('#chave')
    var submitCripto = document.querySelector('#submit');
    var submitDecripto = document.querySelector('#submitDecripto');
    var text = document.querySelector('#tradutor-text')
    

    baseRadio.addEventListener('click', function() {
        
        sectionCesar.style.visibility = 'hidden';
        
    });

    cesarRadio.addEventListener('click', function() {
        
        sectionCesar.style.visibility = 'visible';

    });

    submitCripto.addEventListener('click', function(event) {
        event.preventDefault();

        if (text.value == '') {

            text.placeholder = 'Digite um valor';

        } else {

            var cifrado = document.querySelector('#cifrado');

            if (form.option.value == 'cesar') {
 
                cifrado.value = cesar(text.value, chaveCesar.value, 'encrypt');
    
            } else if (form.option.value == 'base') {
    
                cifrado.value = base(text.value, 'encrypt');
            };
        };
    });

    submitDecripto.addEventListener('click', function(event) {
        event.preventDefault();

        if (text.value == '') {

            text.placeholder = 'Digite um valor';

        } else {

            var cifrado = document.querySelector('#cifrado');

            if (form.option.value == 'cesar') {

                cifrado.value = cesar(text.value, chaveCesar.value, 'decrypt' );
    
            } else if (form.option.value == 'base') {
    
                cifrado.value = base(text.value, 'decrypt');
            };
        };
    });
};

main();