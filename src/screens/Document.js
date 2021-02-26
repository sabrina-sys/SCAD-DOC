import "../assets/css/body.css";

const Document = () => {
  return (
    <div className="views row ">
      <div className="block col-md-9">
        <h2 id="Markdown">MarkDown</h2>
        <p>
          Markdown es un lenguaje de marcado ligero que puede usar para agregar
          elementos de formato a documentos de texto sin formato. Creado por
          John Gruber en 2004, Markdown es ahora uno de los lenguajes de marcado
          más populares del mundo.
        </p>
        <h4>Caracteristicas</h4>
        <ul>
          <li>
            Markdown se puede utilizar para todo. La gente lo usa para crear
            sitios web , documentos , notas , libros , presentaciones , mensajes
            de correo electrónico y documentación técnica .
          </li>

          <li>
            Markdown es portátil. Los archivos que contienen texto con formato
            Markdown se pueden abrir utilizando prácticamente cualquier
            aplicación. Si decide que no le gusta la aplicación Markdown que
            está utilizando actualmente, puede importar sus archivos Markdown a
            otra aplicación Markdown. Eso está en marcado contraste con las
            aplicaciones de procesamiento de texto como Microsoft Word que
            bloquean su contenido en un formato de archivo propietario.
          </li>

          <li>
            Markdown es independiente de la plataforma. Puede crear texto con
            formato Markdown en cualquier dispositivo que ejecute cualquier
            sistema operativo.
          </li>

          <li>
            Markdown está preparado para el futuro. Incluso si la aplicación que
            estás usando deja de funcionar en algún momento en el futuro, aún
            podrás leer tu texto con formato Markdown usando una aplicación de
            edición de texto. Esta es una consideración importante cuando se
            trata de libros, tesis universitarias y otros documentos importantes
            que deben conservarse indefinidamente.
          </li>

          <li>
            Markdown está en todas partes. Los sitios web como Reddit y GitHub
            son compatibles con Markdown, y muchas aplicaciones de escritorio y
            basadas en la web lo admiten.
          </li>
        </ul>
        <h3 id="Encabezados">Encabezados</h3>
        <p>
          Para crear un título, agregue signos numéricos ( #) delante de una
          palabra o frase. El número de signos numéricos que utilice debe
          corresponder al nivel del título. Por ejemplo, para crear un título de
          nivel tres ( h3), utilice tres signos numéricos (p ### My Header. Ej.,
          ).
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge"># Heading level 1</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h1&gt;Heading level 1&lt;/h1&gt;
                </code>
              </td>
              <td>
                <h1 class="no-anchor" data-toc-skip="">
                  Heading level 1
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">## Heading level 2</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h2&gt;Heading level 2&lt;/h2&gt;
                </code>
              </td>
              <td>
                <h2 class="no-anchor" data-toc-skip="">
                  Heading level 2
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">### Heading level 3</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h3&gt;Heading level 3&lt;/h3&gt;
                </code>
              </td>
              <td>
                <h3 class="no-anchor" data-toc-skip="">
                  Heading level 3
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">#### Heading level 4</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h4&gt;Heading level 4&lt;/h4&gt;
                </code>
              </td>
              <td>
                <h4 class="no-anchor">Heading level 4</h4>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">##### Heading level 5</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h5&gt;Heading level 5&lt;/h5&gt;
                </code>
              </td>
              <td>
                <h5 class="no-anchor">Heading level 5</h5>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">###### Heading level 6</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h6&gt;Heading level 6&lt;/h6&gt;
                </code>
              </td>
              <td>
                <h6 class="no-anchor">Heading level 6</h6>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Sintaxis alternativa</h3>
        <p>
          Alternativamente, en la línea debajo del texto, agregue cualquier
          número de ==caracteres para el nivel de título 1 o --caracteres para
          el nivel de título 2.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  Heading level 1<br />
                  ===============
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h1&gt;Heading level 1&lt;/h1&gt;
                </code>
              </td>
              <td>
                <h1 class="no-anchor" data-toc-skip="">
                  Heading level 1
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  Heading level 2<br />
                  ---------------
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;h2&gt;Heading level 2&lt;/h2&gt;
                </code>
              </td>
              <td>
                <h2 class="no-anchor" data-toc-skip="">
                  Heading level 2
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 id="Parrafos">Párrafos</h3>
        <p>
          Para crear párrafos, use una línea en blanco para separar una o más
          líneas de texto.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  I really like using Markdown.
                  <br />
                  <br />I think I'll use it to format all of my documents from
                  now on.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;p&gt;I really like using Markdown.&lt;/p&gt;
                  <br />
                  <br />
                  &lt;p&gt;I think I'll use it to format all of my documents
                  from now on.&lt;/p&gt;
                </code>
              </td>
              <td>
                <p>I really like using Markdown.</p>

                <p>
                  I think I'll use it to format all of my documents from now on.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 id="Enfasis">Énfasis</h3>
        <p>Puede agregar énfasis poniendo el texto en negrita o cursiva.</p>
        <h4>Negrita</h4>
        <p>
          Para el texto en negrita, agregue dos asteriscos o guiones bajos antes
          y después de una palabra o frase. Para poner en negrita la mitad de
          una palabra para dar énfasis, agregue dos asteriscos sin espacios
          alrededor de las letras.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  I just love **bold text**.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  I just love &lt;strong&gt;bold text&lt;/strong&gt;.
                </code>
              </td>
              <td>
                I just love <strong>bold text</strong>.
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  I just love __bold text__.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  I just love &lt;strong&gt;bold text&lt;/strong&gt;.
                </code>
              </td>
              <td>
                I just love <strong>bold text</strong>.
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">Love**is**bold</code>
              </td>{" "}
              <td>
                <code class="highlighter-rouge">
                  Love&lt;strong&gt;is&lt;/strong&gt;bold
                </code>
              </td>
              <td>
                Love<strong>is</strong>bold
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Itálico</h3>
        <p>
          Para poner el texto en cursiva, agregue un asterisco o un guión bajo
          antes y después de una palabra o frase. Para poner en cursiva la mitad
          de una palabra para dar énfasis, agregue un asterisco sin espacios
          alrededor de las letras.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  Italicized text is the *cat's meow*.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  Italicized text is the &lt;em&gt;cat's meow&lt;/em&gt;.
                </code>
              </td>
              <td>
                Italicized text is the <em>cat’s meow</em>.
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  Italicized text is the _cat's meow_.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  Italicized text is the &lt;em&gt;cat's meow&lt;/em&gt;.
                </code>
              </td>
              <td>
                Italicized text is the <em>cat’s meow</em>.
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">A*cat*meow</code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  A&lt;em&gt;cat&lt;/em&gt;meow
                </code>
              </td>
              <td>
                A<em>cat</em>meow
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Negrita e itálica</h3>
        <p>
          Para enfatizar el texto con negrita y cursiva al mismo tiempo, agregue
          tres asteriscos o guiones bajos antes y después de una palabra o
          frase. Para poner en negrita y cursiva la mitad de una palabra para
          dar énfasis, agregue tres asteriscos sin espacios alrededor de las
          letras.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  This text is ***really important***.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  This text is &lt;strong&gt;&lt;em&gt;really
                  important&lt;/em&gt;&lt;/strong&gt;.
                </code>
              </td>
              <td>
                This text is{" "}
                <strong>
                  <em>really important</em>
                </strong>
                .
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  This text is ___really important___.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  This text is &lt;strong&gt;&lt;em&gt;really
                  important&lt;/em&gt;&lt;/strong&gt;.
                </code>
              </td>
              <td>
                This text is{" "}
                <strong>
                  <em>really important</em>
                </strong>
                .
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  This text is __*really important*__.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  This text is &lt;strong&gt;&lt;em&gt;really
                  important&lt;/em&gt;&lt;/strong&gt;.
                </code>
              </td>
              <td>
                This text is{" "}
                <strong>
                  <em>really important</em>
                </strong>
                .
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  This text is **_really important_**.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  This text is &lt;strong&gt;&lt;em&gt;really
                  important&lt;/em&gt;&lt;/strong&gt;.
                </code>
              </td>
              <td>
                This text is{" "}
                <strong>
                  <em>really important</em>
                </strong>
                .
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  This is really***very***important text.
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  This is
                  really&lt;strong&gt;&lt;em&gt;very&lt;/em&gt;&lt;/strong&gt;important
                  text.
                </code>
              </td>
              <td>
                This is really
                <strong>
                  <em>very</em>
                </strong>
                important text.
              </td>
            </tr>
          </tbody>
        </table>
        <h3 id="Listas">Listas</h3>
        <p>Puede organizar los elementos en listas ordenadas y desordenadas.</p>
        <h4>Listas ordenadas</h4>
        <p>
          Para crear una lista ordenada, agregue elementos de línea con números
          seguidos de puntos. Los números no tienen que estar en orden numérico,
          pero la lista debe comenzar con el número uno.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  1. First item
                  <br />
                  2. Second item
                  <br />
                  3. Third item
                  <br />
                  4. Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ol&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ol&gt;
                </code>
              </td>
              <td>
                <ol>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>Fourth item</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  1. First item
                  <br />
                  1. Second item
                  <br />
                  1. Third item
                  <br />
                  1. Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ol&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ol&gt;
                </code>
              </td>
              <td>
                <ol>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>Fourth item</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  1. First item
                  <br />
                  8. Second item
                  <br />
                  3. Third item
                  <br />
                  5. Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ol&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ol&gt;
                </code>
              </td>
              <td>
                <ol>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>Fourth item</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  1. First item
                  <br />
                  2. Second item
                  <br />
                  3. Third item
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;1. Indented item
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2. Indented item
                  <br />
                  4. Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ol&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item
                  <br />
                  &lt;ol&gt;
                  <br />
                  &lt;li&gt;Indented item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Indented item&lt;/li&gt;
                  <br />
                  &lt;/ol&gt;
                  <br />
                  &lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ol&gt;
                </code>
              </td>
              <td>
                <ol>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>
                    Third item
                    <ol>
                      <li>Indented item</li>
                      <li>Indented item</li>
                    </ol>
                  </li>
                  <li>Fourth item</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Listas desordenadas</h4>
        <p>
          Para crear una lista desordenada, agregue guiones ( -), asteriscos (
          *) o signos más ( +) delante de los elementos de línea. Sangra uno o
          más elementos para crear una lista anidada.
        </p>
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>Markdown</th>
              <th>HTML</th>
              <th>Rendered Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  - First item
                  <br />
                  - Second item
                  <br />
                  - Third item
                  <br />- Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ul&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ul&gt;
                </code>
              </td>
              <td>
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>Fourth item</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  * First item
                  <br />
                  * Second item
                  <br />
                  * Third item
                  <br />* Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ul&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ul&gt;
                </code>
              </td>
              <td>
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>Fourth item</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  + First item
                  <br />
                  + Second item
                  <br />
                  + Third item
                  <br />+ Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ul&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ul&gt;
                </code>
              </td>
              <td>
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>Fourth item</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <code class="highlighter-rouge">
                  - First item
                  <br />
                  - Second item
                  <br />
                  - Third item
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- Indented item
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- Indented item
                  <br />- Fourth item
                </code>
              </td>
              <td>
                <code class="highlighter-rouge">
                  &lt;ul&gt;
                  <br />
                  &lt;li&gt;First item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Second item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Third item
                  <br />
                  &lt;ul&gt;
                  <br />
                  &lt;li&gt;Indented item&lt;/li&gt;
                  <br />
                  &lt;li&gt;Indented item&lt;/li&gt;
                  <br />
                  &lt;/ul&gt;
                  <br />
                  &lt;/li&gt;
                  <br />
                  &lt;li&gt;Fourth item&lt;/li&gt;
                  <br />
                  &lt;/ul&gt;
                </code>
              </td>
              <td>
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>
                    Third item
                    <ul>
                      <li>Indented item</li>
                      <li>Indented item</li>
                    </ul>
                  </li>
                  <li>Fourth item</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 id="Codigo">Bloques de código</h3>
        <p>
          Los bloques de código normalmente tienen una sangría de cuatro
          espacios o una pestaña. Cuando estén en una lista, sangría de ocho
          espacios o dos pestañas.O puedes usar los backshits
        </p>
        <div className="pre1">
          ``` <br />
          &lt;html&gt;
          <br />
          &lt;head&gt;
          <br />
          &lt;title&gt;Test&lt;/title&gt;
          <br />
          &lt;/head&gt;
          <br />
          ```
        </div>
        <h3>Imagenes</h3>
        <p>
          La sintaxis necesaria para mandar a llamar a una imagen seria la
          siguiente
        </p>
        <code>![Tux, the Linux mascot](/assets/images/tux.png)</code>
        <h3>URL y direcciones de correo electrónico</h3>
        <p>
          Para convertir rápidamente una URL o una dirección de correo
          electrónico en un enlace, escríbala entre corchetes angulares.
        </p>
        <code>
          &lt;https://www.markdownguide.org&gt; &lt;fake@example.com&gt;
        </code>
        <h2 id="Git">Manual de Git</h2>
        <h3 id="CGit">Conceptos básicos de Git</h3>
        <ul>
          <li>
            Git se basa en snapshots (instantáneas) del código en un estado
            determinado, que viene dado por el autor y la fecha.
          </li>
          <li>
            Un Commit es un conjunto de cambios guardados en el repositorio de
            Git y tiene un identificador SHA1 único.
          </li>
          <li>
            Las ramas (branches) se pueden pensar como una línea de tiempo a
            partir de los commit. Hay siempre como mínimo una rama principal o
            predefinida llamada Master.
          </li>
          <li>Head es el puntero al último commit en la rama activa.</li>
          <li>
            Remote se refiere a sitios que hospedan repositorios remotos como
            GitHub.
          </li>
        </ul>
        <h3>Workflow de Git</h3>
        <div className="imagen">
          <img
            src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/git-workflow1.png?resize=1024%2C684&ssl=1"
            alt=""
          />
        </div>
        <p>
          Si trabajamos en local (comenzamos en la imagen por la izquierda),
          inicializamos el directorio de trabajo (working directory). Podemos
          trabajar (editar ficheros) en el directorio de trabajo.
        </p>
        <p>
          Con el comando Git add enviamos los cambios a staging, que es un
          estado intermedio en el que se van almacenando los archivos a enviar
          en el commit. Finalmentecon commit lo enviamos al repositorio local.
        </p>

        <p>
          Si queremos colaborar con otros, con push subimos los archivos a un
          repo remoto y mediante pull podríamos traer los cambios realizados por
          otros en remoto hacia nuestro directorio de trabajo.
        </p>

        <p>
          Si comenzamos trabajando en remoto, lo primero que hacemos es un clon
          de la información en el directorio local.
        </p>
        <h3>Ayuda de Git</h3>
        <p>
          Con <code>git help</code> en la terminal obtenemos ayuda.
        </p>
        <h3 id="ConfGit">Configuración de Git</h3>
        <p>
          Como mínimo debemos configurar el nombre y el email en la aplicación
          con los siguientes comandos:
        </p>

        <div className="codigo">
          <p>git config --global user.name "Tu nombre aquí"</p>

          <p>git config --global user.email "tu_email_aquí@example.com"</p>
        </div>
        <p>Para comprobar podemos usar:</p>

        <div className="codigo">
          <p>git config -–global –list</p>
        </div>

        <p>
          Lo que hace el sistema es crear un archivo de texto llamado
          .gitconfig, por lo que podemos mostrarlo también con cat:
        </p>

        <div className="codigo">
          <p>cat ~/.gitconfig</p>
        </div>
        <br />
        <h3>Comenzar a trabajar con Git</h3>
        <h4>Trabajar en un nuevo proyecto con Git</h4>
        <p>
          Nos situamos en la carpeta en la que queremos trabajar. Nos aseguramos
          con pwd, para saber dónde estamos.
          <br />
          Ahora con git init y el nombre del proyecto, creamos un nuevo
          proyecto:
        </p>
        <div className="codigo">
          <p>git init prueba01</p>
        </div>
        <h3>Primer commit</h3>
        <p>
          Ahora vamos a crear algún archivo en el primero de los proyectos. Yo
          he creado un archivo README.md con el contenido: #Demo de Git.
        </p>
        <div className="codigo">
          <p>git status</p>
        </div>
        <div className="imagen">
          <img
            src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/05-git-status.png?resize=1024%2C444&ssl=1"
            alt=""
          />
        </div>
        <p>
          Podemos ver los detalles. Estamos ubicados en la rama máster y que
          tenemos un archivo que no ha sido agregado aún.
          <br />
          Lo primero que vamos a hacer es agregarlo al staging, también llamado
          Git Index, mediante el comando git add:
        </p>
        <div className="codigo">
          <p>git add README.md</p>
        </div>
        <div className="imagen">
          <img
            src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/06-git-add.png?w=731&ssl=1"
            alt=""
          />
        </div>
        <p>
          Ahora vemos que el archivo ya está esperando a ser enviado al repo
          mediante commit.
          <br />
          Al ejecutar commit no especificamos qué archivos se enviarán. Se
          envían todos los que estén en staging. Vamos a agregar la opción -m
          para agregar un mensaje al commit, por ejemplo “commit inicial”:
        </p>
        <div className="codigo">
          <p>git commit -m “commit inicial”</p>
        </div>

        <h3 id="GitLocal">Trabajando con Git en local</h3>

        <p>
          Ahora vamos a agregar más contenido al archivo README y hacemos un
          status. Veremos que ahora el sistema nos indica que hay cambios no
          enviados al staging:
        </p>
        <div className="codigo">
          <p>git status</p>
        </div>
        <img
          src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/08-git-status-con-archivos-modificados.png?resize=1024%2C452&ssl=1"
          alt=""
          srcset=""
        />

        <p>
          Con el mismo procedimiento de antes, agregamos <b>(add)</b> y hacemos
          un nuevo commit:
        </p>
        <img
          src="https://i2.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/09-git-commit-con-archivos-modificados.png?w=1023&ssl=1"
          alt=""
          srcset=""
        />

        <p>También podemos hacer el add y el commit en un solo paso con:</p>

        <div className="codigo">
          <p>git commit -a</p>
        </div>

        <p>
          Tal como nos recomienda el propio Git en la captura de arriba. Si
          queremos también agregar el mensaje quedaría
        </p>

        <div className="codigo">
          <p>git commit -am “msj”</p>
        </div>

        <p>
          Podemos hacer algunos cambios más y agregar otro archivo, por ejemplo,
          un index.html al proyecto.
        </p>
        <img
          src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/10-git-status.png?resize=1024%2C449&ssl=1"
          alt=""
          srcset=""
        />
        <p>
          En este caso vamos a agregar los archivos modificados o nuevos al
          staging de forma recursiva con
        </p>
        <div className="codigo">
          <p>git add .</p>
        </div>
        <img
          src="https://i0.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/11-git-add-punto.png?w=663&ssl=1"
          alt=""
          srcset=""
        />

        <p>Un nuevo commit:</p>
        <img
          src="https://i2.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/12-nuevo-commit.png?resize=1024%2C199&ssl=1"
          alt=""
          srcset=""
        />
        <p>
          Vamos a volver a hacer algún cambio y lo agregamos al staging. Si nos
          fijamos en la captura de la anterior operación add, el sistema nos
          indica que podemos sacar un archivo del stage con git reset HEAD y el
          nombre del archivo. Lo probamos con README:
        </p>

        <div className="codigo">
          <p>git reset HEAD README.md</p>
        </div>
        <img
          src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/13-git-reset.png?w=835&ssl=1"
          alt=""
          srcset=""
        />
        <p>
          Un nuevo status nos indicará que hay uno en el staging y otro por
          agregar:
        </p>
        <img
          src="https://i0.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/14-git-status-tras-reset.png?resize=1024%2C375&ssl=1"
          alt=""
          srcset=""
        />
        <p>
          Como podemos ver, también podemos descartar los cambios en el
          directorio de trabajo con checkout:
        </p>

        <div className="codigo">
          <p>git checkout -- README.md</p>
        </div>
        <h3 id="GitRemoto">Trabajando con Git en remoto </h3>

        <h5>Creando un nuevo repositorio en la linea de comando</h5>

        <div className="codigo">
          <ul>
            <li>
              <p>echo "# demo-git" {">>"} README.md</p>
            </li>
            <li>
              <p>git init</p>
            </li>
            <li>
              <p>git add README.md</p>
            </li>
            <li>
              <p>git commit -m "first commit"</p>
            </li>
            <li>
              <p>
                git remote add origin git@githun.com:diegocmartin/demo-git.git
              </p>
            </li>
            <li>
              <p>git push -u origin master</p>
            </li>
          </ul>
          </div>

          <h5>O agrega un repositorio existente desde la linea de comando</h5>
          <div className="codigo">
            <ul>
              <li>
                <p>
                  git remote add origin git@github.com:diegocmartin/demo-git.git
                </p>
              </li>
              <li>
                <p>git push -u origin master</p>
              </li>
            </ul>
          </div>
          <p>
            Ahora nos movemos al proyecto con el que queremos trabajar. Vemos
            que el status no hay nada pendiente y ejecutamos el primer comando.
          </p>
          <div className="codigo">
            <p>git remote -v</p>
          </div>
          <div>
          <p>
            También podemos agregar repositorios de otros usuarios para recibir
            con el comando <b>git remote add [nombre] [url]</b>.
          </p>
        </div>

        <p>Ejemplo: $ </p>
        <div className="codigo">
          <p>git remote add origin git://github.com/paulboone/ticgit.git</p>
        </div>
        <p>
          Para recibir los ficheros de uno de estos repositorios de otro usuario
          usamos el comando fetch seguido del nombre que hemos puesto en el
          comando anterior.
        </p>
        <p>Ejemplo: $ </p>
        <div className="codigo">
          <p>git fetch pb</p>
        </div>
        <p>
          Ahora vamos a enviar los archivos en local al repo remoto con push y
          la opción -u para establecer un enlace entre ellos, especificando
          también el repositorio remoto (origin) y la rama de trabajo (master),
          quedando:
        </p>

        <div className="codigo">
          <p>git push -u origin master</p>
        </div>
        <p>
          Una vez establecido el enlace no hará falta usar la opción -u,
          quedando la instrucción para actualizar los cambios en el repositorio
          remoto de la siguiente manera:
        </p>

        <div className="codigo">
          <p>git push origin master</p>
        </div>
        <img
          src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/34-Segundo-push.png?w=739&ssl=1"
          alt=""
        />
        <p>Ahora podriamos ver el repositorio actualizado en GitHub:</p>

        <p>
          Ahora vamos a modificar o agregar algún archivo al repo local y
          actualizar de nuevo el remoto.
        </p>
        <img
          src="https://i0.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/36-nuevos-cambios-para-segundo-push.png?w=894&ssl=1"
          alt=""
        />

        <p>
          Si vemos el status ahora, este nos indica que hay cambios pendientes
          de sincronizar con el remoto:
        </p>
        <img
          src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/37-nuevo-status-para-segundo-push.png?w=688&ssl=1"
          alt=""
        />
        <p>
          Aunque ahora estoy trabajando sólo, lo lógico es solicitar los últimos
          cambios mediante un pull, antes de enviar los nuestros con push, para
          evitar conflictos con otros miembros del equipo. De modo que
          ejecutamos:
        </p>

        <div className="codigo">
          <ul>
            <li>
              <p>git pull origin master</p>
            </li>
            <li>
              <p>git push origin master</p>
            </li>
          </ul>
        </div>
        <img
          src="https://i1.wp.com/www.diegocmartin.com/wp-content/uploads/2018/12/38-pull-y-push-para-trabajar-con-otros-participantes-en-GitHub.png?w=891&ssl=1"
          alt=""
        />

        <p>Ya podemos ver los nuevos cambios en el repositorio remoto.</p>

        <p>
          Al hacer pull, el sistema recupera y trata de unir la rama remota con
          la local, mientras que con el comando fetch que veíamos antes no.
        </p>
      </div>
      <div className="indice col-md-3">
        <ul>
          <li>
            <a href="#Markdown">Manual de MarkDown</a>
            <ul className="subindice">
              <li>
                <a href="#Encabezados">Encabezados</a>
              </li>
              <li>
                <a href="#Parrafos">Parrafos</a>
              </li>
              <li>
                <a href="#Enfasis">Enfasis</a>
              </li>
              <li>
                <a href="#Listas">Listas</a>
              </li>
              <li>
                <a href="#Codigo">Bloques de Codigo</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#Git">Manual de Git</a>
            <ul className="subindice">
              <li>
                <a href="#CGit">Conceptos de Git</a>
              </li>
              <li>
                <a href="#ConfGit">Configuracion de Git</a>
              </li>
              <li>
                <a href="#GitLocal">Trabajando con Git en local</a>
              </li>
              <li>
                <a href="#GitRemoto">Trabajando con Git en remoto</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Document;
