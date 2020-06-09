/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { AlertTypeModel } from '../../../../triggers_actions_ui/public';
import { CLIENT_ALERT_TYPES } from '../../../common/constants';
import { TlsTranslations } from './translations';
import { AlertTypeInitializer } from '.';
import { AlertTls } from '../../components/overview/alerts/alerts_containers';

const { name, defaultActionMessage } = TlsTranslations;

export const initTlsAlertType: AlertTypeInitializer = (): AlertTypeModel => ({
  id: CLIENT_ALERT_TYPES.TLS,
  iconClass: 'uptimeApp',
  alertParamsExpression: (_params) => <AlertTls />,
  name,
  validate: () => ({ errors: {} }),
  defaultActionMessage,
  requiresAppContext: true,
});
