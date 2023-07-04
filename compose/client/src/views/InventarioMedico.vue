<template>
    <div>
        <TablaInvanterioMedicoVue />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import TablaInvanterioMedicoVue from '@/components/TablaInvanterioMedico.vue';

export default defineComponent ({
    name: 'InventarioMedico',
    components: {
        TablaInvanterioMedicoVue
    },  
    methods: {},
})
</script>