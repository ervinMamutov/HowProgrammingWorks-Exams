// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, p, s) => {
  const i = str.indexOf(p);
  const j = str.indexOf(s);

  if (i === -1 || j === -1) return '';
  else {
    str = str.substring(i + p.length, j);
  }
  return str;
};

require('../Tests/between.js')(getValueBetween);
