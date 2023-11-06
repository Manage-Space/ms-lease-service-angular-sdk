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
import { SpaceReservationFeature } from './spaceReservationFeature';
import { ReservationStatus } from './reservationStatus';


export interface SpaceReservationResponse { 
    /**
     * Space reservation ID
     */
    spaceReservationId: string;
    /**
     * Site ID
     */
    siteId: string;
    /**
     * Organization ID
     */
    orgId: string;
    /**
     * Account ID
     */
    accountId: string;
    /**
     * Account Name
     */
    accountName: string;
    /**
     * Account Email Address
     */
    email: string | null;
    /**
     * Account Mobile Number
     */
    mobileNumber: string;
    /**
     * Reservation notes
     */
    notes: string | null;
    /**
     * Expires at
     */
    expiresAt: string;
    /**
     * List of reservation features
     */
    features: Array<SpaceReservationFeature>;
    /**
     * Minimum price
     */
    minPrice: number;
    /**
     * Maximum price
     */
    maxPrice: number;
    /**
     * Length
     */
    length: number;
    /**
     * Width
     */
    width: number;
    /**
     * Height
     */
    height: number | null;
    /**
     * Created date
     */
    createdAt: string;
    /**
     * Created By
     */
    createdBy: string;
    /**
     * Updated date
     */
    updatedAt: string | null;
    /**
     * Updated by
     */
    updatedBy: string | null;
    status: ReservationStatus;
}

