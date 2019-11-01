import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.page.html',
  styleUrls: ['./publicador.page.scss'],
})
export class PublicadorPage implements OnInit {

  publicador = {
    id: 0,
    titulo: 'Restaurante Universitário',
    nPublicacoes: 1,
    nInscritos: 2,
    image: '../assets/icon/restaurante-universitario.jpg'
  };

  noticias = [
    {
      id: 0,
      titulo: "Bife de Chorizo agora no RU!",
      data: "2019-09-15T20:42",
      img_url: "https://public-v2links.adobecc.com/cb1de58f-2bd2-4946-5068-db069a1a9483/component?params=component_id:66f9b968-0757-4ed6-9dc9-63b8fe8420eb&params=version:0&token=1572719278_da39a3ee_a1316116348c58b746363ec925a112e9ffac4913&api_key=CometServer1",
      likes: 624
    },
    {
      id: 1,
      titulo: "Lula solto, visita RU da UFLA!",
      data: "2019-10-15T12:30",
      img_url: "https://www.dm.com.br/wp-content/uploads/2019/05/ZnHn4dgf_400x400.jpg",
      likes: 12345
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
