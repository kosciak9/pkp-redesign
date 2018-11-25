<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="//randomuser.me/api/portraits/men/93.jpg">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="title">
                Jan Kowalski
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <v-list-group v-model="accounts" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-sub-title>
              jan.kowalski@przyklad.pl
            </v-list-tile-sub-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Indywidualny</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
      <v-list dense>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>directions_railway</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Przejazd</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push('/tickets')">
          <v-list-tile-action>
            <v-icon>shopping_cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bilety</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Informacje</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PKP Intercity</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      accounts: false
    }
  }
}
</script>
