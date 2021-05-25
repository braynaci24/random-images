$(document).ready(function(){

    $.ajax({
         url: 'https://api.unsplash.com/photos/random?count=30&orientation=squarish&client_id=kfKv2eE4uFO3dEnB4lw7PlWZg6sZVc70qTbRRGDAfnU', 
        method: 'GET',
        dataType: 'JSON',
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            $('.image-box img').eq(i).attr('src', data[i].urls.thumb)
          }
        }
      })
     $('body').on('click', '.delete', function(){
         $(this).parent().parent().parent().remove();
     })
})