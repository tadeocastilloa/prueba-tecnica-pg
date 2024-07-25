using System;
using apiCliente.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace apiCliente.DAL
{
    public class ClienteDAL : DbContext
    {
        public ClienteDAL(DbContextOptions<ClienteDAL> options) : base(options) { }

        public DbSet<Cliente> Cliente { get; set; }
    }
}