

CREATE TABLE `ongs` (
  `ong_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `ong_name` varchar(50) NOT NULL,
  `ong_cnpj_cpf` varchar(20) NOT NULL,
  `ong_cidade` varchar(50),
  `ong_bairro` varchar(50),
  `ong_estado` varchar(50),
  `ong_rua` varchar(50),
  `ong_numero` varchar(50),
  `ong_complemento` varchar(50),
  `ong_latitude` varchar(20) NOT NULL,
  `ong_longitude` varchar(20) NOT NULL,
  `ong_telefone` varchar(50),
  `ong_responsavel` varchar(50),
  `ong_descricao` varchar(50),
  `ong_email` varchar(50) NOT NULL,
  `ong_senha` varchar(100) NOT NULL,
  `active` varchar(50) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;