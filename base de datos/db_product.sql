-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-02-2026 a las 17:25:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_product`
--

DELIMITER $$

-- Procedimientos

CREATE DEFINER=`root`@`localhost` PROCEDURE `editar_producto` (IN _id INTEGER, IN _name VARCHAR(50), IN _desc VARCHAR(50), IN _stock INTEGER)
BEGIN
    UPDATE tb_product 
    SET name = _name,
        description = _desc,
        stock = _stock
    WHERE id_product = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminar_producto` (IN _id INTEGER)
BEGIN
    DELETE FROM tb_product WHERE id_product = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertar_producto` (IN _name VARCHAR(100), IN _desc VARCHAR(100), IN _stock INTEGER)
BEGIN
    INSERT INTO tb_product(name, description, stock) VALUES (_name, _desc, _stock);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listar_productos` ()
BEGIN
    SELECT * FROM tb_product;
END$$

-- NUEVO PROCEDIMIENTO
CREATE DEFINER=`root`@`localhost` PROCEDURE `listar_producto` (IN _id INTEGER)
BEGIN
    SELECT * FROM tb_product WHERE id_product = _id;
END$$

DELIMITER ;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_product`
--

CREATE TABLE `tb_product` (
  `id_product` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `description` varchar(150) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tb_product`
--

INSERT INTO `tb_product` (`id_product`, `name`, `description`, `stock`) VALUES
(1, 'coca', 'Coca-Cola Zero en Lata', 100),
(3, 'Galleta Ritz', 'Galleta mediana', 50),
(4, 'Chocolate Win', 'Tableta de chocolate 10mg', 100);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`id_product`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_product`
--
ALTER TABLE `tb_product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
