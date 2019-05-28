/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Workflow update request.
 */
@RestDB.Schema.Entity('workflows/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Workflow name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;
}
