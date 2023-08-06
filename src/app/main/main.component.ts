import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  bild = ""  // Foto
  name = ""  // name
  str = ""  //street
  plz = ""  //Postal code 
  geburtsdatum = ""  // birthday
  sternzeichen = ""  //Zodiac sign 
  familienstand = ""  // family status (single)
  tel = ""
  vorname = "" //first name
  hausnummer = "" //haus number
  ort= ""   //place
  geburtsort= "" //birthplace
  nationatilat= "" //NATIONATILATE
  auto= "" //Driving license 
  email= ""
  beruf = "" + "" + "" //profession You can enter more than one input but please separate them with ",".
  sprachen = "" + "" + "" //languages You can enter more than one input but please separate them with ",".
  kenntnisse = "" + "" + "" //knowledge You can enter more than one input but please separate them with ",".
  hobbies = "" + "" + "" //You can enter more than one input but please separate them with ",".

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
