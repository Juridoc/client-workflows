/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Workflows mapper class.
 */
@Injection.Describe({ singleton: true, name: 'workflows' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Load the workflow that corresponds to the specified workflow Id.
   * @param id Workflow Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the workflow entity.
   * @throws Throws an error when the workflow wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the workflow that corresponds to the specified workflow Id based on the given update request.
   * @param id Workflow Id.
   * @param request Workflow update request.
   * @returns Returns a promise to get true when the workflow was updated, false otherwise.
   * @throws Throws an error when the workflow wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * Add a new message the workflow that corresponds to the specified Id based on the given message request.
   * @param id Issue Id.
   * @param request Message request.
   * @returns Returns a promise to get true when the message was added, false otherwise.
   * @throws Throws an error when the workflow wasn't found.
   */
  @Class.Public()
  public async message(id: string, request: Requests.Message): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Message, id, request))!;
  }

  /**
   * Change the workflow that corresponds to the specified workflow Id based on the given change request.
   * @param id Workflow Id.
   * @param request Workflow change request.
   * @returns Returns a promise to get true when the workflow was changed, false otherwise.
   * @throws Throws an error when the workflow wasn't found.
   */
  @Class.Public()
  public async change(id: string, request: Requests.Change): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Change, id, request))!;
  }

  /**
   * List all documents that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the workflow list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all documents that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of documents or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }
}
