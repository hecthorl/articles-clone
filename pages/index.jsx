/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Home() {
   const as = "<";
   const ad = ">";
   const a1 = "/";
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div className="bg-[#f6b33c] flex justify-center">
            <div className="bg-[#946b24] p-2 text-white my-5">
               <h1 className="flex flex-col text-6xl mb-5">
                  <span>Una Guía Práctica Para Crear</span>
                  <span> Componentes Reusables de React</span>
               </h1>
               <div className="flex gap-x-6 text-xl">
                  <span>Por: Hanbyeol (Benny) Joo</span>
                  <span>JavaScript</span>
                  <time>Septiembre 6, 2021</time>
               </div>
            </div>
         </div>
         <div className="max-w-[909px] mx-auto text-lg mt-10 space-y-3">
            <p>
               A pesar de que React es uno de los más usadas y populares
               librerias del frontend en el mundo, muchos desarrolladores/as
               siguen teniendo problemas cuando se trata de refactorizar el
               código para mejorar la reutilización.
            </p>
            <p>
               Si te has encontrado a ti mismo repitiendo el mismo pedazo de
               código por toda tu aplicación de React, entonces has venido al
               artículo indicado.
            </p>
            <p>
               En este tutorial, te presentaré los tres indicadoes más comunes
               de que es hora de crear un componente reutilizable de React.
               Luego veremos algunas demostraciones prácticas meidante la
               creación de un diseño reutilizable y dos emocionantes hooks de
               React.
            </p>
         </div>
         <div className="max-w-[909px] mx-auto mt-5 text-lg">
            <h2 className="text-3xl">
               Los 3 principales indicadores de un componente reutilizable de
               React
            </h2>
            <p className="my-2">
               Primero veremos algunos indicadores de cuando puede que quieras
               hacer esto
            </p>
            <h3 className="text-2xl">
               Creación repetitiva de wrappers con el mismo CSS
            </h3>
            <p>
               Mi señal favorita de saber cuando crear un componente
               reutilizable es el uso del mismo estilo CSS. Ahora, puede que
               pienses, &quot;Espera un minuto: ¿por qué no simplemente asigno
               la misma clase a los elementos que comparten el mismo estilo
               CSS?&quot; Y tienes toda la razón, no es una buena idea crear
               componentes reutilizables siempre que algunos elementos de
               diferentes componentes comparten el mismo estilo. De hecho puede
               introducir una complejidad innecesaria. Asi que tienes que
               preguntarte una cosa más: ¿son muy comunes estos wrappers?
            </p>
            <p>Por ejemplo, considera la siguiente página de login y signup:</p>
            <img src="/login.png" alt="asdsd" />
            <img src="/signup.png" alt="asdsd" />
            <p>
               Los mismos estilos estan siendo aplicados al contenedor (el
               elemento {as}div{a1 + ad}) y el footer de cada componente. Asi
               que en este caso puedes crear dos componentes reutilizables —{" "}
               {as}Wrapper{a1 + ad} y {as}Footer{a1 + ad} — y pasarlos como
               props. Por ejemplo el componente login podria ser refactorizado
               de esta manera:
            </p>
            <img src="/wrap.png" alt="wrap" />
            <p>
               Como resultado ya no necesitarás importar common.css en multiples
               páginas o crear el mismo div para envolver todo.
            </p>
         </div>
         <div className="max-w-[909px] mx-auto mt-5 text-lg">
            <h2>Repetitive use of event listeners</h2>
            <p>
               Para adujntar un detector de eventos a un elemento puedes
               manejarlo dentro de un useEffect así:
            </p>
            <img src="/useefect.png" alt="ssssss" />
            <p>O puedes hacerlo directamente dentro de tu JSX asi:</p>
            <img src="/butn.png" alt="1111" />
            <p>
               Cuando quieras agregar un detector de eventos al document o
               window, tendras que ir con el primer método. Sin embargo, como ya
               te habrás dado cuenta, el primer método requiere mas código con
               el uso del useEffect, el addEventListener y el
               removeEventListener. En cuyo caso, la creación de un custom hook
               (hook personalizado) permitirá que sus componentes sean mas
               concisos
            </p>

            <p className="my-5">
               Hay 4 posibles escenarios para usar un detector de eventos
            </p>
            <ul className="list-disc pl-6">
               <li>el mismo detector de eventos, mismo manejador de eventos</li>
               <li>
                  el mismo detector de eventos, diferente manejador de eventos
               </li>
               <li>
                  diferente detector de eventos, mismo manejador de eventos
               </li>
               <li>
                  diferente detector de eventos, diferente manejador de eventos
               </li>
            </ul>
            <p>
               En el primer escenario, puedes crear un hook donde el detector de
               eventos y el manejador de eventos esten definidos:
            </p>
            <img src="useEvent.png" alt="222222222222" />
            <p>Luego puedes usar este hook en cualquier componente:</p>
            <img src="useeee.png" alt="111111" />
            <p>
               Para los otros 3 escenarios, recomiendo crear una hook que reciba
               un evento y una función manejador de eventos como prop. Por
               ejemplo, pasaré keydwon y handleKeydown como prop a mi custom
               hook:
            </p>
            <img src="usessss.png" alt="2222" />
            <p>Y luego emplear este hook en cualquier componente:</p>
            <img src="lastttt.png" alt="2d2dsds" />
         </div>
         <div className="max-w-[909px] mx-auto mt-5 text-lg">
            <h2>Uso repetitivo del mismo GraphQL script</h2>
            <p>
               Realmente no es necesario buscar señales cuando se trata de hacer
               que el código GraphQL sea reutilizable. Para aplicaciones
               complejas, los scripts GraphQL para una consulta o una mutación
               ocupan fácilmente de 30 a 50 líneas de código porque hay muchos
               atributos para solicitar. Si está utilizando el mismo script
               GraphQL más de una o dos veces, creo que merece su propio hook
               personalizado.
            </p>
            <img src="sql.png" alt="aplsss" />
            <p>
               En vez de repetir este código en cada página que solicites
               publicaciones desde el backend, debería crear un custom hook para
               esta API en particular
            </p>
            <img src="sugarmamani.png" alt="dddddddddd" />
         </div>
         <div>
            <h2>Construyendo tres componentes reutilizables de React</h2>
            <p>
               Ahora que hemos visto algunas señales comunes de cuando crear un
               nuevo componente que puedes compartir a travez de tu aplicación
               de React, pongamos ese conocimiento en práctica y construyamos 3
               demos traciones prácticas
            </p>
            <p>1. Layout Component</p>
            <p>
               React es normalmente usado para construir aplicaciones web
               complejas. Esto significa que necesario desarrollar una gran
               cantidad de paginas en React, i dudo que cada página de una
               aplicación tenga una layout diferente. Por ejemplo una aplicación
               web que consista en 30 paginas usualmente usa menos de 5 layouts
               distintos. Por lo tanto, construir una layout reusable y flexible
               que pueda ser utilizada en muchas páginas difirentes es esencial.
               Esto ahora muchas lineas de código y consecuentemente una
               tremenda cántidad de tiempo.
            </p>
            <p>Veamos un ejemplo:</p>
            <img src="masmajo.png" alt="ffdfdfdfdfd" />
            <p>
               Esto es una típica página web que tiene un {as}header{a1 + ad},
               {as}main{ad}y un {as}footer{ad} como prop, cómo sigue sigue el
               siguiente código:
            </p>
            <img src="taaaaaaaaaaaaaaaaaaaaa.png" alt="sdad" />
            <p>
               Este componente no requiere {as}header{ad} y {as}footer{ad}. Así
               que puedes usar esta misma layout para páginas independientes si
               tienen un header o un footer.
            </p>
            <p>
               usando este componente layout, puedes convertir tu página feed en
               un mucho más sofisticado bloque de código:
            </p>
            <img src="tttttttttttttttttttttttttt.png" alt="22221212121212" />
         </div>
         <div>
            <h2>2. Detector de Eventos</h2>
            <p>
               A menudo el mismo detector de eventos es usado en más de una vez
               en una aplicación. En cuyo caso es una gran idea crear un custom
               hook. Aprendamos como hacer esto desarrollando un hook
               useScrollSaver, el cual guarda la posición de desplazamiento del
               dispositivo de un usuario en una página, de modo que el usuario
               no necesite desplazarse de nuevo desde la parte superior.
            </p>
            <img src="p1.png" alt="sssss" />
            <img src="p2.png" alt="sssss" />
            <p>
               Puedes ver que el hook useSacrollSaver necesita recibir dos
               argumentos: scrollablediv, el cual debe ser un contenedor
               scrollable justo como el contanedor {as}main{ad} en el layaout de
               arriva, y pageUrl el cual debe ser usado como un identificador de
               una página que pueda almacenar la posición del scroll de
               multiples páginas
            </p>
            <h3>Paso 1: Guarda la posición del scroll</h3>
            <p>
               Antes que nada, necesitas vincular un detector de eventos de
               desplazamiento a su contenedor desplazable
            </p>
            <img src="ffffffff.png" alt="2131F" />
            <p>
               Ahora siempre que scrollableDiv es desplazado por un usario, una
               función llamada handleScroll funcionará, En esta función,
               deberías utilizar localstorage o sesionstorage, para guardar la
               posición del scroll. La diferencia es que el dato en localstorage
               no expirará, mientras que en sesionstorage se borrará cuando la
               sesion de la página termine. Puedes usar setItem(id: string,
               value: string) para guardar datos en cualquier almacenamineto
            </p>
            <img src="prrprprprpprpr.png" alt="prrprprprpprpr.png" />
            <h3>Paso 2: Restaura la posicion del scroll</h3>
            <p>
               Cuando un usario regresa a un sitio web, el usuario debería ser
               dirigido a su posicion de scroll anterior (si hay alguna). Este
               dato de posicion esta actualmente guardada en sessionStorage, y
               necesitarás sacarla y usarla. Puedes usar getItem(id: string)
               para obtener datos del almacenamineto. Luego simplemente
               necesitarás configurar el scroll-top del contenedor desplazable
               para obtener este valor:
            </p>
            <img src="nbnbnbnbnbnbnbnb.png" alt="nbnbnbnbnbnbnbnb.png" />
            <h3>Paso 3: Usa el hook useScrollSaver en cualquier página</h3>
            <p>
               Ahora que hemos terminado de creear el custom hook, puedes usarlo
               en cualquier página que quieras. Regresemos a Laout.js y usemos
               el hook alli eso permitirá que cualquier página de su web que use
               este diseño emplee tambien el hook.
            </p>
            <img src="hfhfhfhfhfhfhfhf.png" alt="hfhfhfhfhfhfhfhf.png" />
            <p>
               Puedes encontrar una demo
               <a
                  href="https://codesandbox.io/s/example-2-g22qh"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {" "}
                  aqui
               </a>
            </p>
         </div>
         <div>
            <h2>Query / Mutación (Especificamente para GraphQL)</h2>
            <p>
               Si tegusta usar GraphQL con react, como yo, puedes reducir tu
               código base aun más creando un hook para consultas o mutaciones
               de GraphQL
            </p>
            <img
               src="aaaaaaaaaaaaaaaaaaaaaaaa222.png"
               alt="aaaaaaaaaaaaaaaaaaaaaaaa222.png"
            />
            <p>
               Si hay más y más atributos para pedir desde el bakend, tu codigo
               GraphQL ocupará mas y mas espacio. Entonces, en vez de repetir el
               codigo de GraphQL y usar el useQuery cada vez que necesites para
               correr getPost(), puedes crear el siguiente hook
            </p>
            <img src="laaaaaaaaaalalalllllllllza.png" alt="ssssssss" />
         </div>
      </>
   );
}
