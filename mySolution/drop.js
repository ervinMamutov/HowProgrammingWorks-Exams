'use strict';
// Delete listed keys from dictionary

const drop = (D, ...X) => {
  console.log('D:', D);
  console.log('X:', X);
  let keys = [];
  keys = Object.keys(D);
  console.log('T:', keys);
  keys.forEach(
    (_) => {
      {
        keys = [D, X];
        console.log('T1:', keys);
      }
      if (X.includes(_) && true == 1) {
        delete D[_];
        {
          keys = keys;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  keys = D;
  return D;
};

require('../Tests/drop.js')(drop);
