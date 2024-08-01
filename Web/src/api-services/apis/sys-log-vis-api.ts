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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultListLogVisOutput } from '../models';
import { AdminResultSqlSugarPagedListSysLogVis } from '../models';
import { PageVisLogInput } from '../models';
/**
 * SysLogVisApi - axios parameter creator
 * @export
 */
export const SysLogVisApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空访问日志 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogVisClearPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogVis/clear`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取访问日志列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogVisListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogVis/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取访问日志分页列表 🔖
         * @param {PageVisLogInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysLogVisPagePost: async (body?: PageVisLogInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysLogVis/page`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysLogVisApi - functional programming interface
 * @export
 */
export const SysLogVisApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空访问日志 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisClearPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysLogVisApiAxiosParamCreator(configuration).apiSysLogVisClearPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取访问日志列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListLogVisOutput>>> {
            const localVarAxiosArgs = await SysLogVisApiAxiosParamCreator(configuration).apiSysLogVisListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取访问日志分页列表 🔖
         * @param {PageVisLogInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisPagePost(body?: PageVisLogInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogVis>>> {
            const localVarAxiosArgs = await SysLogVisApiAxiosParamCreator(configuration).apiSysLogVisPagePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysLogVisApi - factory interface
 * @export
 */
export const SysLogVisApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 清空访问日志 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisClearPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysLogVisApiFp(configuration).apiSysLogVisClearPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取访问日志列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListLogVisOutput>> {
            return SysLogVisApiFp(configuration).apiSysLogVisListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取访问日志分页列表 🔖
         * @param {PageVisLogInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysLogVisPagePost(body?: PageVisLogInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogVis>> {
            return SysLogVisApiFp(configuration).apiSysLogVisPagePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysLogVisApi - object-oriented interface
 * @export
 * @class SysLogVisApi
 * @extends {BaseAPI}
 */
export class SysLogVisApi extends BaseAPI {
    /**
     * 
     * @summary 清空访问日志 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogVisApi
     */
    public async apiSysLogVisClearPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysLogVisApiFp(this.configuration).apiSysLogVisClearPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取访问日志列表 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogVisApi
     */
    public async apiSysLogVisListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListLogVisOutput>> {
        return SysLogVisApiFp(this.configuration).apiSysLogVisListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取访问日志分页列表 🔖
     * @param {PageVisLogInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysLogVisApi
     */
    public async apiSysLogVisPagePost(body?: PageVisLogInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysLogVis>> {
        return SysLogVisApiFp(this.configuration).apiSysLogVisPagePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
