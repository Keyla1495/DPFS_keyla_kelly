# ***RETROSPECTIVA*** 

## 1. Comenzar a hacer:
Integración de pruebas automáticas: Aunque el proyecto funcionó correctamente, la falta de pruebas automáticas en el proceso es algo que debería comenzar a hacer. Implementar pruebas unitarias y de integración con herramientas como Jest y React Testing Library nos permitirá detectar errores a tiempo, lo que hará que el proceso de desarrollo sea más seguro y eficiente.
Refactorización a medida que crece el proyecto: A medida que el proyecto crece, las necesidades de refactorización se vuelven evidentes. Debería comenzar a aplicar mejores prácticas en la organización del código, como la división de los componentes más grandes en partes más pequeñas y reutilizables, y la implementación de hooks personalizados.
Optimización de rendimiento con herramientas adicionales: Como en los casos de los productos y usuarios, el uso de paginación y filtros es fundamental. Deberíamos comenzar a hacer uso más frecuente de caching y lazy loading en el backend y frontend para mejorar el rendimiento y la experiencia del usuario.

## 2. Hacer más:
Optimización del rendimiento frontend: Durante el desarrollo, noté que en algunas ocasiones la aplicación podría beneficiarse de un mayor rendimiento, especialmente con las peticiones de datos. Debemos hacer más uso de React.memo, useMemo, y React.lazy para mejorar el rendimiento y reducir los tiempos de carga de la aplicación.
Mejorar la experiencia de usuario (UX): Aunque la tienda es funcional, hay áreas en las que podemos hacer más para mejorar la experiencia de usuario, como en el diseño de las páginas de productos, mejorando la interacción con los usuarios y la estética del sitio.
Escalabilidad de la base de datos: Aunque usé archivos JSON para almacenar datos de usuarios y productos, en proyectos futuros, SQL o NoSQL como MongoDB son opciones mucho más escalables. Debemos hacer más por integrar una base de datos real y mejorar la forma en que almacenamos y accedemos a los datos.

## 3. Continuar haciendo:
Buen manejo de errores: El manejo adecuado de errores a través de console.error() y el uso de bloques try-catch ha sido esencial para resolver problemas rápidamente. Continuaré asegurándome de que todas las interacciones asincrónicas (como las llamadas a las API) estén bien manejadas para evitar errores en la aplicación.
Organización del código y separación de responsabilidades: La forma en que organicé los archivos y separé las responsabilidades de los componentes, servicios y controladores ha sido efectiva. Continuaré con este enfoque modular para asegurarme de que el código siga siendo mantenible y escalable.
Interacción entre frontend y backend: La comunicación fluida entre React y Express ha funcionado bien, y continuaré utilizando este enfoque para garantizar que los datos se manejen de manera eficiente entre el cliente y el servidor.

## 4. Hacer menos:
Redundancia de código: En algunos puntos del proyecto, como en las funciones que manejan las peticiones de usuarios y productos, se repitió mucho código. Debería hacer menos de este tipo de redundancia, centralizando funciones comunes en servicios reutilizables.
Dependencia de datos estáticos: Usar archivos estáticos como JSON fue útil en las primeras fases del proyecto, pero a medida que el proyecto crezca, depender menos de estos archivos y más de una base de datos dinámica y escalable será esencial.
Uso excesivo de useState en componentes complejos: A veces, usé demasiados estados locales con useState, lo que hizo que algunos componentes se volvieran difíciles de manejar. Debería hacer menos uso de useState en componentes complejos y utilizar herramientas como useReducer o Context API para manejar el estado global de manera más eficiente.

## 5. Dejar de hacer:
Uso directo de archivos JSON para almacenar datos: Aunque inicialmente utilicé archivos JSON, esta es una solución que no escala bien. Debería dejar de usar archivos JSON y comenzar a integrar una base de datos como MongoDB o SQL para manejar los datos de usuarios y productos.
Dependencia de funciones sin modularidad: Algunos componentes grandes podrían haberse modularizado mejor. Debería dejar de crear componentes grandes que gestionan demasiadas responsabilidades y en su lugar, desglosarlos en piezas más pequeñas y manejables, siguiendo el principio de responsabilidad única.

