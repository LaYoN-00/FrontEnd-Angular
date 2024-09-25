export interface Chat{
    peticion?: string,
}

export interface RedPeticion{
    coeficiente:number,
    variableA:number,
    variableB:number,
}

export interface RedResultado{
    resultado: number,
}

export interface Calificaciones{
    actividad:string,
    calificacion:number,
    clase:string
}

export interface ArbolDecisionData{
    prediccion_1: string,
    prediccion_2: string,
    prediccion_3: string,
    precision: number,
    mensaje: string
}