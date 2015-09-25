# PostCSS For Plugin
[![Build Status](https://travis-ci.org/gitscrum/postcss-for-variables.svg)](https://travis-ci.org/gitscrum/postcss-for-variables)

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

```js
postcss([ require('postcss-for-var'), require('postcss-for') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
