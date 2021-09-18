<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="warning">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name: 'Home'}">
          Mr.Empanada
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact>
              <b-button variant="danger" >Inicio</b-button>
            </b-nav-item>
            <b-nav-item :to="{name: 'Servicios'}">
              <b-button variant="danger">Servicios</b-button>
            </b-nav-item>
            <b-nav-item :to="{name: 'Noticias'}">
              <b-button variant="danger">Noticias</b-button>
            </b-nav-item>
            <b-nav-item :to="{name: 'Equipo'}">
              <b-button variant="danger">Equipo</b-button>
            </b-nav-item>
            <b-nav-item :to="{name: 'About'}">
              <b-button variant="danger">About</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>