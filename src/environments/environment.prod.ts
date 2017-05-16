import { Level } from 'angular2-logger/core';

export const environment = {
  production: true,
  logger: {
    level: Level.WARN
  },
  dopplerRelayApi: {
    baseUrl: 'http://localhost:7541'
  }
};
