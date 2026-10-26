// Adaptador web: almacenamiento local en este dispositivo.
window.cuerda = {
  async read(){try{return JSON.parse(localStorage.getItem('cuerda-db-v1') || 'null');}catch{return null;}},
  async save(data){localStorage.setItem('cuerda-db-v1',JSON.stringify(data));},
  async open(url){const u=new URL(url);if(!['https:'].includes(u.protocol))throw Error('Enlace no permitido');window.open(u.href,'_blank','noopener,noreferrer');}
};
