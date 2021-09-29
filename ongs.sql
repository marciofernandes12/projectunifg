-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Set-2021 às 03:38
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `easyong`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `ongs`
--

CREATE TABLE `ongs` (
  `ong_id` int(11) NOT NULL,
  `ong_name` varchar(50) NOT NULL,
  `ong_cnpj_cpf` varchar(20) NOT NULL,
  `ong_cidade` varchar(50) NOT NULL,
  `ong_bairro` varchar(50) NOT NULL,
  `ong_estado` varchar(50) NOT NULL,
  `ong_rua` varchar(50) NOT NULL,
  `ong_numero` varchar(50) NOT NULL,
  `ong_complemento` varchar(50) NOT NULL,
  `ong_latitude` varchar(20) NOT NULL,
  `ong_longitude` varchar(20) NOT NULL,
  `ong_telefone` varchar(50) NOT NULL,
  `ong_responsavel` varchar(50) NOT NULL,
  `ong_descricao` varchar(50) NOT NULL,
  `ong_email` varchar(50) NOT NULL,
  `ong_senha` varchar(100) NOT NULL,
  `active` varchar(50) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `ongs`
--

INSERT INTO `ongs` (`ong_id`, `ong_name`, `ong_cnpj_cpf`, `ong_cidade`, `ong_bairro`, `ong_estado`, `ong_rua`, `ong_numero`, `ong_complemento`, `ong_latitude`, `ong_longitude`, `ong_telefone`, `ong_responsavel`, `ong_descricao`, `ong_email`, `ong_senha`, `active`, `updated_at`, `created_at`) VALUES
(1, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa 2', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:32:31', '2021-09-29 00:57:28'),
(2, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:09:40', '2021-09-29 01:09:40'),
(3, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:10:15', '2021-09-29 01:10:15'),
(4, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:32', '2021-09-29 01:17:32'),
(5, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:33', '2021-09-29 01:17:33'),
(6, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:34', '2021-09-29 01:17:34'),
(7, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:35', '2021-09-29 01:17:35'),
(8, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:36', '2021-09-29 01:17:36'),
(9, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:37', '2021-09-29 01:17:37'),
(10, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:38', '2021-09-29 01:17:38'),
(11, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:38', '2021-09-29 01:17:38'),
(12, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:39', '2021-09-29 01:17:39'),
(13, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:40', '2021-09-29 01:17:40'),
(14, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:41', '2021-09-29 01:17:41'),
(15, 'Minha ONG', '11964714605', 'Recife', 'Piedade', 'Pernambuco', 'Rua Guanambi', '819', 'BL 09 APTO 103', '0', '0', '8136228812', 'Daniel Miquiles', 'Qualquer coisa', 'danielvictormiquiles@gmail.com', '1234567890', '1', '2021-09-29 01:17:41', '2021-09-29 01:17:41');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `ongs`
--
ALTER TABLE `ongs`
  ADD PRIMARY KEY (`ong_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `ongs`
--
ALTER TABLE `ongs`
  MODIFY `ong_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
