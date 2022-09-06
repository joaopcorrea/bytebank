import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  @Output() transferEvent = new EventEmitter<any>();

  transferir() {
    let transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.transferEvent.emit(transferencia);

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
