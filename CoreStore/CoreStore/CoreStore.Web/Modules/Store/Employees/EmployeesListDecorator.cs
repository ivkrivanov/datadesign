
namespace CoreStore.Store
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class EmployeesListDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("EmployeesListDecorator:EmployeeById",
                TimeSpan.Zero, EmployeesRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<EmployeesRow>())
                    {
                        var fld = EmployeesRow.Fields;
                        return connection.List<EmployeesRow>(q => q
                            .Select(fld.EmployeeId)
                            .Select(fld.FullName))
                            .ToDictionary(x => x.EmployeeId.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                EmployeesRow e;
                return byId.TryGetValue(x, out e) ? e.FullName : x.ToString();
            }));
        }
    }
}
