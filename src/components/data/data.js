
import roma from "../data/imagenes/roma.jpg"
import paris from "../data/imagenes/paris.jpg"
import nueva_york from "../data/imagenes/new-york.jpg"
import pekin from "../data/imagenes/pekin.jpg"
import barcelona from "../data/imagenes/barcelona.jpg"
import sidney from "../data/imagenes/sidney.jpg"
import marrakech from "../data/imagenes/Marrakech.jpg"
import rio from "../data/imagenes/rio.jpg"
import cusco from "../data/imagenes/cusco.jpg"
import tokio from "../data/imagenes/tokio.jpg"

const destinos_turisticos = [
    {
        "id": 1,
        "pais": "Italia",
        "ciudad": "Roma",
        "continente": "Europa",
        "principales_atracciones": ["Coliseo Romano", " El Vaticano", " Fontana di Trevi"],
        "imagen": roma,
        "precio": 2500,
        "stock": 5,
        "descripcion": "Roma es una ciudad histórica llena de maravillas antiguas. El Coliseo Romano, El Vaticano con la Basílica de San Pedro y los Museos Vaticanos, y la Fontana di Trevi son algunas de las principales atracciones que no te puedes perder."
    },
    {
        "id": 2,
        "pais": "Francia",
        "ciudad": "París",
        "continente": "Europa",
        "principales_atracciones": ["Torre Eiffel", " Museo del Louvre", " Catedral de Notre Dame"],
        "imagen": paris,
        "precio": 2500,
        "stock": 4,
        "descripcion": "París, conocida como la 'Ciudad de la Luz', es famosa por su belleza y encanto. La Torre Eiffel, el Museo del Louvre con la Mona Lisa y la Catedral de Notre Dame son algunos de los lugares emblemáticos que debes visitar en esta ciudad."
    },
    {
        "id": 3,
        "pais": "Estados Unidos",
        "ciudad": "Nueva York",
        "continente": "AmericadelNorte",
        "principales_atracciones": ["Times Square", " Estatua de la Libertad", " Central Park"],
        "imagen": nueva_york,
        "precio": 1800,
        "stock": 8,
        "descripcion": "Nueva York, la ciudad que nunca duerme, ofrece una gran variedad de atracciones. Times Square, la Estatua de la Libertad y Central Park son solo algunos ejemplos de los lugares icónicos que puedes disfrutar en esta metrópolis vibrante."
    },
    {
        "id": 4,
        "pais": "China",
        "ciudad": "Pekín",
        "continente": "Asia",
        "principales_atracciones": ["Gran Muralla China", " Ciudad Prohibida", " Templo del Cielo"],
        "imagen": pekin,
        "precio": 3500,
        "stock": 3,
        "descripcion": "Pekín es una ciudad llena de historia y cultura. La Gran Muralla China, la Ciudad Prohibida y el Templo del Cielo son destinos imperdibles que te permitirán sumergirte en la grandeza de la antigua China."
    },
    {
        "id": 5,
        "pais": "España",
        "ciudad": "Barcelona",
        "continente": "Europa",
        "principales_atracciones": ["Sagrada Familia", " Parque Güell", " Las Ramblas"],
        "imagen": barcelona,
        "precio": 2000,
        "stock": 10,
        "descripcion": "Barcelona, situada en la costa mediterránea, es conocida por su arquitectura única y su animada vida cultural. La Sagrada Familia, el Parque Güell y las animadas Ramblas son solo algunas de las atracciones que hacen de Barcelona un destino especial."
    },
    {
        "id": 6,
        "pais": "Japón",
        "ciudad": "Tokio",
        "continente": "Asia",
        "principales_atracciones": ["Torre de Tokio", " Templo Senso-ji", " Parque Ueno"],
        "imagen": tokio,
        "precio": 4000,
        "stock": 5,
        "descripcion": "Tokio es una ciudad moderna y fascinante. La Torre de Tokio, el Templo Senso-ji y el Parque Ueno, con su famosa colección de cerezos en flor, son lugares destacados que te sumergirán en la cultura japonesa contemporánea."
    },
    {
        "id": 7,
        "pais": "Brasil",
        "ciudad": "Río de Janeiro",
        "continente": "AmericadelSur",
        "principales_atracciones": ["Cristo Redentor", " Playa de Copacabana", " Pan de Azúcar"],
        "imagen": rio,
        "precio": 900,
        "stock": 22,
        "descripcion": "Río de Janeiro es conocida por su impresionante paisaje y su vibrante cultura. El Cristo Redentor, la playa de Copacabana y el icónico Pan de Azúcar son algunas de las atracciones que hacen de esta ciudad brasileña un destino inolvidable."
    },
    {
        "id": 8,
        "pais": "Australia",
        "ciudad": "Sídney",
        "continente": "Oceania",
        "principales_atracciones": ["Ópera de Sídney", " Puente del Puerto de Sídney", " Playa de Bondi"],
        "imagen": sidney,
        "precio": 2500,
        "stock": 10,
        "descripcion": "Sídney, la ciudad más grande de Australia, ofrece una combinación de belleza natural y arquitectura impresionante. La Ópera de Sídney, el Puente del Puerto y la playa de Bondi son solo algunas de las maravillas que puedes disfrutar en esta ciudad costera."
    },
    {
        "id": 9,
        "pais": "Marruecos",
        "ciudad": "Marrakech",
        "continente": "Asia",
        "principales_atracciones": ["Medina de Marrakech", " Plaza Jemaa el-Fna", " Jardines Majorelle"],
        "imagen": marrakech,
        "precio": 2500,
        "stock": 5,
        "descripcion": "Marrakech, en el corazón de Marruecos, te sumergirá en una cultura llena de colores y aromas exóticos. La Medina de Marrakech, la animada Plaza Jemaa el-Fna y los Jardines Majorelle son algunos de los lugares que hacen de esta ciudad un destino cautivador."
    },
    {
        "id": 10,
        "pais": "Perú",
        "ciudad": "Cusco",
        "continente": "AmericadelSur",
        "principales_atracciones": ["Machu Picchu", " Plaza de Armas", " Valle Sagrado"],
        "imagen": cusco,
        "precio": 1400,
        "stock": 25,
        "descripcion": "Cusco, antigua capital del imperio inca, es un tesoro histórico en Perú. Machu Picchu, la impresionante Plaza de Armas y el místico Valle Sagrado son algunas de las razones por las que Cusco es un destino imperdible para los amantes de la historia y la cultura."
    }
]

export default destinos_turisticos