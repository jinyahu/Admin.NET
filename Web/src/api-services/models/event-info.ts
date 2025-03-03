/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { CustomAttributeData } from './custom-attribute-data';
import { EventAttributes } from './event-attributes';
import { MemberTypes } from './member-types';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { Type } from './type';
 /**
 * 
 *
 * @export
 * @interface EventInfo
 */
export interface EventInfo {

    /**
     * @type {string}
     * @memberof EventInfo
     */
    name?: string | null;

    /**
     * @type {Type}
     * @memberof EventInfo
     */
    declaringType?: Type;

    /**
     * @type {Type}
     * @memberof EventInfo
     */
    reflectedType?: Type;

    /**
     * @type {Module}
     * @memberof EventInfo
     */
    module?: Module;

    /**
     * @type {Array<CustomAttributeData>}
     * @memberof EventInfo
     */
    customAttributes?: Array<CustomAttributeData> | null;

    /**
     * @type {boolean}
     * @memberof EventInfo
     */
    isCollectible?: boolean;

    /**
     * @type {number}
     * @memberof EventInfo
     */
    metadataToken?: number;

    /**
     * @type {MemberTypes}
     * @memberof EventInfo
     */
    memberType?: MemberTypes;

    /**
     * @type {EventAttributes}
     * @memberof EventInfo
     */
    attributes?: EventAttributes;

    /**
     * @type {boolean}
     * @memberof EventInfo
     */
    isSpecialName?: boolean;

    /**
     * @type {MethodInfo}
     * @memberof EventInfo
     */
    addMethod?: MethodInfo;

    /**
     * @type {MethodInfo}
     * @memberof EventInfo
     */
    removeMethod?: MethodInfo;

    /**
     * @type {MethodInfo}
     * @memberof EventInfo
     */
    raiseMethod?: MethodInfo;

    /**
     * @type {boolean}
     * @memberof EventInfo
     */
    isMulticast?: boolean;

    /**
     * @type {Type}
     * @memberof EventInfo
     */
    eventHandlerType?: Type;
}
