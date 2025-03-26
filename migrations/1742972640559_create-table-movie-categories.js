exports.up = (pgm) => {
    pgm.createTable("movie_categories", {
        movie_id: {
            type: 'UUID',
            notNull: true,
            primaryKey: true,
            references: "movies(movie_id)",
            onDelete: "CASCADE",
        },
        category_id: {
            type: "SERIAL",
            notNull: true,
            primaryKey: true,
            references: "categories(category_id)",
            onDelete: "CASCADE",
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
