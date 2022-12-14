// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';

import test from 'p-tape';


const ptl = function pTapeAllInList(opt, testFuncs) {
  if (!opt) { return ptl(true, testFuncs); }
  if (opt.forEach) { return ptl(true, testFuncs); }
  const { extraApi } = opt;
  testFuncs.forEach(f => test(f.name, t => f(Object.assign(t, extraApi))));
};


export default ptl;
