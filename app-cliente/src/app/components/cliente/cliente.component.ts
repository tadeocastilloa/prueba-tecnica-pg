// src/app/components/cliente-list/cliente-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  page: number = 1;
  pageSize: number = 10;
  usingSP: boolean = true; // Para alternar entre SP y LINQ

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    if (this.usingSP) {
      this.clienteService.getClientesSP(this.page, this.pageSize).subscribe(data => {
        this.clientes = data;
      });
    } else {
      this.clienteService.getClientesLinq(this.page, this.pageSize).subscribe(data => {
        this.clientes = data;
      });
    }
  }

  toggleSource(): void {
    this.usingSP = !this.usingSP;
    this.loadClientes();
  }
}
