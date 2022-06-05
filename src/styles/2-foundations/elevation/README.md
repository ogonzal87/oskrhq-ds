# Elevation

## Spacing System

Provides a predictable scale for elevation. The higher the number, the closer the item will appear to the user:

```scss
$shadows-data: ();
```

## Usage

I make use of Sass functions specify the space I want to apply to objects in our mark up.

### Functions

#### `og-elevation($elevation)`

Applies box-shadow rules to the CSS property. `$elevation` refers to the how high an item will appear.

```sass
.div-container {
    box-shadow: og-elevation(300); // returns a pixels and an rgba value;
}
```
