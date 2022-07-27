# map-midpointing
Code for various map projects (that I may not yet know how to complete)
Currently just empty folders (mostly)

## Main problems 
These are the problems that inspired these projects
- **Midpoint** - Given n locations, what is their weighted geographic midpoint? (Accounting for the spherical earth)
- **Min Travel Time** - Given n locations, what meeting point minimizes total travel time? 
- **Practical Midpoint** - Given n locations, what is a city/park/etc. near a mathematical ideal meeting point?
- **Time Polygon** - Given a location and a time, plot all locations on a map accessible in the given time (Drive Time Polygons)
- **Distance Polygon** - Given a location and a radius, plot the corresponding curve on the globe 

## Notes
- Some of these problems can be approximated locally by rectangular coordinates, but at larger scales and/or near breaks in coordinates, must account for the shape of the earth.
- The Drive Time Polygon problem has already been solved by [Travel Time](https://traveltime.com/blog/google-maps-drive-time-polygon-tutorial-driving-radius), whose code I have copied in the [Travel Time's code](Time Polygon/Travel Time's code) folder, within the [Time Polygon](Time Polygon) folder 
- The midpoint problem is easily solved for n points in Euclidean space
- Many other problems have likely already been solved elsewhere
