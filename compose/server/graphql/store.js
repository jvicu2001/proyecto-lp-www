const Store = require("../models/Store");

const storeQuerys = `getStore(medicineId: Int): Store
    getStores: [Store]
`;

const storeQueryTypes = `type Store {
    _id: ID
    medicineId: Int
    units: Int
}`;

const storeMutations = `createStore(input: StoreCreateInput): Store
    updateStore(medicineId: Int, input: StoreUpdateInput): Store
    deleteStore(medicineId: Int): Store
`;

const storeMutationTypes = `input StoreCreateInput {
    medicineId: Int!
    units: Int!
}

input StoreUpdateInput {
    medicineId: Int
    units: Int
}`;


const storeResolversQuerys = {
    async getStore(_, {serie}) {
        const store = await Store.find({medicineId: serie});

        return store;
    },
    async getStores() {
        const stores = await Store.find();

        return stores;
    }
}

const storeResolversMutations = {
    async createStore(_, { input }) {
        const newStore = new Store(input);
        const savedStore = await newStore.save();

        return savedStore;
    },

    async updateStore(_, { _id, input }) {
        const updatedStore = await Store.findOneAndUpdate(
            { _id: _id },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedStore;
    },

    async deleteStore(_, { _id }) {
        const deletedStore = await Store.findOneAndDelete({ _id: _id });

        return deletedStore;
    }
}


module.exports = {
    storeQuerys,
    storeQueryTypes,
    storeMutations,
    storeMutationTypes,
    storeResolversQuerys,
    storeResolversMutations
}