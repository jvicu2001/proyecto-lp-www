const User = require("../models/User");
const { ApolloError } = require("apollo-server-errors");
const jwt = require("jsonwebtoken");

require('dotenv').config()


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
    token: String
}`;

const userMutations = `createUser(input: UserCreateInput): User
    updateUser(_id: ID, input: UserUpdateInput): User
    deleteUser(_id: ID): User
    loginUser(input: UserLoginInput): User
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
}

input UserLoginInput {
    codeId: Int!
    password: String!
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
        const oldUser = await User.findOne({ codeId: input.codeId });

        if (oldUser) {
            throw new ApolloError("Ya existe un usuario con este ID!", "USER_ALREADY_EXISTS");
        }

        input.password = await User.encryptPassword(input.password);
        const newUser = new User(input);
        
        const token = jwt.sign(
            { userId: newUser._id, codeId: input.codeId },
            process.env.JWT_SECRET,
            {
                expiresIn: "72h"
            }
        );
        newUser.token = token;

        const savedUser = await newUser.save();

        return {
            id: savedUser.id,
            ...savedUser._doc
        };
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
    },

    async loginUser(_, { input }) {
        const user = await User.findOne({ codeId: input.codeId });
        if (!user) {
            throw new ApolloError("Credenciales incorrectas. Inténtelo nuevamente.", "USER_LOGIN_ERROR");
        }

        comparedPasswords = await User.comparePassword(user.password, input.password);
        if (!comparedPasswords) {
            throw new ApolloError("Credenciales incorrectas. Inténtelo nuevamente.", "USER_LOGIN_ERROR");
        }

        const token = jwt.sign(
            { userId: user._id, codeId: input.codeId },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }
        );
        user.token = token;

        return {
            id: user.id,
            ...user._doc
        }
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