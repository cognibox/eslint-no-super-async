const RuleTester = require('eslint').RuleTester;
const noSuperAsync = require('../lib/rules/no-super-async');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2017 } });

ruleTester.run('no-super-async', noSuperAsync, {
  valid: [
    {
      code: 'class Foo { bar() { super.bar(); } }',
    },
  ],
  invalid: [
    {
      code: 'class Foo { async bar() { super.bar(); } }',
      errors: [{ message: 'Unexpected use of "super" in an async function' }],
    },
    {
      code: 'class Foo { async bar() { if (true) super.bar(); } }',
      errors: [{ message: 'Unexpected use of "super" in an async function' }],
    },
    {
      code: 'class Foo { async bar() { (() => super.bar())(); } }',
      errors: [{ message: 'Unexpected use of "super" in an async function' }],
    },
  ],
});
