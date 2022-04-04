# Changelog

### Updated 4. April

## What is working

✅ Button input is displayed in console
✅ Button input displays in results field
✅ Input can be solved for using math.eval
~~✅ Input can be solved for using eval~~

## Other items

✅ JS refactored
✅ Converted results field from div to text input element to allow manual user input using their keyboard or other input device
✅ Added "(" and ")" buttons to interface (order of operations)
✅ eval has been replaced with math.js
✅ Focus defaults to text input on page load

## What is weird/not working

❌ Strange animation behavior when rapidly mousing over buttons ("stuttering" appearance)
❌ Multiple operators next to each other are not handled correctly and result in an error
❌ Operators at the beginning of a calculation result in an error
❌ No implementation yet to reject undesirable user input (i.e. letters, special characters)
❌ No automatic conversion of user intent -- for example, typing "x" does not automatically convert to "\*"
❌ Divide by zero results in Infinity
~~❌ eval has its limitations~~
~~❌ JS is written very inefficiently~~
