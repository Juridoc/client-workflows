/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Contacts from '@juridoc/client-contacts';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Workflow entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Workflow Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * Contact Id list of members in this level.
     */
    contactsIdList: string[];
    /**
     * Contact list of members in this level.
     */
    contactList: Contacts.Entity[];
    /**
     * Contact list of members who are viewers in the workflow.
     */
    viewerContactsIdList: string[];
    /**
     * Contact list of members who has accepted the workflow.
     */
    acceptedContactsIdList: string[];
    /**
     * Invitation list for members who isn't registered in the platform.
     */
    pendingInvitationsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Start date.
     */
    startedAt?: Date;
    /**
     * Finish date.
     */
    finishedAt?: Date;
    /**
     * Workflow type.
     */
    type: Types.Common;
    /**
     * Workflow status.
     */
    status: Types.Status;
    /**
     * Workflow name.
     */
    name: string;
    /**
     * Workflow content.
     */
    content: string;
    /**
     * Event list.
     */
    eventList: Internals.Event[];
    /**
     * Test whether or not the given contact is a member.
     * @param contact Contact entity.
     * @returns Returns true when the specified contact is a member, false otherwise.
     */
    testMember(contact: Contacts.Entity): boolean;
    /**
     * Test whether or not the given contact is a viewer.
     * @param contact Contact entity.
     * @returns Returns true when the specified contact is a viewer, false otherwise.
     */
    testViewer(contact: Contacts.Entity): boolean;
}
