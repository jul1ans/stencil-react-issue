import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  namespace: 'demo',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'helloworld',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: false,
    }),
    {
      type: 'www',
      baseUrl: 'https://myapp.local/',
    },
  ],
};
