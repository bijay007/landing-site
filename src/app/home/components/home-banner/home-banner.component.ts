import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {

  constructor() { }
  title = 'Investigación de cáncer';
  subtitle = 'Sant Cugat del Vallès (Barcelona), 9 de mayo de 2017';
  textContent = `Boehringer Ingelheim ha ampliado su colaboración con la Universidad de Vanderbilt en 
  Nashville (Estados Unidos) para desarrollar nuevas terapias que aborden algunos de los cánceres más 
  difíciles de tratar, entre los que se encuentran el cáncer de pulmón, colorrectal y de páncreas. 
  La nueva colaboración se suma a un proyecto conjunto en curso con la Universidad Vanderbilt, iniciado 
  en 2015 y que une la investigación pionera de la institución universitaria con la experiencia y 
  conocimientos de la compañía farmacéutica en el desarrollo de nuevas moléculas. Concretamente, 
  el acuerdo se centra en el desarrollo de moléculas pequeñas dirigidas un tipo de proteína 
  (SOS: Son Of Sevenless) que activa un gen (KRAS) que es uno de los principales iniciadores de estos 
  tipos de cáncer de difícil tratamiento.`;
  imgName = 'research.jpg';
  ngOnInit() {}

}
