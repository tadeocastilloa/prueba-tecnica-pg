# Proyecto Combinado Angular y .NET

Este repositorio contiene una aplicación Angular y una API .NET Core. La aplicación Angular consume la API para mostrar una lista de clientes.

## Requisitos

- [Node.js](https://nodejs.org/) (para Angular)
- [Angular CLI](https://cli.angular.io/)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

## Configuración

### Configurar la Base de Datos

1. Inicia sesión en tu instancia de SQL Server.
2. Crea la base de datos y el procedimiento almacenado ejecutando el script declarado al final del README.


### Configurar App .NET 
1. cd dotnet-api
2. dotnet restore
3. Actualiza el appsettings.json segun tu localhost o servidor SQL Server.
4. Ejecuta las migraciones y actualiza la BD: 
dotnet ef migrations add InitialCreate
dotnet ef database update
5. Haz correr la API: dotnet run

### Configurar App Angular

1. Ejecuta npm install para instalar los packages.
2. Sirve la app, con ng serve -o

### Ejecutar test unitarios de Karma

1. ng test 

```sql
CREATE DATABASE Clientes;

USE Clientes;

CREATE TABLE Clientes (
    Id INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(100),
    Pais NVARCHAR(100),
    Telefono NVARCHAR(20)
);

INSERT INTO Clientes (Nombre, Pais, Telefono) VALUES ('Juan Perez', 'Chile', '56912345678');
INSERT INTO Clientes (Nombre, Pais, Telefono) VALUES ('Maria Lopez', 'Argentina', '54112345678');
INSERT INTO Clientes (Nombre, Pais, Telefono) VALUES ('Carlos Garcia', 'Peru', '51987654321');

CREATE PROCEDURE clientes_sel
    @accion INT,
    @paginas INT,
    @registros INT
AS
BEGIN
    SET NOCOUNT ON;

    IF @accion = 1
    BEGIN
        SELECT *
        FROM Clientes
        ORDER BY Id
        OFFSET (@paginas - 1) * @registros ROWS
        FETCH NEXT @registros ROWS ONLY;
    END
END


