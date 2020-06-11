'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "members", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "users",
    "created": "2020-06-06T01:05:24.482Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "members",
            {
                "idmembers": {
                    "type": Sequelize.INTEGER(5),
                    "field": "idmembers",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING(45),
                    "field": "firstName",
                    "allowNull": false
                },
                "lastName": {
                    "type": Sequelize.STRING(45),
                    "field": "lastName",
                    "allowNull": false
                },
                "guardianNameFirst": {
                    "type": Sequelize.STRING(45),
                    "field": "guardianNameFirst",
                    "allowNull": false
                },
                "guardianLastName": {
                    "type": Sequelize.STRING(45),
                    "field": "guardianLastName",
                    "allowNull": false
                },
                "guardianPhone": {
                    "type": Sequelize.INTEGER(10),
                    "field": "guardianPhone",
                    "allowNull": false
                },
                "membersAge": {
                    "type": Sequelize.INTEGER(3),
                    "field": "membersAge",
                    "allowNull": false
                },
                "attendance": {
                    "type": Sequelize.BOOLEAN,
                    "field": "attendance",
                    "default": false,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "userName": {
                    "type": Sequelize.STRING,
                    "field": "userName",
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
