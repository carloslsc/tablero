-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-11-2019 a las 01:52:55
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizar_cita` ()  NO SQL
UPDATE cita SET pasado_lista_cita = 0$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizar_turno` ()  NO SQL
UPDATE turno_vigente SET turno = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `autoincrement_cita_hoy` ()  NO SQL
ALTER TABLE cita_hoy AUTO_INCREMENT = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `limpiar_cita_hoy` ()  NO SQL
DELETE FROM cita_hoy$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id_cita` int(11) NOT NULL,
  `fecha_cita` date NOT NULL,
  `hora_cita` time NOT NULL,
  `turno_cita` int(11) NOT NULL,
  `asunto_cita` text NOT NULL,
  `paciente_cita` int(11) NOT NULL,
  `doctor_cita` int(11) NOT NULL,
  `pasado_lista_cita` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id_cita`, `fecha_cita`, `hora_cita`, `turno_cita`, `asunto_cita`, `paciente_cita`, `doctor_cita`, `pasado_lista_cita`) VALUES
(6, '2019-11-21', '12:00:00', 1, 'cita medica', 2, 2, 0),
(7, '2019-11-21', '12:30:00', 2, 'VER ALGO DE LOS OJOS', 2, 2, 1),
(8, '2019-11-21', '13:00:00', 3, 'ver algo de los ojos', 2, 2, 0);

--
-- Disparadores `cita`
--
DELIMITER $$
CREATE TRIGGER `CITA_AI` BEFORE INSERT ON `cita` FOR EACH ROW SET NEW.turno_cita = CASE WHEN (SELECT MAX(turno_cita) AS turno FROM cita WHERE fecha_cita = NEW.fecha_cita) IS NULL THEN 1 ELSE (SELECT MAX(turno_cita) AS turno FROM cita WHERE fecha_cita = NEW.fecha_cita) + 1 END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita_hoy`
--

CREATE TABLE `cita_hoy` (
  `id_cita_hoy` int(11) NOT NULL,
  `id_cita_cita_hoy` int(11) NOT NULL,
  `turno_cita_hoy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita_hoy`
--

INSERT INTO `cita_hoy` (`id_cita_hoy`, `id_cita_cita_hoy`, `turno_cita_hoy`) VALUES
(1, 7, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `id_doctor` int(11) NOT NULL,
  `nombre_doctor` text NOT NULL,
  `app_doctor` text NOT NULL,
  `apm_doctor` text NOT NULL,
  `especialidad_doctor` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `doctor`
--

INSERT INTO `doctor` (`id_doctor`, `nombre_doctor`, `app_doctor`, `apm_doctor`, `especialidad_doctor`) VALUES
(2, 'Prueba', 'de', 'Doctor', 'Oftalmo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id_paciente` int(11) NOT NULL,
  `nombre_paciente` text NOT NULL,
  `app_paciente` text NOT NULL,
  `apm_paciente` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id_paciente`, `nombre_paciente`, `app_paciente`, `apm_paciente`) VALUES
(2, 'Prueba', 'de', 'Paciente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno_vigente`
--

CREATE TABLE `turno_vigente` (
  `turno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `turno_vigente`
--

INSERT INTO `turno_vigente` (`turno`) VALUES
(1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id_cita`);

--
-- Indices de la tabla `cita_hoy`
--
ALTER TABLE `cita_hoy`
  ADD PRIMARY KEY (`id_cita_hoy`);

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id_doctor`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id_paciente`);

--
-- Indices de la tabla `turno_vigente`
--
ALTER TABLE `turno_vigente`
  ADD PRIMARY KEY (`turno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `cita_hoy`
--
ALTER TABLE `cita_hoy`
  MODIFY `id_cita_hoy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id_doctor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
