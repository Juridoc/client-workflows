/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Profiles from '@juridoc/client-profiles';
/**
 * Workflow event, internal entity class.
 */
export declare class Event extends Class.Null {
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Event date.
     */
    createdAt: Date;
    /**
     * Event action.
     */
    action: string;
    /**
     * Event parameters.
     */
    parameters: RestDB.Map<any>;
}
