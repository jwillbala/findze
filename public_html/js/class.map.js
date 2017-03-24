
function initMap() {
    var myLatlng = {lat: -20.300651, lng: -40.295422};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatlng,
        scrollwheel: false,
        scaleControl: false
    });

    var me_image = new google.maps.MarkerImage(
            'http://plebeosaur.us/etc/map/bluedot_retina.png',
            null, // size
            null, // origin
            new google.maps.Point(8, 8), // anchor (move to center of marker)
            new google.maps.Size(17, 17) // scaled size (required for Retina display icon)
            );
    var me = new google.maps.Marker({
        flat: true,
        position: myLatlng,
        map: map,
        title: 'I might be here',
        optimized: false,
        icon: me_image
                /*
                 icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                 new google.maps.Size(22, 22),
                 new google.maps.Point(0, 18),
                 new google.maps.Point(11, 11)),
                 */
    });

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'Click to zoom',
        visible: false
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            //map.panTo(marker.getPosition());
        }, 3000);
    });

    map.addListener('click', function (e) {
        addMarker(e.latLng, marker);
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();
        // populate yor box/field with lat, lng
        //alert("Lat=" + lat + "; Lng=" + lng);
    });

    me.addListener('click', function () {
        map.setZoom(8);
        map.setCenter(me.getPosition());
        alert(me.getPosition());
    });
}
function addMarker(position, marker) {
    marker.setPosition(position);
    marker.setVisible(true);
    //map.panTo(position);

    return false;
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    map.panTo(position);
}
