<template>
  <div class="home">
    <b-container fluid>
      <h1>Simple Apps</h1>
      <b-row>
        <b-col cols="9">
          <GmapMap
            :center="coordinate"
            :zoom="17"
            map-type-id="terrain"
            style="width: 100%; height: 550px"
          >
            <GmapMarker
              :position="coordinate"
              :clickable="true"
              :draggable="true"
              @click="klikMarker"
            />
          </GmapMap>
        </b-col>
        <b-col cols="3" class="text-left">
          <h5>
            Select your location by clicking on the marker icon to get your
            current location data!
          </h5>
          <hr />
          <h6>
            Your Lat: <strong> {{ coordinate.lat }} </strong>
          </h6>
          <h6>
            Your Lng: <strong>{{ coordinate.lng }}</strong>
          </h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      coordinate: {
        lat: 0,
        lng: 0
      }
    }
  },
  created() {
    this.$getLocation()
      /* eslint-disable */
      .then((coordinates) => {
        this.coordinate = {
          lat: coordinates.lat,
          lng: coordinates.lng
        }
        console.log(this.coordinate)
      })
      .catch((error) => {
        alert(error)
      })
  },
  methods: {
    klikMarker(position) {
      // console.log('clicked')
      // console.log(position.latLng.lat())
      // console.log(position.latLng.lng())
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng()
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding: 25px;
}
</style>