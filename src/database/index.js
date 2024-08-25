import Sequelize from "sequelize";
import configDatabase from "../config/database";
import User from "../app/models/User";
import Product from "../app/models/Product";
import Category from "../app/models/Category";
import mongoose from "mongoose";
const models = [User, Product, Category];


class Database {
    constructor() {
        this.init();
        this.mongo();
    }
    init() {
        this.connection = new Sequelize("postgresql://neondb_owner:Vem3kHEyo6LX@ep-lucky-salad-a5aj6sex.us-east-2.aws.neon.tech/neondb?sslmode=require");
        models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models),
        );
    }
    mongo() {
        this.mongoConnection = mongoose.connect("mongodb://mongo:AvrNlaPgkhQNRKYebUbNBLGCOkrbbYLR@autorack.proxy.rlwy.net:39535",

        );
    }
}
export default new Database();