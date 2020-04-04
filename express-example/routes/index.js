const express = require('express');
const controllers = require('../controllers/cities');

const router = express.Router();

router.get('/', (request, response) => {
  controllers
    .getCities()
    .then(cities => response.json(cities))
    .catch(err => {
      console.log(err);
      response.status(500);
      response.end('smth went wrong');
    });
});

router.get('/:id', (request, response) => {
  controllers
    .getCity(+request.params.id)
    .then(city => {
      if (!city) {
        response.status(400);
        response.end();
        return;
      }
      response.json(city);
    })
    .catch(err => {
      console.log(err);
      response.status(404);
      response.end('smth went wrong');
    });
});

router.post('/', (request, response) => {
  controllers
    .addCity(request.body)
    .then(() => {
      response.status(200);
      response.end('Saved');
    })
    .catch(err => {
      console.log(err);
      response.status(500);
      response.end('Smth went wrong');
    });
});

module.exports = router;
