var config = {
    style: 'mapbox://styles/elenaastorga/cmbi8x8tl004l01se6b8abcvy',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZWxlbmFhc3RvcmdhIiwiYSI6ImNtYmh3NHZ1bjAxc2MycHNkdWx6NGhoMDQifQ.E8b8B-OO0bDYNDUSpSU1tw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Los peores incendios de California',
    subtitle: '',
    byline: 'Elena Astorga Coto',
    footer: 'Fuentes: California Department of Forestry and Fire Protection (CAL FIRE), US Census Bureau, National Oceanic and Atmospheric Administration (NOAA). <br> Creado con <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
           {
            id: 'video',
            alignment: 'fully',
            hidden: false,
            title: 'A comienzos de año, las imágenes de Los Ángeles en llamas dieron la vuelta al mundo. Pero ¿fue este el peor incendio de la historia de California?',
            description: '<iframe src="https://commons.wikimedia.org/wiki/File:33_minutes_into_Palisades_Fire,_Super_Scoopers_arrive.webm?embedplayer=yes" width="100%" height="288" frameborder="0" loading="lazy" allow="autoplay; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-119.88734, 36.71603],
                zoom: 5.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Camp Fire (2018)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Camp_Fire_oli_2018312_Landsat.jpg/500px-Camp_Fire_oli_2018312_Landsat.jpg',
            description: 'La respuesta es no: ese dudoso honor se lo lleva el incendio conocido como Camp Fire, en el condado de Butte. Además de el más destructivo según el Departamento de Bosques y Protección contra Incendios de California (CAL FIRE), se trató del más mortífero: se cobró la vida de 85 personas.',
            location: {
                center: [-121.60538, 39.75622],
                zoom: 8.7,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'North Complex',
                    opacity: 0.25
                },
                    ],
            onChapterExit: [
                {
                    layer: 'North Complex',
                    opacity: 1
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Eaton Fire (2025)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Eaton_Fire_on_2025-1-8_%28cropped%29.jpg/500px-Eaton_Fire_on_2025-1-8_%28cropped%29.jpg',
            description: 'El incendio Eaton, uno de los fuegos paralelos que arrasó parte del condado de Los Ángeles en enero de 2025, se sitúa como el segundo más destructivo de la historia de California, con más de 90.000 estructuras destruidas; y el quinto más letal, con 18 víctimas mortales.',
            location: {
                center: [-118.11801, 34.18819],
                zoom: 12.28,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                    ],
            onChapterExit: [
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Palisades Fire (2025)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palisades_Fire_%2854257375328%29.jpg/500px-Palisades_Fire_%2854257375328%29.jpg',
            description: 'De forma simultánea al Eaton Fire, el incendio Palisades quemó casi 9.500 hectáreas en el barrio angelino de Pacific Palisades y la ciudad de Malibú. Causó la muerte de 12 personas y la destrucción de más de 6.800 edificios, convirtiéndose en el décimo incendio más letal y el tercero más destructivo en el estado.',
            location: {
                center: [-118.58230, 34.05824],
                zoom: 11.64,
                pitch: 77.50,
                bearing: 64.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Woolsey',
                    opacity: 0.25
                },
            ],
            onChapterExit: [
                {
                    layer: 'Woolsey',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Tubbs Fire (2017)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/JEMHP.jpg/500px-JEMHP.jpg',
            description: 'En octubre de 2017, más de una docena de incendios ardieron de forma simultánea al norte del estado, en lo que se ha llamado la tormenta de fuego del norte de California. El más grave de ellos, el incendio Tubbs, provocó la muerte de 22 personas y arrasó más de 5.600 estructuras, lo que lo situó brevemente como el más destructivo de California (superado solo un año después por el Camp Fire).',
            location: {
                center: [-122.71837, 38.55195],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Valley',
                    opacity: 0.25
                },
            ],
            onChapterExit: [
                 {
                    layer: 'Valley',
                    opacity: 1
                },
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Tunnel Fire (1991)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Golden_Gate_Avenue_following_firestorm.jpg',
            description: 'El Fire Tunnel, también conocido como la tormenta de fuego de Oakland, fue una gran conflagración suburbana que se afectó a Oakland y a Berkeley, en la densamente poblada área de la Bahía de San Francisco. El incendio acabó con la vida de 25 personas e hirió a otras 150. Las 620 hectáreas destruidas incluían 2.843 viviendas unifamiliares y 437 apartamentos y condominios. Las pérdidas económicas del incendio se estimaron en 1.500 millones de dólares (unos 2.990 millones en dólares de 2024).',
            location: {
                center: [-122.23323, 37.85021],
                zoom: 12.7,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cedar Fire (2003)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Cedar_Fire_crosses_Interstate_15.jpg',
            description: 'El Cedar Fire fue un incendio forestal masivo que quemó más de 100.000 hectáreas de terreno en el condado de San Diego, California, a lo largo de octubre y noviembre de 2003. Para cuando el incendio estuvo bajo control, había destruido 2.820 edificios (entre ellos 2.232 viviendas) y matado a 15 personas, entre ellas un bombero. Se trata además del décimo mayor incendio del estado, en términos de área quemada.',
            location: {
                center: [-116.66152, 32.97034],
                zoom: 9.28,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Witch',
                    opacity: 0.25
                },
            ],
            onChapterExit: [
                 {
                    layer: 'Witch',
                    opacity: 1
                },
            ]
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'North Complex Fire (2020)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bear_Fire_on_Highway_162_-_2020-09-10.jpg/1920px-Bear_Fire_on_Highway_162_-_2020-09-10.jpg',
            description: 'El North Complex Fire fue una conflagración masiva que ardió en el Bosque Nacional de Plumas, en el norte de California. 21 incendios forestales fueron provocados por rayos el 17 de agosto de 2020, que no fueron apagados en su totalidad hasta el 3 de diciembre de ese año.  El fuego mató a 16 personas e hirió a más de 100. Además, arrasó 129.068 hectáreas, situándose como el octavo más grande de la historia de California.',
            location: {
                center: [-120.91373, 39.78537],
                zoom: 9.16,
                pitch: 77.50,
                bearing: 64.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Camp',
                    opacity: 0.25
                },
                    ],
            onChapterExit: [
                {
                    layer: 'Camp',
                    opacity: 1
                }
            ]
        },
        {
            id: 'eight-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Valle Fire (2015))',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Valley_Fire_California_CALFIRE.jpg',
            description: 'El Valley Fire abrasó 30.800 hectáreas de terreno, mató a cuatro personas y destruyó casi 2.000 edificios. Las pérdidas, solo en daños materiales asegurados, se estimaron en 921 millones de dólares (equivalentes a unos 1.220 millones de dólares en 2024). En su momento, el incendio fue el tercero más destructivo de la historia de California en cuanto al total de estructuras quemadas, pero los ya mencionados Camp Fire (2018) y North Complex Fire (2020) lo superaron pronto.',
            location: {
                center: [-122.61525, 38.84379],
                zoom: 9.73,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Tubbs',
                    opacity: 0.25
                },
            ],
            onChapterExit: [
                {
                    layer: 'Tubbs',
                    opacity: 0.25
                },
            ]
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Witch Fire (2007)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Witch_Creek_Fire_at_night.jpg',
            description: 'El incendio Witch Fire quemó 80.100 hectáreas de terreno en el condado de San Diego, donde provocó la evacuación de 500.000 personas. En total, obligó a evacuar a un millón de residentes de todo el sur de California; la mayor operación de este tipo en la historia del estado. Destruyó 1.265 estructuras residenciales y causó pérdidas de al menos 1.142 millones de dólares en daños (aproximadamente 1.732 millones de dólares en 2024). Además, provocó 2 muertes e hirió a 55 bomberos.',
            location: {
                center: [-116.78100, 33.09836],
                zoom: 9,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Cedar',
                    opacity: 0.25
                },
            ],
            onChapterExit: [
                 {
                    layer: 'Cedar',
                    opacity: 1
                },
            ]
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Woolsey Fire (2018)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Woolsey_Fire_evacuation_from_Malibu_on_November_9%2C_2018.jpg/500px-Woolsey_Fire_evacuation_from_Malibu_on_November_9%2C_2018.jpg',
            description: 'El incendio de Woolsey fue un incendio forestal que comenzó en el condado de Los Ángeles y se extendió al vecino condado de Ventura, quemando 39.234 hectáreas de terreno. El fuego destruyó 1.643 estructuras, costó al menos 6.000 millones de dólares en daños materiales, mató a tres personas y provocó la evacuación de más de 295.000 vecinos. Se originó el mismo día (el 8 de noviembre) que el Camp Fire, el incendio más destructivo hasta la fecha de todo el estado.',
            location: {
                center: [-118.79119, 34.10519],
                zoom: 9.94,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Palisades',
                    opacity: 0.25
                },
            ],
            onChapterExit: [
                 {
                    layer: 'Palisades',
                    opacity: 1
                },
            ]
        },
        {
            id: 'eleventh-chapter',
            alignment: 'fully',
            hidden: false,
            title: '9 de los 10 incendios más destructivos (es decir, aquellos que han arrasado un mayor número de estructuras, según los datos del  Departamento Forestal y de Protección contra Incendios de California o CAL FIRE) ocurridos en California desde que se tiene registro —a partir del año 1878— han tenido lugar en el siglo XXI; 7 de esos 10 en los últimos 10 años.',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/23597479/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>',
            location: {
                center: [-119.88734, 36.71603],
                zoom: 5.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Asimismo, lo que va del siglo XXI concentra 6 de los 10 incendios más mortíferos en la historia del Estado. En el siguiente gráfico vemos cómo se distribuyen en el tiempo los 10 incendios más destructivos de California, con el tamaño de las burbujas representado el número de fallecidos.',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/23598108/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>',
            location: {
                center: [-119.88734, 36.71603],
                zoom: 5.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'El poder destructivo de los incendios en el Estado, tanto a nivel de infraestructuras como de daño a seres humanos, parece ir en aumento. Factores como la concentración urbanística, el aumento de la población, el deterioro o el mantenimiento incorrecto de la infraestructura eléctrica (al menos 5 de los 10 incendios más destructivos se debieron a factores eléctricos, con un sexto achacado a la acción humana) pueden jugar un papel en este hecho.',
            description: '<iframe src="https://flo.uri.sh/visualisation/24287511/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>',
            location: {
                center: [-119.88734, 36.71603],
                zoom: 5.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intermedio-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Tampoco se puede ignorar el posible papel del cambio climático: a lo largo del último siglo, la temperatura promedio en todo el Estado se ha incrementado en unos 2,30 grados Fahrenheit (1,28 grados Celsius), contribuyendo a factores como la aridez.',
            description: '<iframe src="https://flo.uri.sh/visualisation/24267652/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>',
            location: {
                center: [-119.88734, 36.71603],
                zoom: 5.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourteenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'La lucha contra el fuego en California cada vez se juega más cerca de casa, literalmente.',
            description: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/SjRo0WmFiB0?si=26p__MTw4VdET71r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            location: {
                center: [-118.11801, 34.18819],
                zoom: 13.28,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Eaton',
                    opacity: 0
                },
                    ],
            onChapterExit: [
                {
                    layer: 'Eaton',
                    opacity: 1
                },
            ]
        }
    ]
};
