/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('users', {
        user_id: {
            type: 'UUID',
            primaryKey: true,
            default: pgm.func('gen_random_uuid()'),
        },
        username: {
            type: 'varchar(50)',
            notNull: true,
            unique: true,
        },
        email: {
            type: 'varchar(100)',
            notNull: true,
            unique: true,
        },
        password_hash: {
            type: 'text',
            notNull: true,
        },
        role: {
            type: 'varchar(20)',
            notNull: true,
            default: 'member',
            check: "role IN ('admin', 'member')",
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

    pgm.createIndex('users', 'email', { unique: true });
    pgm.createIndex('users', 'username', { unique: true });
};

exports.down = (pgm) => {
    pgm.dropTable('users');
};