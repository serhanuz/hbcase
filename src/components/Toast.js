import toastr from 'toastr'

export const Toast = (message, type) => {

  // Toast package'inin option objesi set edilir
  toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
  }
  
  // Mevcut alert var ise ekran temizlenir
  toastr.clear();

  // Gelen type error ise hata mesaji gosterilir
  if (type === 'error') {
    toastr.error(message)
  } 
  // Gelen type success ise hata mesaji gosterilir
  else if (type === 'success') {
    toastr.success(message)
  }

};

