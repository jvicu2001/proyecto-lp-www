const Medicine = require("../models/Medicine");


const medicineQuerys = `getMedicine(_id: ID): Medicine
    getMedicines: [Medicine]
`;

const medicineQueryTypes = `type Medicine {
    _id: ID
    name: String
    dose: Int
    units: Int
}`;

const medicineMutations = `createMedicine(input: MedicineCreateInput): Medicine
    updateMedicine(_id: ID, input: MedicineUpdateInput): Medicine
    deleteMedicine(_id: ID): Medicine
`;

const medicineMutationTypes = `input MedicineCreateInput {
    name: String!
    dose: Int
    units: Int
}

input MedicineUpdateInput {
    name: String
    dose: Int
    units: Int
}`;


const medicineResolversQuerys = {
    async getMedicine(_, { _id }) {
        const medicine = await Medicine.findById(_id);

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

    async updateMedicine(_, { _id, input }) {
        const updatedMedicine = await Medicine.findOneAndUpdate(
            { _id: _id },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedMedicine;
    },

    async deleteMedicine(_, { _id }) {
        const deletedMedicine = await Medicine.findOneAndDelete(_id);

        return deletedMedicine;
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