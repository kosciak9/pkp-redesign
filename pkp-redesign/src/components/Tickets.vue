<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <h1>Kup bilet na PKP Intercity</h1>
        <v-form>
          <v-autocomplete v-model="startStation" label="Stacja początkowa" prepend-icon="room" :items="stations">
          </v-autocomplete>
          <v-autocomplete v-model="endStation" label="Stacja końcowa" prepend-icon="room" :items="stations">
          </v-autocomplete>
          <v-menu ref="menu" v-model="timeMenu" lazy transition="scale-transition" offset-y full-width>
            <v-text-field slot="activator" v-model="startTime" label="Godzina odjazdu" prepend-icon="access_time" readonly>
            </v-text-field>
            <v-time-picker v-if="timeMenu" v-model="startTime" full-width @click="$refs.menu.save(startTime)">
            </v-time-picker>
          </v-menu>
          <v-menu ref="dateMenu" v-model="dateMenu" lazy transition="scale-transition" offset-y full-width>
            <v-text-field slot="activator" v-model="startDate" label="Data odjazdu" prepend-icon="event">
            </v-text-field>
            <v-date-picker v-model="startDate" full-width scrollable no-title>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(startDate)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-flex>
            <v-btn class="adjust" color="info" @click="dialog = true">
              <v-icon left>filter_list</v-icon>
              Dostosuj
            </v-btn>
            <v-btn class="search" color="success" @click="timetable = true">
              <v-icon left>search</v-icon>
              Szukaj - 25 wyników
            </v-btn>
          </v-flex>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="pa-5">
          <v-toolbar dark>
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Dostosuj</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-layout class="pa-5" column wrap>
            <v-form>
              <h3>Typ składu</h3>
              <v-container fluid>
                <v-checkbox v-model="trainType" label="Twoje Linie Kolejowe" value="tlk"></v-checkbox>
                <v-checkbox v-model="trainType" label="Express InterCity" value="icc"></v-checkbox>
                <v-checkbox v-model="trainType" label="Express InterCity Premium" value="icp"></v-checkbox>
              </v-container>
              <h3>Rodzaj zniżki:</h3>
              <v-radio-group v-model="discountType" column>
                <v-radio label="Brak zniżki" value="none"></v-radio>
                <v-radio label="Studencka (-51%)" value="student"></v-radio>
                <v-radio label="Inne" value="other"></v-radio>
              </v-radio-group>
              <v-autocomplete label="Wpisz tutaj nazwę zniżki" v-model="specialDiscount" :items="specialDiscounts" :disabled="otherDiscount">
              </v-autocomplete>
            </v-form>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="timetable" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="pa-5">
          <v-toolbar dark>
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Dostępne połączenia</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="timetable = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-layout class="pa-5" column wrap>
              <v-flex xs12 sm6>
                <v-card>
                  <v-list two-line subheader>
                  <v-list-tile avatar @click="">
                    <v-list-tile-avatar>
                      <h3>19:43</h3>
                    </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>RL15 - Warszawa Centralna</v-list-tile-title>
                    <v-list-tile-sub-title>
                      2h20min
                      <v-icon color="grey lighten-1">accessible</v-icon>
                      <v-icon color="green lighten-1">adjust</v-icon>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action style="flex-direction: row; justify-content: center; align-items: center;">
                    <h3>53.00zł</h3><v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    timetable: false,
    notifications: false,
    sound: true,
    widgets: false,
    startStation: '',
    endStation: '',
    startDate: null,
    dateMenu: false,
    startTime: null,
    timeMenu: false,
    trainType: [],
    stations: [
      'Kraków Główny',
      'Warszawa Centralna'
    ],
    discountType: '',
    specialDiscount: '',
    specialDiscounts: [
      'Karta Dużej Rodziny (-30%)',
      'Wojskowy umundurowany (-100%)'
    ]
  }),
  computed: {
    otherDiscount: function () {
      return !(this.discountType === 'other');
    }
  }
}
</script>

<style>
.map {
  height: 100%;
  width: auto;
  /* margin-left: 40px; */
  margin-right: 40px;
}

.search {
  width: 70%;
  margin-left: 5%;
  margin-right: 0;
}

.adjust {
  width: 25%;
  margin-right: 0;
  margin-left: 0;
}
</style>
