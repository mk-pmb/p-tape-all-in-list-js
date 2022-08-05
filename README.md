
<!--#echo json="package.json" key="name" underline="=" -->
p-tape-dict
===========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Run p-tape test functions from a list, using the function name as the test
name.
<!--/#echo -->



API
---

This module exports one function:

### pTapeAllInList([opt,] testFuncs)

`testFuncs` is an array of your test implementations.

`opt` is an optional options object that supports these optional keys:

* `extraApi`: An object whose entries shall be assigned onto the
  test API function, aka the first argument to the test implementations.
  You'd usually use this for dependency injection.



Usage
-----

For examples, see `test/all.mjs` in these packages:
* [obj-from-keys-list
  ](https://github.com/mk-pmb/obj-from-keys-list-js/blob/master/test/all.mjs)
* [ordered-map-extended-pmb
  ](https://github.com/mk-pmb/ordered-map-extended-pmb-js/blob/master/test/all.mjs)




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
