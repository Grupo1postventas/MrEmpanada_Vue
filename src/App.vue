<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="warning">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Home' }">
          <b-img
            :src="require('./assets/S1.png')"
            alt="Fluid image"
          ></b-img>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav class="justify-content-center">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }" exact>
              <b-button variant="danger">Inicio</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Servicios' }">
              <b-button variant="danger">Servicios</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Noticias' }">
              <b-button variant="danger">Noticias</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Equipo' }">
              <b-button variant="danger">Equipo</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- Fin Header -->

    <b-container class="mt-5"></b-container>

    <router-view />

    <!-- Footer -->
    <v-footer dark padless class="mt-5">
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>