<template>
  <div>
    <!-- <label>Update myDataProperty
      <input :value="myDataProperty" @input="updateMyProperty($event)"/>
    </label>
    <div>{{ myDataProperty }}</div> -->
    <Game></Game>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Game from "../components/Game.vue"

@Component({
 components: { Game },  
})
export default class App extends Vue {
}
</script>
