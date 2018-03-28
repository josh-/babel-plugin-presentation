import pluginTester from 'babel-plugin-tester';
import nanEqualityPlugin from './index';

pluginTester({
  plugin: nanEqualityPlugin,
  tests: [
    {
      code: 'NaN === NaN;',
      output: 'isNan(NaN);',
    },
    {
      code: 'a == NaN;',
      output: 'isNan(a);',
    },
    {
      code: 'NaN == n;',
      output: 'isNan(n);',
    },
    {
      code: 'NaN == NaN;',
      output: 'isNan(NaN);',
    }
  ],
})
