# PostCSS For Plugin
[![Build Status](https://img.shields.io/travis/GitScrum/postcss-for-variables.svg?style=flat-square)](https://travis-ci.org/GitScrum/postcss-for-variables)[![npm version](https://img.shields.io/npm/v/postcss-for-variables.svg?style=flat-square)](https://www.npmjs.com/package/postcss-for-variables)[![npm downloads](https://img.shields.io/npm/dm/postcss-for-variables.svg?style=flat-square)](https://www.npmjs.com/package/postcss-for-variables)[![npm](https://img.shields.io/npm/dt/postcss-for-variables.svg?style=flat-square)](https://www.npmjs.com/package/postcss-for-variables)

# DEPRECATED, use [postcss-at-rules-variables](https://github.com/GitScrum/postcss-at-rules-variables)

Used in conjunction with the plugin [postcss-for](https://github.com/antyakushev/postcss-for)



```css
/* Input example */
:root {
	--from: 1;
	--to: 3
}
@for $i from var(--from) to var(--to) {
	.icon-$i { ... }
}
```

```css
/* Output example */
:root {
	--from: 1;
	--to: 3
}

.icon-1 { ... }
.icon-2 { ... }
.icon-3 { ... }

```

## Usage
Use postcss-for-variables before postcss-for

```js
postcss([ require('postcss-for-variables'), require('postcss-for') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
