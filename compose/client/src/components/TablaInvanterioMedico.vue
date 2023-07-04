<template>
    <v-table>
        <thead>
            <tr>
                <th v-for="header in headers" :key="header.title" :class="`text-${header.align}`">
                    {{ header.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in serverItems" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.manufacturer }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.stock }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'TablaInventarioMedico',
    data: () => ({
        headers: [
                {
                    title: 'Medicamento',
                    align: 'start',
                    sortable: false,
                    key: 'name',
                },
            { title: 'Contenido', key: 'content', align: 'end' },
            { title: 'Fabricante', key: 'manufacturer', align: 'end' },
            { title: 'Administración', key: 'type', align: 'end' },
            { title: 'Stock', key: 'stock', align: 'end' },
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
            query {
              getMedicines {
                dose
                name
                serie
                units
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
    }
})
</script>