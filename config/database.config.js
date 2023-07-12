require('dotenv').config();

module.exports = {
    DB_URI: "mongodb://"+ `${process.env.DB_USERNAME}` + `:${process.env.DB_PASSWORD}` + "@localhost:" + `${process.env.PORT}/` + "?authMechanism=DEFAULT"
}
