const Medicine = require("../models/Medicine");


const medicineQuerys = `getMedicine(serie: Int): Medicine
    getMedicines: [Medicine]
`;

const medicineQueryTypes = `type Medicine {
    _id: ID
    serie: Int
    name: String
    dose: Int
    units: Int
}`;
const medicineMutations = `createMedicine(input: MedicineCreateInput): Medicine
    updateMedicine(serie: Int, input: MedicineUpdateInput): Medicine
    deleteMedicine(serie: Int): Medicine
    discountMedicine(serie: Int, input: Int): Medicine
`;

const medicineMutationTypes = `input MedicineCreateInput {
    serie: Int!
    name: String!
    dose: Int
    units: Int
}

input MedicineUpdateInput {
    name: String
    dose: Int
    units: Int
}
`;


const medicineResolversQuerys = {
    async getMedicine(_, { serie}) {
        const medicine = await Medicine.find({serie:serie});

        return medicine;
    },
    async getMedicines() {
        const medicines = await Medicine.find();

        return medicines;
    }
}

const medicineResolversMutations = {
    async createMedicine(_, { input }) {
        const newMedicine = new Medicine(input);
        console.log("owo")
        const savedMedicine = await newMedicine.save();

        return savedMedicine;
    },

    async updateMedicine(_, { serie, input }) {
        const updatedMedicine = await Medicine.findOneAndUpdate(
            { serie: serie },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedMedicine;
    },

    async deleteMedicine(_, { serie }) {
        const deletedMedicine = await Medicine.findOneAndDelete({ serie: serie });

        return deletedMedicine;
    },
    
    async discountMedicine(_, { serie, input }) {
        const medicine = await Medicine.find({serie: serie});

        console.log(medicine)

        const updatedMedicine = await Medicine.findOneAndUpdate(
            { serie: serie },
            { $set: { units: medicine[0].units - input } },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedMedicine;
    }    
}


module.exports = {
    medicineQuerys,
    medicineQueryTypes,
    medicineMutations,
    medicineMutationTypes,
    medicineResolversQuerys,
    medicineResolversMutations
}