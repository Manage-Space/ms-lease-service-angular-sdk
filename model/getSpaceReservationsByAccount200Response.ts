/**
 * ManageSpace Lease API
 * ManageSpace Lease API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SpaceReservationResponse } from './spaceReservationResponse';


export interface GetSpaceReservationsByAccount200Response { 
    data?: Array<SpaceReservationResponse>;
    success?: boolean;
    error?: object;
}
