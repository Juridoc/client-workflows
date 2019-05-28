/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Contacts from '@juridoc/client-contacts';

import * as Types from './types';
import * as Internals from './internals';

/**
 * Workflow entity class.
 */
@RestDB.Schema.Entity('workflows')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Workflow Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Contact Id list of members in this level.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList!: string[];

  /**
   * Contact list of members in this level.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Contacts.Entity, [
    'id',
    'accountId',
    'pictureId',
    'name',
    'personal.firstName',
    'personal.lastName',
    'professional.denomination'
  ])
  @Class.Public()
  public contactList!: Contacts.Entity[];

  /**
   * Contact list of members who are viewers in the workflow.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public viewerContactsIdList!: string[];

  /**
   * Contact list of members who has accepted the workflow.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public acceptedContactsIdList!: string[];

  /**
   * Invitation list for members who isn't registered in the platform.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public pendingInvitationsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Start date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public startedAt?: Date;

  /**
   * Finish date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public finishedAt?: Date;

  /**
   * Workflow type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Common))
  @Class.Public()
  public type!: Types.Common;

  /**
   * Workflow status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Workflow name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Workflow content.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public content!: string;

  /**
   * Event list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Event)
  @Class.Public()
  public eventList!: Internals.Event[];

  /**
   * Test whether or not the given contact is a member.
   * @param contact Contact entity.
   * @returns Returns true when the specified contact is a member, false otherwise.
   */
  @Class.Public()
  public testMember(contact: Contacts.Entity): boolean {
    return this.contactsIdList.includes(contact.id);
  }

  /**
   * Test whether or not the given contact is a viewer.
   * @param contact Contact entity.
   * @returns Returns true when the specified contact is a viewer, false otherwise.
   */
  @Class.Public()
  public testViewer(contact: Contacts.Entity): boolean {
    return this.viewerContactsIdList.includes(contact.id);
  }
}
