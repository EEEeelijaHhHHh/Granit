/* Google Map */
  var map;

  function initMap() {
    map = new google.maps.Map(document.querySelector('.map'), {
      center: {
        lat: 55.808729,
        lng: 37.969222
      },
      zoom: 10
    });
  }