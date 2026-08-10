export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    img: string;
    empresa: string;
}

export interface Employee {
    id: number;
    SUELDO_DIA: string;
    SDI: string;
    NOM_TRAB: string;
    AP_PATERNO: string;
    AP_MATERNO: string;
    FECHA_ING: string;
    ANTIG_BASE: string;
    FECHA_ING_GPO: string;
    CLA_RAZON_SOCIAL: number;
    CLA_REG_IMSS: number;
    CLA_UBICACION_BASE: number;
    CLA_UBICACION_PAGO: number;
    CLA_CENTRO_COSTO: number;
    CLA_DEPTO: number;
    CLA_PERIODO: number;
    CLA_PUESTO: number;
    CLA_PERFIL_TURNO: number;
    CLA_TAB_PRE: number;
    CLA_CLASIFICACION: number;
    CLA_TAB_SUE: number;
    NIV_TAB_SUE: number;
    SIND: number;
    REGIMEN_CONTRATA_SAT: number;
    CLA_CONTRATO: number;
    TIPO_SALARIO: number;
    CLA_FORMA_PAGO: number;
    NUM_IMSS: string;
    RFC: string;
    CURP: string;
    CALLE: string;
    CIUDAD: string;
    ESTADO_DOMICILIO: number;
    LUGAR_NAC: string;
    CLA_ESTADO_NAC: number;
    FECHA_NAC: string;
    NACIONALIDAD: string;
    SEXO: string;
    TELEFONO?: string;
}

export interface Carito {
    id: number;
    marca: string;
    modelo: string;
    color: string;
    year: string;
}
