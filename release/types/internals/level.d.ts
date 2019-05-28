/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Workflow level, internal entity class.
 */
export declare class Level extends Class.Null {
    /**
     * Level name.
     */
    name: string;
    /**
     * Contact list of members in this level.
     */
    contactsIdList: string[];
    /**
     * Contact list of viewer members in this level.
     */
    viewerContactsIdList: string[];
}
