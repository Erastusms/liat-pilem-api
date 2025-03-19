exports.up = (pgm) => {
    pgm.createTable("categories", {
        category_id: {
            type: "SERIAL",
            primaryKey: true,
        },
        name: {
            type: "VARCHAR(100)",
            notNull: true,
            unique: true,
        },
        created_at: {
            type: "TIMESTAMP",
            default: pgm.func("CURRENT_TIMESTAMP"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("categories");
};
