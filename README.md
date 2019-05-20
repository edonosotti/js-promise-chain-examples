# Using Promises in JS - sample code

This code was written for the:
[Breaking and taming the Promise chain in JS](https://medium.com/rockedscience/breaking-and-taming-the-promise-chain-in-js-6031f62db9b5)
article posted on the **RockedScience** **Medium** publication.

Starting from the *worst case scenario* shown in
[`ugly-version.js`](ugly-version.js), the code is converted
to use `Promise.all()` returning all values at the end of the
execution ([`promise-all-version.js`](promise-all-version.js))
and invidually at each invocation
([`promise-all-improved-version.js`](promise-all-improved-version.js)).

The last example in [`tidy-version.js`](tidy-version.js) shows my
favourite implementation of a chain of `Promise`s.

Please read the full article linked above for details.
