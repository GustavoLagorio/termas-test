const mapasFooter = document.querySelectorAll('.ruta');
const coordenadas = [
    ['-32.9600','-60.6598'], //Rosario
    ['-34.6083','-58.3694'], //Buenos Aires
    ['-34.9118','-56.1841'], //Montevideo
    ['-31.4205','-64.1845'] //Cordoba
]

let map = L.map('map').setView([-32.38426, -58.89876], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

/*mapasFooter.forEach((mapa, index) => {

    mapa.addEventListener('click', () => {
        console.log(coordenadas[mapa]);
        //Marcadores
        let starPoint = L.marker(coordenadas[index].map(parseFloat)).addTo(map);
        let endPoint = L.marker([-32.38426, -58.89876]).addTo(map);
        //Obtencion de la ruta
        let routingControl = L.Routing.control({
            waypoints: [
                L.latLng(coordenadas[index].map(parseFloat)), // Coordenadas del punto de inicio
                L.latLng(-32.38426, -58.89876) // Coordenadas del punto de destino
            ],
            routeWhileDragging: false // Permitir actualizar la ruta mientras se arrastran los marcadores
        }).addTo(map);
        // Dibujar ruta en el mapa
        routingControl.on('routesfound', function (e) {
            var routes = e.routes;
            var summary = routes[0].summary;
            var distance = summary.totalDistance / 1000; // Distancia total de la ruta en kilómetros
            var duration = summary.totalTime / 60; // Duración total de la ruta en minutos

            L.Routing.line(routes[0].coordinates).addTo(map); // Dibujar la línea de la ruta en el mapa
            console.log("Distancia: " + distance + " km");
            console.log("Duración: " + duration + " minutos");
        });
    })
})*/