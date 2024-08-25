import Sequelize from "sequelize";
import configDatabase from "../config/database";
import User from "../app/models/User";
import Product from "../app/models/Product";
import Category from "../app/models/Category";

const models = [User, Product, Category];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // Cria uma instância do Sequelize com base na configuração
        this.connection = new Sequelize(configDatabase.url, {
            dialect: configDatabase.dialect,
            dialectOptions: configDatabase.dialectOptions,
            define: configDatabase.define,
        });

        // Inicializa os modelos
        models
            .map((model) => model.init(this.connection))
            .map((model) => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();
