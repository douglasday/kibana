/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { HOST_STATS, NETWORK_STATS } from '../screens/overview';

import { expandHostStats, expandNetworkStats } from '../tasks/overview';
import { loginAndWaitForPage } from '../tasks/login';

import { OVERVIEW_URL } from '../urls/navigation';

describe('Overview Page', () => {
  before(() => {
    cy.stubSecurityApi('overview');
    cy.stubSearchStrategyApi('overview_search_strategy');
    loginAndWaitForPage(OVERVIEW_URL);
  });

  it('Host stats render with correct values', () => {
    expandHostStats();

    HOST_STATS.forEach((stat) => {
      cy.get(stat.domId).invoke('text').should('eq', stat.value);
    });
  });

  it('Network stats render with correct values', () => {
    expandNetworkStats();

    NETWORK_STATS.forEach((stat) => {
      cy.get(stat.domId).invoke('text').should('eq', stat.value);
    });
  });
});
