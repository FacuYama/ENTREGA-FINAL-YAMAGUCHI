import React from 'react';

const About = () => {
    return (
        <>
          <div>
  <h1>SOBRE NOSOTROS</h1>
  <section>
    <ul className="nosotros">
      <li className="nosotros__item">
        <p>Somos un emprendimiento familiar conrformado por 2 hermanos. Inauguramos el 20 de septiembre del 2021 justo cuando estaba terminando la pandemia</p>
      </li>
      <li className="nosotros__item--imagen">
        <img className="imagen" src="../img/local.jpg" alt="Imagen del negocio" />
      </li>
      <li className="nosotros__item">
        <p>Principalmente nuestras ventas son de accesorios e insumos para celulares, como por ejemplo: fundas, templados, cargadores, auriculares, cables, parlantes, etc.</p>
        <p>Tambien tenemos servicio tecnico especializado en celulares de todas las marcas, como por ejemplo: cambio de pin de cargar, cambio de modulos, arreglo de dispositivos mojados, etc.</p>
      </li>
    </ul>
  </section>
</div>
        </>
    );
}

export default About;
