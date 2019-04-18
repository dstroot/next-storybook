# React Component Library

This is an example of a Storybook library showing how a library of components would be maintained. I use this readme as a scrtach pad to keep track of certain things and for reminders of small tweaks.

#### Adding SVGs

One way to add SVG files was described in the section above. However react-scripts@2.0.0 added an ability to import SVGs as React components through the fantastic @svgr/webpack. You can use either of the two approaches. In your code it would look like:

```js
import logoUrl, { ReactComponent as Logo } from './logo.svg';

console.log(logoUrl); // /logo.84287d09.svg

const App = () => (
  <div>
    {/* logoUrl is the URL of your SVG file */}
    <img src={logoUrl} alt="Logo" />

    {/* Logo is an actual React component */}
    <Logo />
  </div>
);
```

#### IE 11 support :(

See: https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill

top level index.js:

```js
// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';
```
