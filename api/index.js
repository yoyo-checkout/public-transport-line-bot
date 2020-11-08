const apiConfig = require('./config');

const fetchLiveTrainDelay = (payload) => {
  return apiConfig.v2.get('/Rail/TRA/LiveTrainDelay', {
    params: {
      $filter: `StationID eq '${payload.stationId}'`,
    },
  });
}

module.exports = {
  fetchLiveTrainDelay,
};