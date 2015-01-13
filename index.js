/**
* Combines a FeatureCollection of point, linestring, or polygon Features into multipoint, multilinestring, or multipolygon Features.
*
* @module turf/combine
* @param {FeatureCollection} fc a Feature or FeatureCollection of any type
* @return {FeatureCollection} a FeatureCollection of corresponding type to input
* @example
* var pt1 = turf.point(19.026432, 47.49134);
* var pt2 = turf.point(19.074497, 47.509548);
* var fc = turf.featurecollection([pt1, pt2]);
*
* var combined = turf.combine(fc);
*
* //=combined
*/

module.exports = function(fc){
  var type = fc.features[0].geometry.type;
  var err;
  var geometries = fc.features.map(function(f){
    return f.geometry;
  })

  switch(type){
    case 'Point':
      var multiPoint = {
        type: 'Feature',
        geometry: {
          type: 'MultiPoint',
          coordinates: []
        }
      };
      multiPoint.geometry.coordinates = pluckCoods(geometries);
      return multiPoint;
      break
    case 'LineString':
      var multiLineString = {
        type: 'Feature',
        geometry: {
          type: 'MultiLineString',
          coordinates: []
        }
      };
      multiLineString.geometry.coordinates = pluckCoods(geometries)
      return multiLineString;
      break
    case 'Polygon':
      var multiPolygon = {
        type: 'Feature',
        geometry: {
          type: 'MultiPolygon',
          coordinates: []
        }
      };
      multiPolygon.geometry.coordinates = pluckCoods(geometries)
      return multiPolygon;
      break
  }
}

function pluckCoods(multi){
  return multi.map(function(geom){
    return geom.coordinates;
  });
}
