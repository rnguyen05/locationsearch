<script>
        function initAutocomplete() {
            var placeSearch, autocomplete;
          // Create the autocomplete object, restricting the search to geographical
          // location types.
          autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('search-input')),
            { types: ['geocode'] });
        //   //Load map with assigned locator
        //   var map = new google.maps.Map(document.getElementById('map'), {
        //     mapTypeControl: false,
        //     center: { lat: 34.251268, lng: -118.441183 },
        //     zoom: 18
        //   });
          //new AutocompleteDirectionsHandler(map);
        }
</script>

