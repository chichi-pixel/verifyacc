const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => { 
    code.addEventListener('keydown', (e) => {
          if(e.key >= 0 && e.key <=9) {
              //TODO: what if idx + 1 > codes.length?
              setTimeout(() => codes[idx + 1].focus(),
              20); 
          } else if(e.key === 'Backspace') {
              //TODO: what if idx - 1 < 0 ?
              setTimeout(() => codes[idx - 1].focus(),
              20);
          } else {
            setTimeout(() => codes[idx].value = '',
            20);
          }
    });
});