/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiMessages from '@juridoc/client-messages';

/**
 * Workflows message entity class.
 */
@RestDB.Schema.Entity('workflows/{id}/message')
@Class.Describe()
export class Message extends ApiMessages.Requests.Create {}
