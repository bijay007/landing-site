import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';
import UtilsHelperService from '../../../services/utils-helper.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent implements OnInit {
  myForm: FormGroup;
  formSubmit: Observable<any>;

  @Output() formSubmitted = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: '',
      age: '',
      email: ''
    })
    this.myForm.valueChanges.subscribe(console.log)
    
    const form = document.getElementsByTagName('form')[0];
    this.formSubmit = fromEvent(form, 'submit');
    this.formSubmit
      .subscribe((event) =>
        UtilsHelperService.formSubmitObserver(event)
        .next(this.counter, this.formSubmitted)
      )
  }

  counter = 0;
  articles = [
    {
      title: 'Latest News',
      subtitle: 'New discovery for MRSA strains',
      textContent: `Antibacterial nanoparticles of higher molecular weight were found to be very successful 
      in killing staphylococcus strains. Our team of researcher recently found out that...`,
      imgName: 'latest.jpg'
    },
    {
      title: 'Future project',
      subtitle: 'Second lab to be opened in Nepal',
      textContent: `A lab to study the rare yarsagumba (Ophiocordyceps sinensis) and its medical properties
      has been set up in upper Manage district in Nepal at an altitude of 4300 metres. Since long...`,
      imgName: 'yarsagumba.jpg'
    }
  ]
}
