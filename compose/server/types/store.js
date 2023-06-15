const Store = require("../models/Store");

const storeQuerys = `getStore(_id: ID): Store
    getStores: [Store]
`;

const storeQueryTypes = `type Store {
    _id: ID
    medicineId: ID
    units: Int
}`;

const storeMutations = `createStore(input: StoreCreateInput): Store
    updateStore(_id: ID, input: StoreUpdateInput): Store
    deleteStore(_id: ID): Store
`;

const storeMutationTypes = `input StoreCreateInput {
    medicineId: ID!
    units: Int!
}

input StoreUpdateInput {
    medicineId: ID
    units: Int
}`;


const storeResolversQuerys = {
    async getStore(_, { _id }) {
        const store = await Store.findById(_id);

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
        const deletedStore = await Store.findOneAndDelete(_id);

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