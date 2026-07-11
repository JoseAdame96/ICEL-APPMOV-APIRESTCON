// ADAME CRUZ JOSE MARIA
// 000087493

//URL BASE DE API
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

// FUNCION DE CONSULTA DE API
export async function getAllItems() {
  const response = await fetch(`${BASE_URL}/items`);

  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }

  return await response.json();
}