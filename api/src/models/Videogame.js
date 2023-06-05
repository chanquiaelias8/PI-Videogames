const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required.',
        },
        notEmpty: {
          msg: 'Name cannot be empty.',
        },
      },
      defaultValue: "Game Title",
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://example.com/game_background.jpg",
      validate: {
        notNull: {
          msg: 'Background image is required.',
        },
        notEmpty: {
          msg: 'Background image cannot be empty.',
        },
      }
    },
    released: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'La fecha de lanzamiento debe ser una fecha válida.'
        }
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Rating is required.',
        },
        min: {
          args: [0],
          msg: 'Rating must be a positive number.',
        },
        max: {
          args: [5],
          msg: 'Rating cannot exceed 5.',
        },
      },
      defaultValue: 4.5,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required.',
        },
        notEmpty: {
          msg: 'Description cannot be empty.',
        },
      },
      defaultValue: "This is a fantastic game with immersive gameplay and stunning graphics.",
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Platforms is required.',
        },
        notEmpty: {
          msg: 'Platforms cannot be empty.',
        },
      },
      defaultValue: ["PC", "PlayStation 5", "Xbox Series X"],
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Genres is required.',
        },
        notEmpty: {
          msg: 'Genres cannot be empty.',
        },
      },
      defaultValue: ["Action", "Adventure", "RPG"],
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  } , {timestamps: false, freezeTableName: true});
};

/* {
  "id": "ce7feefc-eb61-4b32-81d5-f60e4d22b310",
  "name": "videogame 3",
  "background_image": "https://example.com/game_background.jpg",
  "released": "2023-06-05T18:42:29.022Z",
  "rating": 4.5,
  "description": "este es el videogame 3",
  "platforms": [],
  "genres": [],
  "created": true
},
{
  "id": 3498,
  "name": "Grand Theft Auto V",
  "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  "released": "2013-09-17",
  "rating": 4.47,
  "platforms": [],
  "genres": [],
  "created": false
},
{
  "id": 3328,
  "name": "The Witcher 3: Wild Hunt",
  "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  "released": "2015-05-18",
  "rating": 4.66,
  "platforms": [],
  "genres": [],
  "created": false
}
*/
