// ADAME CRUZ JOSE MARIA
// 000087493

//URL BASE DE API
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

// FUNCION DE CONSULTA DE TODOS LOS ITEMS
export async function getAllItems() {
  const response = await fetch(`${BASE_URL}/items`);

  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }

  return await response.json();
}

// DETALLE DE ITEM
export async function getItemById(id) {
  const response = await fetch(`${BASE_URL}/items/`+id);

  if (!response.ok) {
    throw new Error('No se pudo recuperar el elemento');
  }

  return await response.json();
}

// CREACION DE ITEM
export async function createItem(item) {
  const response = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  });

  if (!response.ok) {
    throw new Error('No se pudo guardar el elemento');
  }

  return await response.json();
}

// ACTUALIZACION DE ITEM
export async function updateItemById(id, item) {
  const response = await fetch(`${BASE_URL}/items/`+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  });

  if (!response.ok) {
    throw new Error('No se pudo actualizar el elemento');
  }

  return await response.json();
}

// ELIMINACION DE ITEM
export async function deleteItemById(id) {
  const response = await fetch(`${BASE_URL}/items/`+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }

  return await response.json();
}
