module.exports = {
    dialect: "postgres",
    url: process.env.DATABASE_URL, // Certifique-se de que DATABASE_URL está corretamente definida
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Para desenvolvimento, ajustar em produção
        },
    },
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
