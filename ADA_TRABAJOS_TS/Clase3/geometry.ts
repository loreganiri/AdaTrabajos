namespace Geometry {
    const PI = 3.14;
    
    export function areaOfCircle(radius: number): number {
        return PI * radius * radius;
    }

    export function areaOfRectangle(width: number, height: number): number { 
        return width * height;  
    }
}

export { Geometry };