/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Workflow level, internal entity class.
 */
@RestDB.Schema.Entity('workflows/level')
@Class.Describe()
export class Level extends Class.Null {
  /**
   * Level name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Contact list of members in this level.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList!: string[];

  /**
   * Contact list of viewer members in this level.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public viewerContactsIdList!: string[];
}
