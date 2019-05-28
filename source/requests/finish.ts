/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Workflows finish request.
 */
@RestDB.Schema.Entity('workflows/{id}/finish')
@Class.Describe()
export class Finish extends Class.Null {
  /**
   * Workflow status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Finish.Status))
  @Class.Public()
  public status!: Types.Finish.Status;
}
