   
   $(document).ready(function()
   {
      $('#page2Layer1').on('show.bs.modal', function (e) 
      {
         $('#page2Layer1 .modal-dialog').removeClass('animate-hide');
         $('#page2Layer1 .modal-dialog').addClass('animate-show');
      });
      $('#page2Layer1').on('hide.bs.modal', function (e)
      {
         $('#page2Layer1 .modal-dialog').removeClass('animate-show');
         var element = document.getElementById('page2Layer1');
         var forceReflow = element.offsetWidth;
         $('#page2Layer1 .modal-dialog').addClass('animate-hide');
      });
      $("#page2Layer1").modal('show');
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
