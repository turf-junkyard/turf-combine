turf-combine
============
[![build status](https://secure.travis-ci.org/Turfjs/turf-combine.png)](http://travis-ci.org/Turfjs/turf-combine)

Combines feature collection of point, linestring, or polygon features into multipoint, multilinestring, or multipolygon features.

###Install

```sh
npm install turf-combine
```

###Parameters

|name|description|
|---|---|
|fc|A Feature or FeatureCollection of any type|

###Usage

```js
combine(fc)
```

###Example

```js
var combine = require('turf-combine')
var point = require('turf-point')
var featurecollection = require('turf-featurecollection')

var pt1 = point(50, 1)
var pt2 = point(100, 101)
var fc = featurecollection([pt1, pt2])

var combined = combine(fc)

console.log(combined)
```
