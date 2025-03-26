exports.up = (pgm) => {
    pgm.createTable("movies", {
        movie_id: {
            type: 'UUID',
            primaryKey: true,
            default: pgm.func('gen_random_uuid()'),
        },
        director: {
            type: "VARCHAR(100)",
            notNull: true,
        },
        title: {
            type: "VARCHAR(255)",
            notNull: true,
        }, 
        description: {
            type: "TEXT",
            notNull: true,
        },
        release_date: {
            type: "DATE",
            notNull: true,
        },
        duration: {
            type: "INTEGER",
            notNull: true,
            comment: "Duration in minutes",
        },
        rating: {
            type: "DECIMAL(3,1)",
            notNull: false,
            comment: "Average rating, e.g. 8.5",
        },
        category_id: {
            type: "INTEGER",
            references: '"categories"',
            onDelete: "CASCADE",
        },
        created_at: {
            type: 'timestamp',
            default: pgm.func('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: 'timestamp',
            default: pgm.func('CURRENT_TIMESTAMP'),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("movies");
};
