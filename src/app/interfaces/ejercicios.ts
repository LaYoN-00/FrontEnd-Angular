export interface Ejercicio{
    ejercicio:string,
    id:number,
    paso_1:string,
    paso_2?:string,
    paso_3?:string,
    paso_4?:string,
    paso_5?:string,
    paso_6?:string,
    resultado_1:string,
    resultado_2?:string,
    resultado_3?:string,
    resultado_4?:string,
    resultado_5?:string,
    resultado_6?:string
}

export interface EjercicioEcuacionesCuadraticas{
    a:number,
    b:number,
    c:number,
    ejercicio:string,
    id:number,
    paso_1:string,
    paso_10:string,
    paso_11:string,
    paso_2:string,
    paso_3:string,
    paso_4:string,
    paso_5:string,
    paso_6:string,
    paso_7:string,
    paso_8:string,
    paso_9:string,
    resultado_1:string,
    resultado_2:string,
    resultado_3:string,
    resultado_4:string,
}

export interface EjercicioTeoremaPitagoras{
    area:number,
    cateto_a:number,
    cateto_b:number,
    ejercicio:string,
    hipotenusa:number,
    id:number,
    paso_1:string,
    paso_2:string,
    paso_3:string,
    paso_4:string,
    paso_5:string,
    paso_6:string,
    paso_7:string,
    resultado_1:string,
    resultado_2:string,
}

export interface EjercicioAlgebra{
    ejercicio:string,
    id:number,
    paso_1:string,
    resultado_1:string,
    resultado_2:string,
}

export interface EjercicioFunciones{
    ejercicio:string,
    id:number,
    paso_1:string,
    paso_10:string,
    paso_11:string,
    paso_12:string,
    paso_13:string,
    paso_2:string,
    paso_3:string,
    paso_4:string,
    paso_5:string,
    paso_6:string,
    paso_7:string,
    paso_8:string,
    paso_9:string,
    resultado_1:string,
    resultado_2:string
}

export interface EjercicioTrigonometria{
    ejercicio:string,
    id:number,
    paso_1:string,
    paso_10:string,
    paso_11:string,
    paso_12:string,
    paso_2:string,
    paso_3:string,
    paso_4:string,
    paso_5:string,
    paso_6:string,
    paso_7:string,
    paso_8:string,
    paso_9:string,
    resultado_1:string,
    resultado_2:string,
    resultado_3:string,
    resultado_4:string,
}

export interface EjercicioDerividaras{
    ejercicio:string,
    id:number,
    paso_1:string,
    paso_2:string,
    resultado_1:string,
}