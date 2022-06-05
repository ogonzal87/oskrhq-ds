# Motion

## Motion System

Provides a predictable scale for both easing and duration:

```scss
$unit: 100ms;

$duration-data: (
  fast: $unit,
  base: $unit * 2,
  slow: $unit * 3,
  slower: $unit * 4,
  slowest: $unit * 5
);

$easing-data: (
  base: cubic-bezier(0.64, 0, 0.35, 1),
  in: cubic-bezier(0.36, 0, 1, 1),
  out: cubic-bezier(0, 0, 0.42, 1),
  excite: cubic-bezier(0.18, 0.67, 0.6, 1.22),
  overshoot: cubic-bezier(0.07, 0.28, 0.32, 1.22),
  anticipate: cubic-bezier(0.38, -0.4, 0.88, 0.65)
);
```

## Usage

I make use of Sass functions specify the time and how things should move from one state to another.

### Functions

#### `og-easing($variant)`

Applies transitions rules to the CSS property. `$variant` refers to the how the element should move or get to the desired state/position.

#### `og-duration($variant)`

Applies transition rules to the CSS property. `$variant` refers to the how long the element should take to get to the desired state/position.

```sass
.div-container {
    transition: all og-easing(in) og-duration(slowest); // returns a cubic-bezier and the duration in ms.
}
```
