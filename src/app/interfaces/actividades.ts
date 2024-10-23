export interface ProfesorActividades{
    codigo_clase:string,
    nombre_actividad:string,
    nombre_profesor:string,
}

export interface ProfesorActividadAlta{
    profesor:string,
    clase:string,
    actividad:string,
    inciso1:string,
    inciso2:string,
    inciso3:string,
    inciso4:string,
    inciso5:string,
    inciso6:string,
    inciso7:string,
    inciso8:string,
    inciso9:string,
    inciso10:string,
    respuesta1:string,
    respuesta2:string,
    respuesta3:string,
    respuesta4:string,
    respuesta5:string,
    respuesta6:string,
    respuesta7:string,
    respuesta8:string,
    respuesta9:string,
    respuesta10:string,
}

export interface AlumnosActividades{
    actividad:string,
    codigoclase:string,
    curso:number,
}

export interface AlumnosActividadesForm{
    actividad:string,
    inciso_1:string,
    inciso_10:string,
    inciso_2:string,
    inciso_3:string,
    inciso_4:string,
    inciso_5:string,
    inciso_6:string,
    inciso_7:string,
    inciso_8:string,
    inciso_9:string,
    id_actividad:number,
}

export interface AlumnosActividadesRespuestasForm{
    respuesta1:string,
    respuesta2:string,
    respuesta3:string,
    respuesta4:string,
    respuesta5:string,
    respuesta6:string,
    respuesta7:string,
    respuesta8:string,
    respuesta9:string,
    respuesta10:string,
}

export interface AlumnosActualizarCalificacion{
    id_actividad:number,
    id_clase:number,	
    calificacion:number,
    tiempo:number
}