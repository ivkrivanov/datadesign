using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Company.Store;

public class EmployeeListDecorator : BaseCellDecorator
{
    public EmployeeListDecorator(ITwoLevelCache cache, ISqlConnections sqlConnections)
    {
        Cache = cache ?? throw new ArgumentNullException(nameof(cache));
        SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
    }

    public ITwoLevelCache Cache { get; }
    public ISqlConnections SqlConnections { get; }

    public override void Decorate()
    {
        if (Value is not IEnumerable<int> idList || !idList.Any())
        {
            Value = "";
            return;
        }

        var byId = Cache.GetLocalStoreOnly("EmployeeListDecorator:EmployeeById",
            TimeSpan.Zero, EmployeesRow.Fields.GenerationKey, () =>
            {
                using var connection = SqlConnections.NewFor<EmployeesRow>();
                var fld = EmployeesRow.Fields;
                return connection.List<EmployeesRow>(q => q
                    .Select(fld.EmployeeId)
                    .Select(fld.FullName))
                    .ToDictionary(x => x.EmployeeId.Value);
            });

        Value = string.Join(", ", idList.Select(x =>
        {
            return byId.TryGetValue(x, out EmployeesRow e) ? e.FullName : x.ToString(CultureInfo.InvariantCulture);
        }));
    }
}