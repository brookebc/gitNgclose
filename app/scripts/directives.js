angular.module('gitNgcloseApp.directives')
.directive('map', function() {

    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
            var map = L.map(attrs.id, {
                center: [40, -86],
                zoom: 10
            });
            //create a CloudMade tile layer and add it to the map
            L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.png', {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
                // maxZoom: '18',
                opacity: 0.7,
                detectRetina: true,
                unloadInvisibleTiles: true,
                updateWhenIdle: true,
                reuseTiles: true
            }).addTo(map);

            
            
            // });
            // tiles.addTo(map);

            //add markers dynamically
            // var points = [{lat: 40, lng: -86},{lat: 40.1, lng: -86.2}];
            // for (var p in points) {
            //     L.marker([points[p].lat, points[p].lng]).addTo(map);
            // }
        }
    };
});