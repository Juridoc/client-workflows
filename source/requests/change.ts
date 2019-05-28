/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Workflow change request.
 */
@RestDB.Schema.Entity('workflows/{id}/change')
@Class.Describe()
export class Change extends Class.Null {
  /**
   * Content.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public content?: string;
}
