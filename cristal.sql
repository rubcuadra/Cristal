CREATE DATABASE  IF NOT EXISTS `cristal`;
USE `cristal`;

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(800) DEFAULT NULL,
  `content` varchar(8000) DEFAULT NULL,
  `author` varchar(80) DEFAULT NULL,
  `src` varchar(300) DEFAULT NULL,
  `tag1` varchar(25) DEFAULT NULL,
  `tag2` varchar(25) DEFAULT NULL,
  `tag3` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `representantes`;
CREATE TABLE `representantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `src` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `postAborto` int(3) DEFAULT 50,
  `postLGBT` int(3) DEFAULT 50,
  `post3de3` int(3) DEFAULT 50,
  `postMatrimonio` int(3) DEFAULT 50,
  `postSegPub` int(3) DEFAULT 50,
  `asistenciaLunes` boolean DEFAULT false,
  `asistenciaMartes` boolean DEFAULT false,
  `asistenciaMiercoles` boolean DEFAULT false,
  `asistenciaJueves` boolean DEFAULT false,
  `asistenciaViernes` boolean DEFAULT false,
  `cargo` varchar(100) DEFAULT NULL,
  `partido` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `pwd` varchar(45) DEFAULT NULL,
  `src` varchar(500) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `CP` int(5) DEFAULT NULL,
  `postAborto` int(3) DEFAULT 50,
  `postLGBT` int(3) DEFAULT 50,
  `post3de3` int(3) DEFAULT 50,
  `postMatrimonio` int(3) DEFAULT 50,
  `postSegPub` int(3) DEFAULT 50,
  `Educacion` boolean DEFAULT false,
  `LGBT` boolean DEFAULT false,
  `Legislaciones` boolean DEFAULT false,
  `Economia` boolean DEFAULT false,
  `Emprendimiento` boolean DEFAULT false,
  `Tecnologia` boolean DEFAULT false,
  `Seguridad` boolean DEFAULT false,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

LOCK TABLES `news` WRITE;
INSERT INTO `news` (name, content, author, src, tag1, tag2, tag3) VALUES ('Resalta Mancera importancia de gobiernos de coalición', 'El jefe de Gobierno acreditó al presidente de la República Eslovaca, Andrej Kiska, como huésped distinguido e indicó que el desarrollo económico de su país es inspiración para la capital ', 'Notimex', 'http://lanoticiaenconcreto.com.mx/ec/wp-content/uploads/2017/06/mancera.jpg', '#gobierno', '#Mancera', '#RepublicaEslovaca'), ('Latinoamericanos, inconformes con sus gobiernos', 'El estudio revela que 67% de los ciudadanos de la región está insatisfecho con el funcionamiento de las instituciones.', 'Jorge Monroy', 'http://almomento.mx/wp-content/uploads/2017/10/camara-de-diputado.jpg', '#ciudadanos', '#inconformes', '#gobierno'), ('Gobiernos locales y el federal apoyan a más de 82 mil damnificados', 'Al cumplirse dos meses del sismo del 19 de septiembre y 10 semanas del ocurrido el día 7, el Gobierno de la República en conjunto con los gobiernos estatales han entregado apoyos económicos a más de 82 mil 400 damnificados.', 'Agencias', 'https://www.debate.com.mx/export/sites/debate/img/2017/09/08/wdfwqfwef.jpg_434766304.jpg', '#gobierno', '#terremoto', '#PenaNieto'), ('Violencia de género, acto cobarde que debe ser erradicado: Osorio Chong', 'El titular de la Secretaría de Gobernación (Segob), Miguel Ángel Osorio Chong, resaltó que la violencia de género es un acto cobarde e indignante que debe ser erradicado.

El funcionario federal destacó el compromiso de las autoridades de seguir trabajando para ampliar la red de Centros de Justicia para las Mujeres, con el objetivo de proporcionar la atención y el apoyo que requieren las víctimas.

En su cuenta de Twitter @osoriochong publicó un video, en donde deja claro que "empoderamiento de las mujeres no solamente es un fin sino también un medio para lograr la realización plena de las mujeres".

Refirió que seis de cada 10 mexicanas mayores de 15 años de edad, han sufrido  desde el acoso y hostigamiento en espacios públicos, hasta las diferencias salariales, el maltrato y la discriminación.

"Desde las agresiones físicas y emocionales, hasta llegar a su versión más extrema, cruel y reprobable: los feminicidios".', 'NTX', 'http://alchileaguascalientes.com/wp-content/uploads/2016/09/Chong.jpg', '#seguridad', '#Osorio', '#Segob'), ('Cooperación y coordinación, pide PGR a 32 procuradores','Elías Beltrán resaltó que la dependencia se ha ocupado de implementar esquemas para facilitar acciones conjuntas en la prevención y combate de ilícitos. Cooperación, coordinación y confianza entre las instituciones de procuración de justicia, pidió el encargado de despacho de la Procuraduría General de la República (PGR), Alberto Elías Beltrán, a los 32 procuradores y fiscales del país, para investigar y perseguir los delitos.

Al encabezar en Chiapas la segunda sesión en 2017 de la Conferencia Nacional de Procuración de Justicia de la Zona Sureste, Elías Beltrán aseguró que ese es el esquema de trabajo que se hace al interior de la CNPJ, con el fin de cumplir los objetivos de la seguridad pública.','SUN','https://www.gob.mx/cms/uploads/image/file/301792/outstanding_post_PGR.jpg','#PGR','#PrevencionYCombate','#EliasBeltran'),('Más de la mitad de cajas de seguridad en Cancún no han sido reclamadas: PGR','Eran utilizadas para guardar insumos del crimen organizado como millones de pesos en efectivo, listados de propiedades y hasta armas de fuego. Más de la mitad de las cajas de seguridad cateadas dentro de la empresa First National Security en Cancún, Quintana Roo, a principios de mes por personal de la Subprocuraduría Especializada en Investigación en Delincuencia Organizada (SEIDO) no han sido reclamadas, así lo aseguró el encargado del despacho de la Procuraduría General de la República (PGR), Alberto Elías Beltrán.','SUN','https://i2.wp.com/noticieros.televisa.com/wp-content/uploads/2017/10/alberto-elias-beltran.jpg?fit=880%2C524&quality=100','#Cancun','#PGR','#EliasBeltran');
UNLOCK TABLES;

LOCK TABLES `representantes` WRITE;
INSERT INTO `representantes` (email, src, name, postAborto, postLGBT, post3de3, postMatrimonio, postSegPub, asistenciaLunes, asistenciaMartes, asistenciaMiercoles, asistenciaJueves, asistenciaViernes, cargo, partido) VALUES ('penanieto@gob.mx', 'https://yt3.ggpht.com/-7GTCq2PbO3o/AAAAAAAAAAI/AAAAAAAAAAA/eo7lM2pihH4/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', 'Enrique Pena Nieto', 98, 78, 92, 13, 38, true, true, true, true, false, 'Presidente', 'PRI'), ('anayaricardo@gob.mx', 'http://www.nacion321.com/files/article_main/uploads/2017/08/01/1c303b0eed313.jpg', 'Ricardo Anaya', 82, 72, 87, 67, 46, true, false, true, true, false, 'Presidente del PAN', 'PAN'), ('kumamoto@gob.mx', 'https://pbs.twimg.com/profile_images/920257866082148353/1NN7dgaa.jpg', 'Pedro Kumamoto', 84, 69, 20, 48, 10, true, true, false, true, true, 'Diputado Federal', 'Independiente'),('osoriochong@gob.mx', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Osorio_Chong.jpg/220px-Osorio_Chong.jpg', 'Miguel Angel Osorio Chong', 48, 23, 75, 72, 85, true, true, true, false, true, 'Secretario de gobernacion', 'PRI'),('fernando.navarrete@congreso.gob.mx', 'http://sitl.diputados.gob.mx/LXIII_leg/fotos_lxiiiconfondo/317_FOTO_CHICA.jpg', 'Fernando Navarrete Pérez', 82, 24, 87, 91, 96, true, false, false, false, true, 'Diputado federal', 'PRI'),('servicios@laurarojas.mx', 'http://www.pan.senado.gob.mx/wp-content/uploads/2013/07/Rojas-Hernandez-Laura-Angelica-2-240x300.jpg', 'Laura Angelica Rojas Hernández', 73, 25, 83, 41, 91, true, true, true, true, true, 'Senadora', 'PAN');
UNLOCK TABLES;

LOCK TABLES `users` WRITE;
INSERT INTO `users` (email, pwd, src, token, name, CP, postAborto, postLGBT, post3de3, postMatrimonio, postSegPub, Educacion, LGBT, Legislaciones, Economia, Emprendimiento, Tecnologia, Seguridad) VALUES ('leo@mail.com', 'pass01', 'http://static2.businessinsider.com/image/5899ffcf6e09a897008b5c04-1200/.jpg', '???', 'Leopondo Cruz', '06034', 13, 67, 82, 73, 18, true, true, false, false, true, false, false), ('pancho@mail.com', 'pass02', 'http://s3.amazonaws.com/cdn.roosterteeth.com/uploads/images/36437c1c-f403-42c3-a3a0-4886a49bd012/original/2195219-1449924847806-image-2.jpg', '???', 'Pancho Perez', '52791', 37, 28, 86, 81, 92, true, false, false, false, true, true, true), ('eli@mail.com', 'pass03', 'http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg', '???', 'Eli Smith', '72910', 49, 18, 93, 28, 53, false, false, true, true, false, true, true),('mateo@mail.com', 'pass04', 'http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg', '???', 'Mateo Sanchez', '52787', 98, 84, 93, 62, 71, false, true, true, true, false, true, false),('lilia@mail.com', 'pass05', 'https://www.trickscity.com/wp-content/uploads/2016/11/51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg', '???', 'Lilia Martinez', '52187', 62, 81, 71, 84, 40, true, false, false, true, true, true, false),('rubcuadra@mail.com', 'pass06', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAvmAAAAJGZhODdlNjI4LWI4MzctNDA3OC04ZmQ2LThiNGY5NWUyZTdjNQ.jpg', '???', 'Ruben Cuadra', '52787', 72, 85, 75, 87, 90, true, false, true, true, false, true, true),('aiturbe@mail.com', 'pass07', 'https://static.wixstatic.com/media/a879cc_64bd4efa2762479d91657c35cbf202d8~mv2_d_2320_2900_s_2.jpg/v1/fill/w_170,h_213,al_c,q_80,usm_0.66_1.00_0.01/a879cc_64bd4efa2762479d91657c35cbf202d8~mv2_d_2320_2900_s_2.webp', '???', 'Alonso Iturbe', '52234', 90, 97, 46, 72, 84, true, true, false, false, true, true, true),('samtorrero@mail.com', 'pass08', 'https://pbs.twimg.com/profile_images/903812910044110849/8zVb2UvX_400x400.jpg', '???', 'Samuel Torrero', '52787', 13, 36, 37, 73, 92, true, false, false, false, true, false, true);
UNLOCK TABLES;