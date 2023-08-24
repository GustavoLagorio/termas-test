const listaBungalows = [
    {
        nombre: 'Bungalow 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
        imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
    },
    {
        nombre: 'Bungalow 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
        imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
    },
    {
        nombre: 'Bungalow 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
        imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
    },
    {
        nombre: 'Bungalow 4',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
        imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
    },
    {
        nombre: 'Bungalow 5',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
        imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
    }
]

const bungalowsList = document.querySelector('.bungalows_main_list');

listaBungalows.forEach((bungalow) => {

    let indice = listaBungalows.indexOf(bungalow);

    if (indice % 2 === 0) {

        const divBungalow = document.createElement('div');
        divBungalow.classList.add('bungalows_main_list_bungalow', 'par');
        divBungalow.innerHTML =
            `<div class="bungalows_main_list_bungalow_info">
            <h2>${bungalow.nombre}</h2>
            <p>${bungalow.description}</p>
            </div>
            <div class="bungalows_main_list_bungalow_imagenes">
                 <img src="${bungalow.imagenes[0]}" alt="">
                <img src="${bungalow.imagenes[1]}" alt="">
                <img src="${bungalow.imagenes[2]}" alt="">
                <img src="${bungalow.imagenes[3]}" alt="">
            </div>
            <a href="" class="btn-accion">Reservar</a>`;
        bungalowsList.appendChild(divBungalow);
    }
    else {
        const divBungalow = document.createElement('div');
        divBungalow.classList.add('bungalows_main_list_bungalow');
        divBungalow.innerHTML =
            `<div class="bungalows_main_list_bungalow_info">
            <h2>${bungalow.nombre}</h2>
            <p>${bungalow.description}</p>
            </div>
            <div class="bungalows_main_list_bungalow_imagenes">
                <img src="${bungalow.imagenes[0]}" alt="">
                <img src="${bungalow.imagenes[1]}" alt="">
                <img src="${bungalow.imagenes[2]}" alt="">
                <img src="${bungalow.imagenes[3]}" alt="">
            </div>
            <a href="" class="btn-accion">Reservar</a>`;
        bungalowsList.appendChild(divBungalow);
    }
})