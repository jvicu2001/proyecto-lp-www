<template>
    <TablaInventarioFarmacia2/>
    <!--<v-card>
        <v-card-title>
            <h2>Inventario Farmacia</h2>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            label="Buscar"
                            outlined
                            dense
                            clearable
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            color="primary"
                            class="mr-2"
                            @click="dialog = true"
                        >
                            <v-icon>mdi-plus</v-icon>
                            Nuevo
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="mr-2"
                            @click="dialog = true"
                        >
                            <v-icon>mdi-pencil</v-icon>
                            Editar
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="mr-2"
                            @click="dialog = true"
                        >
                            <v-icon>mdi-delete</v-icon>
                            Eliminar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>-->

</template>

<script>
import TablaInventarioFarmacia2 from '@/components/TablaInventarioFarmacia2.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'InventarioFarmacia',
    components: {
        TablaInventarioFarmacia2
    },
    data() {
        return {
        }
    },
    methods: {
    }
})
</script>