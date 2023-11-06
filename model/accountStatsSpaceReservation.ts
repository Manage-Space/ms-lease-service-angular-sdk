/**
 * ManageSpace Lease API
 * ManageSpace Lease API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface AccountStatsSpaceReservation { 
    /**
     * The unique identifier for the account
     */
    accountId: string;
    /**
     * The name of the account
     */
    accountName: string;
    /**
     * The email of the account
     */
    email: string;
    /**
     * The phone number of the account
     */
    phoneNumber: string;
    /**
     * The count of reserved spaces for an account.
     */
    reservedCount: number;
}

