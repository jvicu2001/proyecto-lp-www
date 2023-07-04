<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
    <v-select v-model="selectedMedication" :items="Medicines" label="Medicamento"></v-select>
    <v-btn @click="addMedication">Agregar</v-btn>
    <v-table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in selectedMedications" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.method }}</td>
          <td> <v-text-field></v-text-field> </td>
          <td> <v-text-field></v-text-field> </td>
          <td> <v-text-field></v-text-field> </td>
        </tr>
      </tbody>
    </v-table>
  </v-form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'RecipeBuilder',
    data: () => ({
      headers:[
        {
          title: 'Nombre Medicamento',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Cantidad disponible', key: 'stock', align: 'end' },
        { title: 'Metodo de administracion', key: 'method', align: 'end' },
        { title: 'Dosis', key: 'dose', align: 'end' },
        { title: 'Frecuencia de consumo', key: 'frecuency', align: 'end' },
        { title: 'Duracion del tratamiento', key: 'period', align: 'end' },
        { title: 'Acciones', key: 'actions', align: 'end' },
      ],
      Medicines: [
        {
          name: "Paracetamol",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Ibuprofeno",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Amoxicilina",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Omeprazol",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Loratadina",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Diazepam",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Dipirona",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Clonazepam",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
        {
          name: "Cetirizina",
          stock: "10",
          method: "Oral",
          dose: "1",
          period: "1",
        },
      ],
      selectedMedication: {
        name: "",
        stock: "",
        method: "",
        dose: "",
        period: ""
      },
      selectedMedications: []
    }),
    methods: {
      addMedication() {
        if (this.selectedMedication !== null) {
        this.selectedMedications.push(this.selectedMedication);
        this.selectedMedication = null;
      }
      }
    },
});
</script>