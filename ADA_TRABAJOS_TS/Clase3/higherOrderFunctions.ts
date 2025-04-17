interface MultiplierFunction {
    (num: number): number;
}

export default function createMultiplier(factor: number): MultiplierFunction {
    return (num: number) => num * factor;
}