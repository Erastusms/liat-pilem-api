exports.up = (pgm) => {
    pgm.createTable("reviews", {
        review_id: {
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
        rating: {
            type: "INTEGER",
            notNull: true,
            check: "rating BETWEEN 1 AND 10",
        },
        comment: {
            type: "TEXT",
        },
        created_at: {
            type: "TIMESTAMP",
            default: pgm.func("CURRENT_TIMESTAMP"),
        },
    });

    // Constraint: 1 user hanya bisa review 1 film 1 kali
    pgm.addConstraint("reviews", "unique_user_movie_review", "UNIQUE(user_id, movie_id)");
};

exports.down = (pgm) => {
    pgm.dropTable("reviews");
};
