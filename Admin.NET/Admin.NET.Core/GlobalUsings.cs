﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

global using Admin.NET.Core.Service;
global using Furion;
global using Furion.ClayObject;
global using Furion.ConfigurableOptions;
global using Furion.DatabaseAccessor;
global using Furion.DataEncryption;
global using Furion.DataValidation;
global using Furion.DependencyInjection;
global using Furion.DynamicApiController;
global using Furion.EventBus;
global using Furion.FriendlyException;
global using Furion.JsonSerialization;
global using Furion.Logging;
global using Furion.RemoteRequest.Extensions;
global using Furion.Schedule;
global using Furion.UnifyResult;
global using Furion.ViewEngine;
global using Magicodes.ExporterAndImporter.Core;
global using Magicodes.ExporterAndImporter.Core.Extension;
global using Magicodes.ExporterAndImporter.Excel;
global using Mapster;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Http;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Mvc.Filters;
global using Microsoft.Extensions.Configuration;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;
global using Microsoft.Extensions.Logging;
global using Microsoft.Extensions.Options;
global using NewLife;
global using NewLife.Caching;
global using Newtonsoft.Json.Linq;
global using SKIT.FlurlHttpClient;
global using SKIT.FlurlHttpClient.Wechat.Api;
global using SKIT.FlurlHttpClient.Wechat.Api.Models;
global using SKIT.FlurlHttpClient.Wechat.TenpayV3;
global using SKIT.FlurlHttpClient.Wechat.TenpayV3.Events;
global using SKIT.FlurlHttpClient.Wechat.TenpayV3.Models;
global using SKIT.FlurlHttpClient.Wechat.TenpayV3.Settings;
global using SqlSugar;
global using System.Collections;
global using System.Collections.Concurrent;
global using System.ComponentModel;
global using System.ComponentModel.DataAnnotations;
global using System.Data;
global using System.Diagnostics;
global using System.Linq.Dynamic.Core;
global using System.Linq.Expressions;
global using System.Reflection;
global using System.Runtime.InteropServices;
global using System.Text;
global using System.Text.Json.Serialization;
global using System.Text.RegularExpressions;
global using System.Web;
global using UAParser;
global using Yitter.IdGenerator;
