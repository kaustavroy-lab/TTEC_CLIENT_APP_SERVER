   
   $(document).ready(function()
   {
      $('#indexLayer2').on('show.bs.modal', function (e) 
      {
         $('#indexLayer2 .modal-dialog').removeClass('animate-hide');
         $('#indexLayer2 .modal-dialog').addClass('animate-show');
      });
      $('#indexLayer2').on('hide.bs.modal', function (e)
      {
         $('#indexLayer2 .modal-dialog').removeClass('animate-show');
         var element = document.getElementById('indexLayer2');
         var forceReflow = element.offsetWidth;
         $('#indexLayer2 .modal-dialog').addClass('animate-hide');
      });
      $("#indexLayer2").modal('show');
      $("#indexLayer2").submit(function(event)
      {
         var isValid = $.validate.form(this);
         return isValid;
      });
      $("#indexEditbox3").validate(
      {
         required: true,
         bootstrap: true,
         type: 'number',
         expr_min: '>=',
         expr_max: '<=',
         value_min: '',
         value_max: '',
         length_min: '10',
         length_max: '10',
         color_text: '#000000',
         color_hint: '#00FF00',
         color_error: '#FF0000',
         color_border: '#808080',
         nohint: false,
         font_family: 'Arial',
         font_size: '13px',
         position: 'topleft',
         offsetx: 0,
         offsety: 0,
         effect: 'none',
         error_text: ''
      });
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
