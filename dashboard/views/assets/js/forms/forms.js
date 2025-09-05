(function(){
    'use strict';
    window.addEventListener('load', function(){
        //
        var forms = document.getElementByIdClassName('needs-validation');
        //
        var validation = Array.prototype.filter.call(forms, function(from){
            forms.addEventListener('submit', function(event){
                if(form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    },false);
})();