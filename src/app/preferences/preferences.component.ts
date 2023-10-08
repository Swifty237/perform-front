import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})

export class PreferencesComponent implements OnInit {

  fights!: string;
  wins!: string;
  kowins!: string;
  submissionwins!: string;
  strikes!: string;
  strikesratio!: string;
  takedowns!: string;
  takedowndefense!: string;
  takedownsratio!: string;
  ipsg!: string;

  formPreference!: FormGroup

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formPreference = this.formBuilder.group({
      preferenceName: this.formBuilder.control("")
    })
  }

  handlePreference() {
    const name = this.formPreference.value.preferenceName;
    const fights = this.fights;
    const wins = this.wins;
    const kowins = this.kowins;
    const submissionwins = this.submissionwins;
    const strikes = this.strikes;
    const strikesratio = this.strikesratio;
    const takedowns = this.takedowns;
    const takedowndefense = this.takedowndefense;
    const takedownsratio = this.takedownsratio;
    const ipsg = this.ipsg;

    console.log("name : " + name);
    console.log("fights : " + fights);
    console.log("wins : " + wins);
    console.log("kowins : " + kowins);
    console.log("submissionwins : " + submissionwins);
    console.log("strikes : " + strikes);
    console.log("strikesratio : " + strikesratio);
    console.log("takedowns : " + takedowns);
    console.log("takedowndefense : " + takedowndefense);
    console.log("takedownsratio : " + takedownsratio);
    console.log("ipsg : " + ipsg);

    this.formPreference.reset();
    this.fights = "";
    this.wins = "";
    this.kowins = "";
    this.submissionwins = "";
    this.strikes = "";
    this.strikesratio = "";
    this.takedowns = "";
    this.takedowndefense = "";
    this.takedownsratio = "";
    this.ipsg = "";
  }
}
