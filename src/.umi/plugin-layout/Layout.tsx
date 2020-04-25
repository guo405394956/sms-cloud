import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export default (props) => {
  const runtimeConfig = plugin.applyPlugins({
    key: 'layout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  const userConfig = {
    ...{'name':'豪霆云通讯平台','theme':'PRO','locale':true,'showBreadcrumb':true},
    ...runtimeConfig
  };
  return React.createElement(require('/Users/guorong/Desktop/rongrong/sms-cloud/node_modules/@umijs/plugin-layout/lib/layout/index.js').default, {
    userConfig,
    ...props
  })
}
