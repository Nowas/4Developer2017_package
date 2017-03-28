export enum CalcOperationEnum{
    Addition =1,
    Substraction,
    Multiplication,
    Divsion
}

export interface IAdvanceCalculator{
    Operation(a: number, b:number, operation: CalcOperationEnum): number;
}