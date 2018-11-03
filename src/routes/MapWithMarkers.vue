<template>
  <GmapMap :center="{lat:41.6032, lng:-73.0877}" :zoom="8" map-type-id="roadmap" style="width: 500px; height: 300px">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
  </GmapMap>
</template>

<script>
// make request here to data.ct.gov api to get a list of the pharmacies addresses, use the geocode(https://www.npmjs.com/package/geocoder) to populate markers with proper lat and long,
// use the pharamacy name for the infoText
export default {
  name: "Gmap",
  props: ['type'],
  data: function () {
    return {
      markers: [{ "position": { "lat": 47.376332, "lng": 8.547511 }, "infoText": "Marker 1" }, { "position": { "lat": 47.374592, "lng": 8.548867 }, "infoText": "Marker 2" }, { "position": { "lat": 47.379592, "lng": 8.549867 }, "infoText": "Marker 3" }]
    }
  },
  components: {
    // add the three buttons as one component here to render under the map
  }
};
</script>
