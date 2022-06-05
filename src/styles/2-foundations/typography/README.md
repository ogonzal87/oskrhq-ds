# Typography

OSKRHQ.DS uses Lato as it Font Family with specific typographic styles that define a hierarchy for both mobile and web.

- H1
- H2
- H3
- H4
- H5
- H6
- Subtitle1
- Subtitle2
- Body2
- Body1
- Caption
- Button
- Overline
- Link
- List

## Type System

Font size, font weight, and line-height have their own predictive scales.

### Font Size

I use three digits to convey in size. The higher the range number, the higher the font-size.

```scss
$og-theme-base-font-size: 16px;

$og-font-size-data: (
  H1: $og-theme-base-font-size * 6,
  H2: $og-theme-base-font-size * 3.75,
  H3: $og-theme-base-font-size * 3,
  H4: $og-theme-base-font-size * 2.125,
  H5: $og-theme-base-font-size * 1.5,
  H6: $og-theme-base-font-size * 1.25,
  subtitle2: $og-theme-base-font-size * 0.875,
  subtitle1: $og-theme-base-font-size,
  body2: $og-theme-base-font-size * 0.875,
  body1: $og-theme-base-font-size,
  caption: $og-theme-base-font-size * 0.857,
  button: $og-theme-base-font-size * 0.857,
  overline: $og-theme-base-font-size,
  link: $og-theme-base-font-size,
  list: $og-theme-base-font-size
);
```

### Font Weight

For font-weight I use words.

```sass
$og-font-weight-data: (
  bold: 900,
  semibold: 600,
  normal: 400,
  light: 300
);
```

### Line Height

I use three digits to convey in line-height. The higher the range number, the higher the line-height.

```sass
$og-line-height-data: (
  H1: normal,
  H2: normal,
  H3: normal,
  H4: normal,
  H5: normal,
  H6: normal,
  subtitle2: 1.6,
  subtitle1: 1.6,
  body2: 1.5,
  body1: 1.5,
  caption: 1.5,
  button: 1.5,
  overline: 1.5,
  link: 1.5,
  list: 1.5
);
```

## Usage

I make use of Sass functions and mixins to use in our mark up.

### Functions

#### `og-font-size($range)`

Applies a font size from the allowed sizes in the system to a CSS property. `$range` refers to the scale of how big you would like the font-size to be. The higher the number, the bigger the font-size.

```sass
.div-container {
    font-size: og-font-size(500); // returns a pixel value for that range
}
```

#### `og-font-weight($weight)`

Applies a font weight from the allowed weights in the system to a CSS property. `$weight` refers to either bold, semibold, base, light, etc.

```sass
.div-container {
    font-size: og-font-weight(bold); // returns a weight value for that range (300 - 900)
}
```

#### `og-line-height($range)`

Applies a line height from the allowed line heights in the system to a CSS property. `$range` refers to how high you would like the line-height to be. The higher the number, the higher the line-height.

```sass
.div-container {
    font-size: og-font-weight(bold); // returns a weight value for that range (300 - 900)
}
```

### Mixins

#### `og-H1-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-H1-text-style(bold);
}
```

#### `og-H2-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-H2-text-style(bold);
}
```

#### `og-H3-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-H3-text-style(bold);
}
```

#### `og-H4-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-H4-text-style(bold);
}
```

#### `og-H5-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-H5-text-style(bold);
}
```

#### `og-H6-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-H6-text-style(bold);
}
```

#### `og-subtitle1-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-subtitle1-text-style(bold);
}
```

#### `og-body2-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-body2-small-text-style(bold);
}
```

#### `og-body1-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-body1-text-style(bold);
}
```

#### `og-caption-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-caption-text-style(bold);
}
```

#### `og-button-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-button-text-style(bold);
}
```

#### `og-link-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-link-text-style(bold);
}
```

#### `og-list-text-style($weight)`

Applies all the text styling needed by Typographic Style defined in the system to a CSS declaration. `$color` refers to the color in the system you want to use - optional. `$weight` refers to the weight in the system you would like to use - optional.

```sass
.div-container {
    @include og-list-text-style(bold);
}
```

### Supporting Material

- [Responsive Typography With Sass Maps](https://www.smashingmagazine.com/2015/06/responsive-typography-with-sass-maps/)
- [The Type System](https://material.io/design/typography/the-type-system.html#type-scale)
- [Modular Scale](http://www.modularscale.com/)
