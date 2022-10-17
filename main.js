
const btnTablas = document.getElementById("btnTablas");
const btnVideo = document.getElementById("btnVideo");
const btnIncio = document.getElementById("btnInicio");



const cont = document.getElementById("content");

btnIncio.addEventListener("click", () => {
    let contenido =
        `
        <div>
            <p>
                El sistema de inmigración de Canadá es un referente mundial y ofrece
                muchas posibilidades a quienes deseen venir aquí.
                Cada año, millones de personas de todo el mundo vienen a Canadá a visitar, trabajar o
                estudiar temporalmente. Además, más de 300.000 personas son autorizadas cada año a
                establecerse permanentemente en Canadá bajo una de estas tres categorías generales:
                inmigración económica, reunificación familiar y consideraciones humanitarias.
                Esto no quiere decir que Canadá le abra sus puertas a
                todo el mundo. Si usted se encuentra en Estados Unidos
                bajo el estatus de Protección Temporal o no tiene estatus
                alguno, o si viene de cualquier región en particular del
                mundo, existe un proceso estricto. No piense que, por
                haber llegado a Canadá, ya todo está resuelto. 
            </p>

            <a class="btn btn-secondary" target="_blank" href="https://www.canada.ca/" role="button">Conozca mas</a>
        </div>
    `;
    cont.innerHTML = contenido;
});

btnTablas.addEventListener("click", function mostrarTabla() {
    let contenido =
        `
         <div>
             <h3>Top Ciudades en Canada</h3>
             <table class="table">
             <thead class="table-danger">
             <tr>
                 <th scope="col">#</th>
                 <th scope="col">Ciudad</th>
                 <th scope="col">Provincia</th>
                 <th scope="col">Habitantes</th>
             </tr>
             </thead>
             <tbody>
             <tr>
                 <th scope="row">1</th>
                 <td>Quebec</td>
                 <td>Quebec</td>
                 <td>752000</td>
             </tr>
             <tr>
                 <th scope="row">2</th>
                 <td>Montreal</td>
                 <td>Quebec</td>
                 <td>1780000</td>
             </tr>
             <tr>
                 <th scope="row">2</th>
                 <td>Edmunston</td>
                 <td>New Brunswick</td>
                 <td>16580</td>
             </tr>
         </table>
         </div>;
     `;
    cont.innerHTML = contenido;
});

btnVideo.addEventListener("click", () => {

    let contenido =

        `
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5eo-MghSuaA" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rayJzo43eh4" 
                title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    `;
    cont.innerHTML = contenido;
});

