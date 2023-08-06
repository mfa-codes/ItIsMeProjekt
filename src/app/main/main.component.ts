import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  bild = ""
  name = ""
  str = ""
  plz = ""
  geburtsdatum = ""
  sternzeichen = ""
  familienstand = ""
  tel = ""
  vorname = ""
  hausnummer = ""
  ort= ""
  geburtsort= ""
  nationatilat= ""
  auto= ""
  email= ""
  beruf = "" + "" + ""
  sprachen = "" + "" + ""
  kenntnisse = "" + "" + ""
  hobbies = "" + "" + ""

  sprachenArray: string[] = [];
  hobbiesArray: string[] = [];
  berufArray: string[] = [];
  kennArray: string[] = [];

  ngOnInit() {
    this.berufArray = this.beruf.split(',');
    this.kennArray = this.kenntnisse.split(';');
    this.sprachenArray = this.sprachen.split(',');
    this.hobbiesArray = this.hobbies.split(',');
  }
}
