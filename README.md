Simple Grid 2
=============
This project is based on: ThisIsDallas/Simple-Grid

What is inside
-----
- all grid variations from `1-1` to `12-12`. In original Simple Grid following
  combinations were not possible:
  `col-2-7 + col-5-7`, `col-1-3 + col-2-3` etc
- `.col.col-preserve` to to keep layout on mobile
- `.grid.grid-pad` for grid with padding of 20px


Installation
-----
`npm install --save simple-grid2`

`bower install --save simple-grid2`

or copy simplegrid.css to your project and simply add:
`<link href="simplegrid.css" media="all" rel="stylesheet" />`

Instructions:
-----
Make sure if following styles is inside your project. It's usually added with
bootstrap, normalize.css or reset.css.
```css
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

Before starting with anything please make sure to include this snippet of code
in your `<head>` tag so that the grids will be responsive on mobile devices:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" >
```


Sample usage:
-----
```html
<div class="grid">
	<div class="col-3-12">
		left, narrow column
	</div>
	<div class="col-9-12">
		right, wide column
	</div>
</div>
```

```html
<div class="grid">
	<div class="col-2-5"></div>
	<div class="col-1-5"></div>
	<div class="col-2-5"></div>
</div>
```
