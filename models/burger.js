const path = require("path");

const orm = require(path.join(__dirname, "..", "config", "orm.js"));

function getDate() {
    let time = new Date();

    time -= time.getTimezoneOffset() * 60000;

    return new Date(time).toISOString().slice(0, 19).replace("T", " ");
}

const burger = {
    "getBurgers": function(callback) {
        orm.selectAll("burgers", callback);
    },

    "addBurger": function(name, devoured, callback) {
        const object = {
            name,
            devoured,
            "date": getDate()
        }

        orm.insertOne("burgers", object, callback);
    },

    "updateBurger": function(id, name, devoured, callback) {
        const id_object = {
            "name" : "id",
            "value": id
        };

        const object = {
            name,
            devoured,
            "date": getDate()
        }
        
        orm.updateOne("burgers", id_object, object, callback);
    },

    "deleteBurger": function(id, callback) {
        const id_object = {
            "name" : "id",
            "value": id
        };
        
        orm.deleteOne("burgers", id_object, callback);
    }
};

module.exports = burger;