const User = require("../models/User");


const userQuerys = `getUser(_id: ID): User
    getUsers: [User]
`;

const userQueryTypes = `type User {
    _id: ID
    name: String
    rut: Int
    codeId: Int
    password: String
    role: String
    speciality: String
}`;

const userMutations = `createUser(input: UserCreateInput): User
    updateUser(_id: ID, input: UserUpdateInput): User
    deleteUser(_id: ID): User
`;

const userMutationTypes = `input UserCreateInput {
    name: String!
    rut: Int!
    codeId: Int!
    password: String!
    role: String!
    speciality: String!
}

input UserUpdateInput {
    name: String
    rut: Int
    codeId: Int
    password: String
    role: String
    speciality: String
}`;


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
        input.password = await User.encryptPassword(input.password);

        const newUser = new User(input);
        const savedUser = await newUser.save();

        return savedUser;
    },

    async updateUser(_, { _id, input }) {
        if (input.password) {
            input.password = await User.encryptPassword(input.password);
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: _id },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedUser;
    },

    async deleteUser(_, { _id }) {
        const deletedUser = await User.findOneAndDelete({ _id: _id });

        return deletedUser;
    }
}


module.exports = {
    userQuerys,
    userQueryTypes,
    userMutations,
    userMutationTypes,
    userResolversQuerys,
    userResolversMutations
}