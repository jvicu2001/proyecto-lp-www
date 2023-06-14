<template>
    <v-data-table-server
        v-model:itemsPerPage="itemsPerPage"
        :headers="headers"
        :items-length="totalItems"
        :items="serverItems"
        :loading="loading"
        class="elevation-1"
        item-value="name"
        @update:options="loadItems"
    >

    </v-data-table-server>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data: () => ({
            itemsPerPage: 10,
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
        methods: {
            loadItems({ page, itemsPerPage, sortBy }) {
                this.loading = true;
                axios.get('locahost:4000/medico/inventario', {
                    params: {
                        page,
                        itemsPerPage,
                        sortBy
                    }
                }).then(response => {
                    this.serverItems = response.data.items;
                    this.totalItems = response.data.total;
                    this.loading = false;
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>