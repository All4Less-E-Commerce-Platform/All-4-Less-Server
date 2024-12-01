export const options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PROD),
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development",
  migrationStorageTableName: "migrations",
};

if (process.env.NODE_ENV !== "development") {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: true,
    },
  };
}

export default {
  development: options,
  test: options,
  production: options,
};
