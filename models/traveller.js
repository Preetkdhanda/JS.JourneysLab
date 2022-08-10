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

  result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return result

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {


  let result = this.journeys.map((journey) => {
    return journey.transport
  });
  let uniquetransport= new Set(result);
  return Array.from(uniquetransport)
    
  }



  


module.exports = Traveller;
