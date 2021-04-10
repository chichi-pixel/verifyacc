const codes = documents.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx)); {
    code.addEventListener('keydown', (e) => {
          if(e.key >= 0 && e.key <=9) {
              codes[idx].value = '' /*is this line 8 code true?*/
              setTimeout(() => codes[idx+1].focus(),
              20);
          } else if(e.key === 'Backspace') {
              setTimeout(() => codes[idx - 1].focus(),
              20);
          }
    })

}