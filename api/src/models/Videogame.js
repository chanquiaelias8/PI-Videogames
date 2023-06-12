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
          args: [1],
          msg: 'Rating must be a positive number.',
        },
        max: {
          args: [10],
          msg: 'Rating cannot exceed 10.',
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
      type: DataTypes.ARRAY(DataTypes.JSONB),
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
      type: DataTypes.ARRAY(DataTypes.JSONB),
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