exports.up = (pgm) => {
    pgm.createTable("watchlist", {
        watchlist_id: {
            type: "SERIAL",
            primaryKey: true,
        },
        user_id: {
            type: 'UUID',
            notNull: true,
            references: "users(user_id)",
            onDelete: "CASCADE",
        },
        movie_id: {
            type: 'UUID',
            notNull: true,
            references: "movies(movie_id)",
            onDelete: "CASCADE",
        },
        status: {
            type: "VARCHAR(20)",
            notNull: true,
            check: "status IN ('planned', 'watching', 'completed')",
        },
        created_at: {
            type: "TIMESTAMP",
            default: pgm.func("CURRENT_TIMESTAMP"),
        },
    });

    // Constraint: 1 user hanya bisa menambahkan 1 film 1 kali ke watchlist
    pgm.addConstraint("watchlist", "unique_user_movie_watchlist", "UNIQUE(user_id, movie_id)");
};

exports.down = (pgm) => {
    pgm.dropTable("watchlist");
};
