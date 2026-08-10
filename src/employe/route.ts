import { faker } from '@faker-js/faker';
import type { Employee } from '../../types/type.ts'

const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}${m}${d}`;
};

const RAZONES_SOCIALES = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const REGISTROS_PATRONALES = [1, 2, 3, 4, 5, 6];
const UBICACIONES = [1, 2, 3, 4, 5, 6];
const CENTROS_COSTO = Array.from({ length: 66 }, (_, i) => i + 1);
const DEPARTAMENTOS = [102, 104, 111, 115, 116, 131, 161, 191, 202, 211, 221, 231, 261, 301, 331];
const PERIODOS = [1, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const PUESTOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const PERFILES_TURNO = Array.from({ length: 20 }, (_, i) => i + 1);
const TABLAS_PRE = [1, 2, 3];
const CLASIFICACIONES = [1, 2, 3];
const CATEGORIAS = Array.from({ length: 21 }, (_, i) => i + 1);
const CONTRATOS = [1, 6, 7, 9, 10, 11];
const FORMAS_PAGO = [2, 3];
const ESTADOS = Array.from({ length: 32 }, (_, i) => i + 1);
const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const usadosImss = new Set<string>();

const imssUnico = () => {
    let imss: string;
    do {
        imss = faker.string.numeric(11);
    } while (usadosImss.has(imss));
    usadosImss.add(imss);
    return imss;
};

const rfcValido = (nacimiento: Date, sexo: 'M' | 'F') => {
    const fecha = `${String(nacimiento.getFullYear()).slice(2)}${String(nacimiento.getMonth() + 1).padStart(2, '0')}${String(nacimiento.getDate()).padStart(2, '0')}`;
    const letras = faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split(''));
    const homoclave = faker.helpers.arrayElement(LETRAS.split('')) + faker.string.numeric(1) + faker.helpers.arrayElement(LETRAS.split(''));
    return `${letras}${fecha}${homoclave}`;
};

const curpValida = (nacimiento: Date, sexo: 'M' | 'F') => {
    const fecha = `${String(nacimiento.getFullYear()).slice(2)}${String(nacimiento.getMonth() + 1).padStart(2, '0')}${String(nacimiento.getDate()).padStart(2, '0')}`;
    const iniciales = faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split(''));
    const resto = faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split('')) + faker.helpers.arrayElement(LETRAS.split(''));
    return `${iniciales}${fecha}${sexo === 'M' ? 'H' : 'M'}${resto}BC`;
};

const generateEmployees = () => {
    const employees: Employee[] = [];
    for (let i = 0; i < 10; i++) {
        const sexo = faker.helpers.arrayElement(['M', 'F'] as const);
        const nacimiento = faker.date.birthdate({ mode: 'age', min: 18, max: 65 });
        employees.push({
            id: faker.number.int(),
            SUELDO_DIA: faker.finance.amount({ min: 200, max: 2000, dec: 2 }),
            SDI: faker.finance.amount({ min: 220, max: 2200, dec: 2 }),
            NOM_TRAB: faker.person.firstName(sexo),
            AP_PATERNO: faker.person.lastName(),
            AP_MATERNO: faker.person.lastName(),
            FECHA_ING: formatDate(faker.date.past({ years: 10 })),
            ANTIG_BASE: faker.number.int({ min: 0, max: 30 }).toString(),
            FECHA_ING_GPO: formatDate(faker.date.past({ years: 10 })),
            CLA_RAZON_SOCIAL: faker.helpers.arrayElement(RAZONES_SOCIALES),
            CLA_REG_IMSS: faker.helpers.arrayElement(REGISTROS_PATRONALES),
            CLA_UBICACION_BASE: faker.helpers.arrayElement(UBICACIONES),
            CLA_UBICACION_PAGO: faker.helpers.arrayElement(UBICACIONES),
            CLA_CENTRO_COSTO: faker.helpers.arrayElement(CENTROS_COSTO),
            CLA_DEPTO: faker.helpers.arrayElement(DEPARTAMENTOS),
            CLA_PERIODO: faker.helpers.arrayElement(PERIODOS),
            CLA_PUESTO: faker.helpers.arrayElement(PUESTOS),
            CLA_PERFIL_TURNO: faker.helpers.arrayElement(PERFILES_TURNO),
            CLA_TAB_PRE: faker.helpers.arrayElement(TABLAS_PRE),
            CLA_CLASIFICACION: faker.helpers.arrayElement(CLASIFICACIONES),
            CLA_TAB_SUE: faker.helpers.arrayElement(CATEGORIAS),
            NIV_TAB_SUE: faker.number.int({ min: 1, max: 45 }),
            SIND: faker.helpers.arrayElement([0, 1]),
            REGIMEN_CONTRATA_SAT: 2,
            CLA_CONTRATO: faker.helpers.arrayElement(CONTRATOS),
            TIPO_SALARIO: faker.helpers.arrayElement([0, 1, 2]),
            CLA_FORMA_PAGO: faker.helpers.arrayElement(FORMAS_PAGO),
            NUM_IMSS: imssUnico(),
            RFC: rfcValido(nacimiento, sexo),
            CURP: curpValida(nacimiento, sexo),
            CALLE: faker.location.street(),
            CIUDAD: faker.location.city(),
            ESTADO_DOMICILIO: faker.helpers.arrayElement(ESTADOS),
            LUGAR_NAC: faker.location.city(),
            CLA_ESTADO_NAC: faker.helpers.arrayElement(ESTADOS),
            FECHA_NAC: formatDate(nacimiento),
            NACIONALIDAD: 'MEXICANA',
            SEXO: sexo,
            TELEFONO: faker.phone.number(),
        });
    }
    return employees;
}

export default generateEmployees;
