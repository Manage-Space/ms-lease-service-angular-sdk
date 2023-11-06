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
import { SubscriptionStatusResponse } from './subscriptionStatusResponse';


export interface LeaseResponseSubscription { 
    /**
     * Subscription ID
     */
    subscriptionId: string;
    /**
     * Amount of the subscription
     */
    amount: number;
    /**
     * Currency of the subscription amount
     */
    currency: string;
    /**
     * Subscription start date
     */
    startDate: string;
    /**
     * Billing cycle anchor date
     */
    billingCycleAnchor: string;
    /**
     * Subscription fee percent
     */
    feePercent: number;
    subscriptionStatus: SubscriptionStatusResponse;
    /**
     * Payment provider id
     */
    paymentProviderId: string;
    /**
     * Billing cycle anchor date
     */
    paymentProviderBillingCycleAnchor: string;
}

