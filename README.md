# JavaScript: Unexpected Arithmetic Behavior with undefined and null

This repository demonstrates a common JavaScript pitfall: unexpected results when performing arithmetic operations with `undefined` and `null` values.  JavaScript's loose typing system can lead to confusion and errors if not handled carefully.

## The Bug

The `foo` function attempts to add two numbers. However, when one of the inputs is `undefined` or `null`, the result is not always what you might expect.  `undefined` causes `NaN`, while `null` acts like 0.

## The Solution

The solution involves explicitly checking for and handling `undefined` and `null` values before performing arithmetic to ensure predictable results.