// Controllers/ClientesController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apiCliente.DAL;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiCliente.Models;
using Microsoft.Win32;
using System;

namespace apiCliente.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly ClienteDAL _context;

        public ClientesController(ClienteDAL context)
        {
            _context = context;
        }

        // Servicio que utiliza un Store Procedure para obtener los clientes paginados
        [HttpGet("sp")]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientesSP(int paginas, int registros)
        {
            var clientes = await _context.Cliente
                .FromSqlRaw("EXEC CLIENTES_SEL @accion = {0}, @paginas = {1}, @registros = {2}", 1, paginas, registros)
                .ToListAsync();

            return Ok(clientes);
        }

        // Servicio que utiliza LINQ para obtener los clientes paginados
        [HttpGet("linq")]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientesLinq(int paginas, int registros)
        {
            var clientes = await _context.Cliente
                .Skip((paginas - 1) * registros)
                .Take(registros)
                .ToListAsync();

            return Ok(clientes);
        }

        
    }
}