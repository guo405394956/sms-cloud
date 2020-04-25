import { Plugin } from '/Users/guorong/Desktop/rongrong/sms-cloud/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','locale','locale','layout','request',],
});
plugin.register({
  apply: require('/Users/guorong/Desktop/rongrong/sms-cloud/src/app.tsx'),
  path: '/Users/guorong/Desktop/rongrong/sms-cloud/src/app.tsx',
});
plugin.register({
  apply: require('/Users/guorong/Desktop/rongrong/sms-cloud/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: '/Users/guorong/Desktop/rongrong/sms-cloud/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('/Users/guorong/Desktop/rongrong/sms-cloud/src/.umi/plugin-access/rootContainer.ts'),
  path: '/Users/guorong/Desktop/rongrong/sms-cloud/src/.umi/plugin-access/rootContainer.ts',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/guorong/Desktop/rongrong/sms-cloud/src/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/guorong/Desktop/rongrong/sms-cloud/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('@@/plugin-layout/runtime.tsx'),
  path: '@@/plugin-layout/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
