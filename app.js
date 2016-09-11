var app = (function() {
    return {
        upload: upload
    };

    function upload(){
       var preview = document.getElementById('photo-preview')
       var file = document.getElementById('photo-upload').files[0];
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file);
       } else {
           preview.src = '';
       }
    }

})();