const mongoose = require('mongoose');

const weather_schema = new mongoose.Schema({

  coord: {

    longitude: {
      type: Number,
      required: true,
    }

    latitude: {
      type: Number,
      required: true,
    }

    weather: {

      main : {
        type: String,
        required: true,
      },

      description : {
        type: String,
        required: true,
      }
    }

    main: {

      temp:{
        type: Number,
        required: true,
      }

      pressure: {
        type: Number,
        required: true,
      }

      humidity: {
        type: Number,
        required: true,
      }

      temp_min: {
        type: Number,
        required: true,
      }

      temp_max: {
        type: Number,
        required: true,
      }
    }

    wind: {
      speed: {
        type: Number,
        required: true,
      }

      deg:{
        type: Number,
        required: true,
      }
    }
  }

  /*idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group_schema',
  }*/
});

const weather = module.exports = mongoose.model('weather', weather_schema);
});
