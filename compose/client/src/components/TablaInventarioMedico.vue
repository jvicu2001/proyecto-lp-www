<template>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      class="elevation-1"
      item-key="name"
      @update:options="loadItems"
    >
    </v-data-table-server>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TablaInventarioMedico',
    data() {
      return {
        itemsPerPage: 10,
        headers: [
          { title: 'Medicamento', align: 'start', sortable: false, value: 'name' },
          { title: 'Contenido', align: 'end', value: 'content' },
          { title: 'Fabricante', align: 'end', value: 'manufacturer' },
          { title: 'Administración', align: 'end', value: 'type' },
          { title: 'Stock', align: 'end', value: 'stock' },
        ],
        serverItems: [],
        loading: true,
        totalItems: 0,
      };
    },
    methods: {
      loadItems({ page, itemsPerPage, sortBy }) {
        this.loading = true;
        axios
          .get('http://localhost:4000/medico/inventario', {
            params: {
              page,
              itemsPerPage,
              sortBy,
            },
          })
          .then((response) => {
            this.serverItems = response.data.items;
            this.totalItems = response.data.total;
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>