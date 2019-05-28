/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Workflows mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the workflow that corresponds to the specified workflow Id.
     * @param id Workflow Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the workflow entity.
     * @throws Throws an error when the workflow wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the workflow that corresponds to the specified workflow Id based on the given update request.
     * @param id Workflow Id.
     * @param request Workflow update request.
     * @returns Returns a promise to get true when the workflow was updated, false otherwise.
     * @throws Throws an error when the workflow wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Add a new message the workflow that corresponds to the specified Id based on the given message request.
     * @param id Issue Id.
     * @param request Message request.
     * @returns Returns a promise to get true when the message was added, false otherwise.
     * @throws Throws an error when the workflow wasn't found.
     */
    message(id: string, request: Requests.Message): Promise<boolean>;
    /**
     * Change the workflow that corresponds to the specified workflow Id based on the given change request.
     * @param id Workflow Id.
     * @param request Workflow change request.
     * @returns Returns a promise to get true when the workflow was changed, false otherwise.
     * @throws Throws an error when the workflow wasn't found.
     */
    change(id: string, request: Requests.Change): Promise<boolean>;
    /**
     * List all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the workflow list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of documents or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
