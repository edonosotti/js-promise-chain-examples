[![codebeat badge](https://codebeat.co/badges/f75bdb7e-3d19-4dc9-9c75-91d70e5412fe)](https://codebeat.co/projects/github-com-edonosotti-js-promise-chain-examples-master)
[![Maintainability](https://api.codeclimate.com/v1/badges/058d5a9cd6997fcaa24b/maintainability)](https://codeclimate.com/github/edonosotti/js-promise-chain-examples/maintainability)

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
