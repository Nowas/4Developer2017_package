export declare enum CalcOperationEnum {
    Addition = 1,
    Substraction = 2,
    Multiplication = 3,
    Divsion = 4,
}
export interface IAdvanceCalculator {
    Operation(a: number, b: number, operation: CalcOperationEnum): number;
}
