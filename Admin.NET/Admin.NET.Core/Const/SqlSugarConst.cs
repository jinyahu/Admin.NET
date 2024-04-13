﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// SqlSugar相关常量
/// </summary>
public class SqlSugarConst
{
    /// <summary>
    /// 默认主数据库标识（默认租户）
    /// </summary>
    public const string MainConfigId = "1300000000001";

    /// <summary>
    /// 默认日志数据库标识
    /// </summary>
    public const string LogConfigId = "1300000000002";

    /// <summary>
    /// 默认表主键
    /// </summary>
    public const string PrimaryKey = "Id";
}
