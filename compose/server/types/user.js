const User = require("../models/User");


const userQuerys = `getUser(_id: ID): User
    getUsers: [User]
`;

const userMutations = `createUser(input: UserCreateInput): User
    updateUser(_id: ID, input: UserUpdateInput): User
    deleteUser(_id: ID): User
`;


const userResolversQuerys = {
    async getUser(_, { _id }) {
        const user = await User.findById(_id);

        return user;
    },
    async getUsers() {
        const users = await User.find();

        return users;
    }
}

const userResolversMutations = {
    async createUser(_, { input }) {
        const newUser = new User(input);
        const savedUser = await newUser.save();

        return savedUser;
    },

    async updateUser(_, { _id, input }) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: _id },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedUser;
    },

    async deleteUser(_, { _id }) {
        const deletedUser = await User.findOneAndDelete(_id);

        return deletedUser;
    }
}


module.exports = {
    userQuerys,
    userMutations,
    userResolversQuerys,
    userResolversMutations
}