<template>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col v-for="todo in todos" :key="todo.id" cols="12" sm="4">
          <v-card class="mx-auto pt-4" max-width="400" tile>
            <v-avatar class="d-flex ma-auto " color="primary" size="20">
              <img  :src="todo.thumbnailUrl" alt="John" />
            </v-avatar>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  Secondary line text Lorem ipsum dolor sit amet,
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  consectetur adipiscing elit.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: "Home",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  mounted() {
    this.$store.dispatch("getTodos");
  },
};
</script>
