document.addEventListener('DOMContentLoaded', function(){
// Seleccionar elementos
const linkDomis = document.querySelector('.submenu1 .flechita');
const submenu = document.querySelector('.submenu-items');
const btnHamburguesa = document.getElementById('btn-hamburguesa');
const menuLateral = document.getElementById('menu-lateral');
const cerrarMenu = document.getElementById('cerrar-menu');
const overlay = document.getElementById('overlay');

// Estado inicial de submenú (Se ven los links por defecto)
function abrirSubmenu(){
  linkDomis.innerHTML = 'Domicilios ▾';
  submenu.classList.add('activo');
}


abrirSubmenu();
// Flechita al hacer clic
linkDomis.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation();

  const estadoActivo = submenu.classList.contains('activo');

  if (estadoActivo){
    // Al ocultar menú
    submenu.style.transition ='max-height 0.4s ease, opacity 0.3s ease';
    submenu.classList.remove('activo');
    linkDomis.innerHTML = 'Domicilios ▸';
  } else {
    // muestra menú
    submenu.style.transition = 'max-height 0.4s ease, opacity 0.3s ease';
    submenu.classList.add('activo');
    linkDomis.innerHTML = 'Domicilios ▾';
  }
});

// Abrir menú al clic en hamburguesa
btnHamburguesa.addEventListener('click', () => {
  menuLateral.classList.add('activo');
  overlay.classList.add('activo');
  btnHamburguesa.style.display = "none";
  btnHamburguesa.setAttribute('aria-expanded', 'true');
});

// Cerrar menú al clic en el botón cerrar
cerrarMenu.addEventListener('click', () => {
  menuLateral.classList.remove('activo');
  overlay.classList.remove('activo');
  btnHamburguesa.style.display = "block";
  btnHamburguesa.setAttribute('aria-expanded', 'false');

  abrirSubmenu();

});

// Opcional: cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!menuLateral.contains(e.target) && 
    !btnHamburguesa.contains(e.target) && 
    menuLateral.classList.contains('activo')) {
    overlay.classList.remove('activo');
    menuLateral.classList.remove('activo');
    btnHamburguesa.style.display = "block";
    btnHamburguesa.setAttribute('aria-expanded', 'false');
  }
});

});