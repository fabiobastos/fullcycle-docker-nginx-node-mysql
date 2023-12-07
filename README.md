# Fullcycle Docker Compose Nginx proxy reverso para container node acessando mysql
Repositório para o Desafio de Docker do curso Fullcycle

Acesso na url http://localhost

## Comandos
```docker compose up -d --build```

### Necessário criar o banco de dados via bash
```docker exec -it db bash```

```mysql -uroot -p```

```root```

```USE nodedb;```

```
CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
```