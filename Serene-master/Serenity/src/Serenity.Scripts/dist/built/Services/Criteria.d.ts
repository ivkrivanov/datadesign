export {};
export declare function Criteria(field: string): any[];
export declare namespace Criteria {
    function isEmpty(c: any[]): boolean;
    function join(c1: any[], op: string, c2: any[]): any[];
    function paren(c: any[]): any[];
    function and(c1: any[], c2: any[], ...rest: any[][]): any[];
    function or(c1: any[], c2: any[], ...rest: any[][]): any[];
    const enum Operator {
        paren = "()",
        not = "not",
        isNull = "is null",
        isNotNull = "is not null",
        exists = "exists",
        and = "and",
        or = "or",
        xor = "xor",
        eq = "=",
        ne = "!=",
        gt = ">",
        ge = ">=",
        lt = "<",
        le = "<=",
        in = "in",
        notIn = "not in",
        like = "like",
        notLike = "not like"
    }
}
