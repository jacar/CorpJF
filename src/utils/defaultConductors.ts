import { Conductor } from '../types';

<<<<<<< HEAD
export const defaultConductors: Omit<Conductor, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    numeroUnidad: '281',
    area: 'ADMINISTRATIVA RICHMOND',
    nombre: 'CARLOS NAVEDA',
    ruta: 'LA LAGUNITA - LOS PATRULLEROS - RICHMOND'
  },
  {
    numeroUnidad: '292',
    area: '',
    nombre: 'ALBERTO ROMERO',
    ruta: 'LOS MODINES - SANTA FE - RICHMOND'
  },
  {
    numeroUnidad: '348',
    area: '',
    nombre: 'LINO ACOSTA',
    ruta: 'CORE 3 - PICOLA - SAN JACINTO - RICHMOND'
  },
  {
    numeroUnidad: '280',
    area: '',
    nombre: 'LEANDRO MARTINEZ',
    ruta: '18 OCTUBRE - RICHMOND'
  },
  {
    numeroUnidad: '278',
    area: '',
    nombre: 'JOSE GARCIA',
    ruta: 'TAMARE - PUNTA GORDA - CABIMAS - RICHMOND'
  },
  {
    numeroUnidad: '274',
    area: '',
    nombre: 'LEOBALDO MORAN',
    ruta: 'EL PINAR - LOS HATICOS - RICHMOND'
  },
  {
    numeroUnidad: '320',
    area: '',
    nombre: 'JOSUE PAZ',
    ruta: 'CONCEPCION - SOL AMADO - RICHMOND'
  },
  {
    numeroUnidad: '279',
    area: '',
    nombre: 'RICARDO EVERON',
    ruta: 'SAN FRANCISCO - RICHMOND'
  },
  {
    numeroUnidad: '297',
    area: 'ADMINSTRATIVA CAMPO BOSCAN',
    nombre: 'YENDRY VILCHEZ',
    ruta: 'LAGUNITA - CB'
  },
  {
    numeroUnidad: '296',
    area: '',
    nombre: 'HECTOR AVILA',
    ruta: 'MCBO - CORE 3 - CB'
  },
  {
    numeroUnidad: '290',
    area: '',
    nombre: 'DANIEL BRICEÑO',
    ruta: 'SAN FCO - EL PINAR - CB'
  },
  {
    numeroUnidad: '291',
    area: '',
    nombre: 'JOSE MONTIEL',
    ruta: 'SAN FCO - EL EL BAJO - CB'
  },
  {
    numeroUnidad: '293',
    area: 'OPERACIONAL',
    nombre: 'EDGAR VALIENTE',
    ruta: 'EL PINAR - RICHMOND - SAN FCO - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '274',
    area: '',
    nombre: 'OLIVER ATENCIO',
    ruta: 'SAN FRANCISCO - EL BAJO - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '295',
    area: '',
    nombre: 'ATILIO CAMPOS',
    ruta: 'MCBO - NORTE - OESTE (CORE 3) - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '294',
    area: '',
    nombre: 'JENNER BRICEÑO',
    ruta: 'MCBO - SUR NORTE - (LAGUNITA) - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '293',
    area: 'OPERACIONAL',
    nombre: 'JEAN PERCHE',
    ruta: 'EL PINAR - RICHMOND - SAN FCO - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '274',
    area: '',
    nombre: 'ENYERBETH ORDOÑEZ',
    ruta: 'SAN FRANCISCO - EL BAJO - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '295',
    area: '',
    nombre: 'JOSE VILLALOBOS',
    ruta: 'MCBO - NORTE - OESTE (CORE 3) - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '294',
    area: '',
    nombre: 'JUAN HERNANDEZ',
    ruta: 'MCBO - SUR NORTE - (LAGUNITA) - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '276',
    area: '',
    nombre: 'JOSE GONZALEZ',
    ruta: 'LA VILLA - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '276',
    area: '',
    nombre: 'JIMMY PALENCIA',
    ruta: 'LA VILLA - CAMPO BOSCAN'
  },
  {
    numeroUnidad: '293',
    area: '',
    nombre: 'MARIANO CONTRERAS',
    ruta: 'EL PINAR - RICHMOND - SAN FCO - CAMPO BOSCAN'
=======
export const defaultConductorsData = [
  { 
    name: "LISBETH CELINA PIÑA MARIN", 
    cedula: "13878642", 
    placa: "", 
    area: "AIT"
  },
  { 
    name: "RAMIRO SEGUNDO MONTERO DIAZ", 
    cedula: "13002493", 
    placa: "", 
    area: "AIT"
  },
  { 
    name: "RICHARD ALEXANDER GALIZ RIVERO", 
    cedula: "11479380", 
    placa: "", 
    area: "AIT"
  },
  { 
    name: "MERVIN RICARDO GONZALEZ GONZALEZ", 
    cedula: "16017790", 
    placa: "", 
    area: "AIT"
  },
  { 
    name: "DULCE MARIA OSORIO MUÑOZ", 
    cedula: "20750117", 
    placa: "", 
    area: "OPERACIONES DE PRODUCCION"
  },
  { 
    name: "PEDRO JOSE GARCIA LOPEZ", 
    cedula: "15748724", 
    placa: "", 
    area: "OPERACIONES DE PRODUCCION"
  },
  { 
    name: "BRUNO BARTOLO DIAZ BARRETO", 
    cedula: "9728324", 
    placa: "", 
    area: "OPERACIONES DE PRODUCCION"
  },
  { 
    name: "NORIS BEATRIZ PEÑA AVENDAÑO", 
    cedula: "19285320", 
    placa: "", 
    area: "OPERACIONES DE PRODUCCION"
  },
  { 
    name: "MINORLYS DE LOS ANGELES ORTEGA VILLALOBOS", 
    cedula: "17414583", 
    placa: "", 
    area: "MANTENIMIENTO"
  },
  { 
    name: "REVILLA GIOVANNI", 
    cedula: "7886902", 
    placa: "", 
    area: "MANTENIMIENTO"
  },
  { 
    name: "EDUARDO ERNESTO SANTRICH URQUIJO", 
    cedula: "9722931", 
    placa: "", 
    area: "MANTENIMIENTO"
  },
  { 
    name: "JUNIOR MANUEL PACHECO FINOL", 
    cedula: "15720360", 
    placa: "", 
    area: "MANTENIMIENTO"
  },
  { 
    name: "INGRID COROMOTO ESPINOZA MORENO", 
    cedula: "16986555", 
    placa: "", 
    area: "SERVICIOS GENERALES"
  },
  { 
    name: "NELLY JULIO MERCADO", 
    cedula: "11913305", 
    placa: "", 
    area: "SERVICIOS GENERALES"
  },
  { 
    name: "MILYMAR DEL VALLE GARCIA BORREGO", 
    cedula: "15523660", 
    placa: "", 
    area: "SEGURIDAD E HIGIENE OCUPACIONAL - AMBIENTE"
  },
  { 
    name: "MARYCRUZ RAMOS DE VILCHEZ", 
    cedula: "12714510", 
    placa: "", 
    area: "RECURSOS HUMANOS"
  },
  { 
    name: "NORBERTO RAMON VILLALOBOS INCIARTE", 
    cedula: "7785176", 
    placa: "", 
    area: "FACILIDADES"
  },
  { 
    name: "JENNY CHIQUINQUIRA MORALES VILLALOBOS", 
    cedula: "14833824", 
    placa: "", 
    area: "INGENIERIA DE PETROLEO"
  },
  { 
    name: "HILARION RAUL PARIS AZUAJE", 
    cedula: "14562124", 
    placa: "", 
    area: "PLANIFICACION"
  },
  { 
    name: "ROMMEL ANTONIO WHILCHY MORALES", 
    cedula: "6338873", 
    placa: "", 
    area: "ESTUDIOS INTEGRADOS"
  },
  { 
    name: "LEAR ACOSTA DAVID RAMON", 
    cedula: "17187391", 
    placa: "", 
    area: "POZOS"
  },
  { 
    name: "MELISSA CAROLINA MEDINA", 
    cedula: "14117940", 
    placa: "", 
    area: "FACILIDADES"
  },
  { 
    name: "OSCAR ALBERTO VALBUENA PERDOMO", 
    cedula: "9748877", 
    placa: "", 
    area: "OPERACIONES DE PRODUCCION"
  },
  { 
    name: "ANGELA MARIA HERNANDEZ LUZARDO", 
    cedula: "18063392", 
    placa: "", 
    area: "RECURSOS HUMANOS"
  },
  { 
    name: "LUIS JOSE VARGAS PEÑA", 
    cedula: "15305967", 
    placa: "", 
    area: "INGENIERIA DE PETROLEO"
  },
  { 
    name: "FIDEL JOSE MONTILLA LEON", 
    cedula: "23554147", 
    placa: "", 
    area: "INGENIERIA DE PETROLEO"
  },
  { 
    name: "ZULIMA PATRICIA CAICEDO DE ALVAREZ", 
    cedula: "23554147", 
    placa: "", 
    area: "SALUD"
  },
  { 
    name: "ERENICE MAITHE POLANCO VARELA", 
    cedula: "17834145", 
    placa: "", 
    area: "FINANZAS"
  },
  { 
    name: "ANGEL MIGUEL SOTO BOHORQUEZ", 
    cedula: "20508321", 
    placa: "", 
    area: "RECURSOS HUMANOS"
  },
  { 
    name: "MAINERY NAVA", 
    cedula: "23876264", 
    placa: "", 
    area: "CONTRATACION"
  },
  { 
    name: "EUDIS ALEJANDRO QUERO CHOURIO", 
    cedula: "19341251", 
    placa: "", 
    area: "MANTENIMIENTO"
  },
  { 
    name: "ONEIDA JANETH LEON MONTES DE OCA", 
    cedula: "10806897", 
    placa: "", 
    area: "ESTUDIOS INTEGRADOS"
  },
  { 
    name: "GIL MARIA ELENA", 
    cedula: "17393371", 
    placa: "", 
    area: "PLANIFICACION"
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
  }
];

export function generateDefaultConductors(): Conductor[] {
<<<<<<< HEAD
  return defaultConductors.map((conductor, index) => ({
    ...conductor,
    id: `cond-${index + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
=======
  return defaultConductorsData.map((conductor, index) => ({
    id: `conductor-${index + 1}`,
    ...conductor,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
  }));
}