<template>
    <v-table>
        <thead>
            <tr>
                <th v-for="header in headers" :key="header.key">
                    {{ header.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in serverItems" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.lab }}</td>
                <td>{{ item.method }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.critical_stock }}</td>
                <td>
                    <v-btn color="primary" @click="editItem(item.serie)">
                        Edit
                    </v-btn>
                    <v-btn color="error" @click="deleteItem(item.serie)">
                        Delete
                    </v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
  </template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent ({
    name: 'TablaInventarioFarmacia2',
    data: () => ({
        itemsPerPage: 10,
        headers: [
          {
            title: 'Nombre medicamento',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Contenido', key: 'content' },
            { title: 'Fabricante', key: 'manufacturer' },
            { title: 'Tipo de Administración', key: 'type' },
            { title: 'Stock', key: 'stock' },
            { title: 'Stock crítico', key: 'criticalStock' },
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        serverItems: [],
        loading: true,
        totalItems: 0,
    }),
    created() {
        this.loadItems();
    },
    methods: {
      loadItems() {
        axios.post('http://localhost:4000/graphql', {
          query: `
          query GetMedicines {
            getMedicines {
                content
                lab
                critical_stock
                method
                name
                serie
                stock
            }
          }
          `
        })
        .then(response => {
          this.serverItems = response.data.data.getMedicines;
        })
        .catch(error => {
          console.error(error);
        });
      },

      deleteItem(serie){
        axios.post('http://localhost:4000/graphql', {
          query: `
            mutation DeleteMedicine($serie: Int) {
                deleteMedicine(serie: $serie) {
                content
                critical_stock
                lab
                method
                name
                serie
                stock
                }
            }
            `,

          variables: {serie: serie}
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
})
</script>