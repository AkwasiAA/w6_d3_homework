const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return modeofTransport = this.journeys.map(journey => journey.transport)
//   .filter((transport, index, self) => self.indexOf(transport) === index);
// };


Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportTypes = this.journeys.map((journey) => {
    return journey.transport;
  })

  // transport types =['train', 'train', 'aeroplane', 'car', 'ferry']
  const uniqueTransport = transportTypes.filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });

  return uniqueTransport
};




module.exports = Traveller;