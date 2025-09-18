import React, { useState, useEffect } from 'react';
import { applySEO } from '../utils/seo';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Conductor } from '../types';
import { storage } from '../utils/storage';
<<<<<<< HEAD
import { generateDefaultConductors } from '../utils/defaultConductors';

// Lista fija de números de unidad (sin duplicados y ordenados)
const NUMEROS_UNIDAD = [
  '274', '276', '278', '279', '280',
  '281', '290', '291', '292', '293',
  '294', '295', '296', '297', '320', '348'
];
=======
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59

const Conductors: React.FC = () => {
  const [conductors, setConductors] = useState<Conductor[]>([]);
  const [filteredConductors, setFilteredConductors] = useState<Conductor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingConductor, setEditingConductor] = useState<Conductor | null>(null);
<<<<<<< HEAD
  const [formData, setFormData] = useState<Omit<Conductor, 'id' | 'createdAt' | 'updatedAt'>>({
    numeroUnidad: '',
    area: '',
    nombre: '',
=======
  const [formData, setFormData] = useState({
    name: '',
    cedula: '',
    placa: '',
    area: '',
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
    ruta: ''
  });

  useEffect(() => {
    applySEO({
      title: 'Conductores | Sistema de Reportes JF',
<<<<<<< HEAD
      description: 'Administre conductores, unidades, áreas y rutas en el Sistema de Reportes JF.',
      keywords: 'conductores, unidades, rutas, transporte, gestión de conductores',
=======
      description: 'Administre conductores, placas, áreas y rutas en el Sistema de Reportes JF.',
      keywords: 'conductores, placas, rutas, transporte, gestión de conductores',
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
      canonicalPath: '/conductors',
    });
    loadConductors();
  }, []);

  useEffect(() => {
    filterConductors();
  }, [conductors, searchTerm]);

  const loadConductors = async () => {
<<<<<<< HEAD
    try {
      // Primero forzamos la limpieza de los conductores existentes
      await storage.clearAll();
      
      // Luego generamos los conductores por defecto
      const defaultConductors = generateDefaultConductors();
      await storage.saveConductors(defaultConductors);
      
      // Finalmente cargamos los conductores
      const data = await storage.getConductors();
      console.log('Conductores cargados:', data);
      setConductors(data);
    } catch (error) {
      console.error('Error al cargar conductores:', error);
    }
  };

  const filterConductors = () => {
    if (!searchTerm.trim()) {
      setFilteredConductors(conductors);
      return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    const filtered = conductors.filter(conductor => 
      conductor.nombre.toLowerCase().includes(searchLower) ||
      conductor.numeroUnidad.includes(searchTerm) ||
      conductor.area.toLowerCase().includes(searchLower) ||
      conductor.ruta.toLowerCase().includes(searchLower)
    );
    
    setFilteredConductors(filtered);
=======
    const data = await storage.getConductors();
    setConductors(data);
  };

  const filterConductors = () => {
    if (!searchTerm) {
      setFilteredConductors(conductors);
    } else {
      const filtered = conductors.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.cedula.includes(searchTerm) ||
        c.placa.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredConductors(filtered);
    }
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
<<<<<<< HEAD
    if (editingConductor) {
      // Actualizar conductor existente
      const updatedConductors = conductors.map(c => 
        c.id === editingConductor.id 
          ? { ...formData, id: c.id, updatedAt: new Date().toISOString(), createdAt: c.createdAt }
=======
    // Verificar si ya existe un conductor con la misma cédula
    const existingConductor = conductors.find(c => c.cedula === formData.cedula && (!editingConductor || c.id !== editingConductor.id));
    if (existingConductor) {
      alert('Ya existe un conductor con esta cédula');
      return;
    }
    
    if (editingConductor) {
      // Update existing conductor
      const updatedConductors = conductors.map(c => 
        c.id === editingConductor.id 
          ? { ...c, ...formData }
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
          : c
      );
      await storage.saveConductors(updatedConductors);
      setConductors(updatedConductors);
    } else {
<<<<<<< HEAD
      // Crear nuevo conductor
      const newConductor: Conductor = {
        ...formData,
        id: `cond-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
=======
      // Create new conductor
      const newConductor: Conductor = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
      };
      
      const updatedConductors = [...conductors, newConductor];
      await storage.saveConductors(updatedConductors);
      setConductors(updatedConductors);
    }
    
    resetForm();
  };

  const handleEdit = (conductor: Conductor) => {
<<<<<<< HEAD
    const { id, createdAt, updatedAt, ...rest } = conductor;
    setEditingConductor(conductor);
    setFormData(rest);
=======
    setEditingConductor(conductor);
    setFormData({
      name: conductor.name,
      cedula: conductor.cedula,
      placa: conductor.placa,
      area: conductor.area || '',
      ruta: conductor.ruta || ''
    });
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de eliminar este conductor?')) {
      const updatedConductors = conductors.filter(c => c.id !== id);
      await storage.saveConductors(updatedConductors);
      setConductors(updatedConductors);
    }
  };

  const resetForm = () => {
<<<<<<< HEAD
    setFormData({
      numeroUnidad: '',
      area: '',
      nombre: '',
      ruta: ''
    });
=======
    setFormData({ name: '', cedula: '', placa: '', area: '', ruta: '' });
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
    setEditingConductor(null);
    setShowModal(false);
  };

  return (
    <div className="space-y-6 w-full">
<<<<<<< HEAD
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Conductores</h1>
=======
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Conductores</h1>
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
          <p className="text-gray-600">Administre los conductores del sistema</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
<<<<<<< HEAD
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
=======
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
        >
          <Plus className="h-5 w-5" />
          <span>Nuevo Conductor</span>
        </button>
      </div>

<<<<<<< HEAD
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100 bg-gray-50">
          <div className="relative max-w-md">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              placeholder="Buscar por nombre, número o ruta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border-2 border-blue-100 focus:border-blue-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 transition-all text-sm sm:text-base bg-white text-gray-800 placeholder-gray-400"
=======
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, cédula o placa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
            />
          </div>
        </div>

<<<<<<< HEAD
        {/* Versión de escritorio - Tabla */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  N° de Unidad
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Área
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Ruta
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
=======
        <div className="overflow-x-auto md:overflow-visible">
          <table className="w-full table-auto md:table-fixed">
            <thead className="bg-gray-50 hidden md:table-header-group">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conductor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cédula
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Placa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Área
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ruta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Registro
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
                  Acciones
                </th>
              </tr>
            </thead>
<<<<<<< HEAD
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredConductors.map((conductor, index) => (
                <tr key={conductor.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-800">
                    {conductor.numeroUnidad}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {conductor.area || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {conductor.nombre}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {conductor.ruta}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(conductor)}
                      className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 p-1.5 rounded-lg transition-colors"
=======
            <tbody className="divide-y divide-gray-200 block md:table-row-group">
              {filteredConductors.map((conductor) => (
                <tr key={conductor.id} className="hover:bg-gray-50 block md:table-row">
                  <td className="px-6 py-4 block md:table-cell">
                    <div className="font-medium text-gray-900">{conductor.name}</div>
                  </td>
                  <td className="px-6 py-4 block md:table-cell text-gray-600">
                    {conductor.cedula}
                  </td>
                  <td className="px-6 py-4 block md:table-cell text-gray-600">
                    {conductor.placa}
                  </td>
                  <td className="px-6 py-4 block md:table-cell text-gray-600">
                    {conductor.area || 'N/A'}
                  </td>
                  <td className="px-6 py-4 block md:table-cell text-gray-600">
                    <div className="max-w-xs truncate" title={conductor.ruta}>
                      {conductor.ruta || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 block md:table-cell text-gray-600">
                    {new Date(conductor.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-center space-x-2 block md:table-cell">
                    <button
                      onClick={() => handleEdit(conductor)}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
                      title="Editar"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(conductor.id)}
<<<<<<< HEAD
                      className="text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 p-1.5 rounded-lg transition-colors"
=======
                      className="text-red-600 hover:text-red-800 transition-colors"
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
                      title="Eliminar"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
<<<<<<< HEAD

        {/* Versión móvil - Tarjetas */}
        <div className="md:hidden p-4 space-y-3">
          {filteredConductors.map((conductor) => (
            <div key={conductor.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="inline-flex items-center justify-center h-6 w-12 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
                      {conductor.numeroUnidad}
                    </span>
                    <h3 className="text-base font-semibold text-gray-800 truncate">{conductor.nombre}</h3>
                  </div>
                  <div className="mt-2 space-y-1.5 text-sm text-gray-600">
                    {conductor.area && (
                      <p className="flex items-center">
                        <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {conductor.area}
                      </p>
                    )}
                    <p className="flex items-start">
                      <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="line-clamp-2">{conductor.ruta}</span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 ml-2">
                  <button
                    onClick={() => handleEdit(conductor)}
                    className="p-2 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md group"
                    title="Editar"
                  >
                    <svg className="h-5 w-5 group-hover:rotate-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(conductor.id)}
                    className="p-2 text-red-600 hover:text-white bg-red-50 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md group"
                    title="Eliminar"
                  >
                    <svg className="h-5 w-5 group-hover:shake transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para agregar/editar conductor */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
=======
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {editingConductor ? 'Editar Conductor' : 'Nuevo Conductor'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
<<<<<<< HEAD
                  N° de Unidad *
                </label>
                <select
                  required
                  value={formData.numeroUnidad}
                  onChange={(e) => setFormData({...formData, numeroUnidad: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Seleccione un número de unidad</option>
                  {NUMEROS_UNIDAD.map(numero => (
                    <option key={numero} value={numero}>
                      {numero}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
=======
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
<<<<<<< HEAD
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value.toUpperCase()})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: CARLOS NAVEDA"
                />
              </div>

=======
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cédula *
                </label>
                <input
                  type="text"
                  required
                  value={formData.cedula}
                  onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Placa del Vehículo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.placa}
                  onChange={(e) => setFormData({ ...formData, placa: e.target.value.toUpperCase() })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Área
                </label>
                <input
                  type="text"
                  value={formData.area}
<<<<<<< HEAD
                  onChange={(e) => setFormData({...formData, area: e.target.value.toUpperCase()})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: ADMINISTRATIVA RICHMOND"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ruta *
                </label>
                <textarea
                  required
                  value={formData.ruta}
                  onChange={(e) => setFormData({...formData, ruta: e.target.value.toUpperCase()})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: LA LAGUNITA - LOS PATRULLEROS - RICHMOND"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
=======
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: ADMINISTRATIVA RICHMOND"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ruta Asignada
                </label>
                <textarea
                  value={formData.ruta}
                  onChange={(e) => setFormData({ ...formData, ruta: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: LA LAGUNITA - LOS PATRULLEROS-RICHMOND"
                  rows={2}
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
                >
                  Cancelar
                </button>
                <button
                  type="submit"
<<<<<<< HEAD
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {editingConductor ? 'Actualizar' : 'Guardar'}
=======
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingConductor ? 'Actualizar' : 'Crear'}
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
<<<<<<< HEAD
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px) rotate(-2deg); }
          75% { transform: translateX(2px) rotate(2deg); }
        }
        .group-hover\:shake:hover {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
=======
>>>>>>> 9010aba2abdc6426bec1f70fd63a2c8dc7902e59
    </div>
  );
};

export default Conductors;