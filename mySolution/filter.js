'use strict';
// Filter array by type name

const filter = (T, t) => {
  console.log(T, t);
  const remove = [];
  for (const value of T) {
    const x = T.indexOf(value);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (const x of remove) T.splice(x, 1);
  return T;
};

require('../Tests/filter.js')(filter);
