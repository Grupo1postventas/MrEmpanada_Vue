<template>
  <div class="mt-5">
    <b-container>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
          title="Combos"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="/servicios/combos" variant="primary">Ir a Combos</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
          title="Empanadas"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="/servicios/empanadas" variant="primary">Ir a Empanadas</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
          title="Bebidas"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="/servicios/bebidas" variant="primary">Ir a Bebidas</b-button>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Servicios",
};
</script>