export interface Curso{
    id_curso?:number,
    codigo: string,
    materia: string,
    creditos: number,
    profesor:string,
    id_profesor?:number
}

export interface CursoMatricula{
    idcurso:number,
    idalumno:number
}

export interface CursoCodigo{
    codigo: string,
}