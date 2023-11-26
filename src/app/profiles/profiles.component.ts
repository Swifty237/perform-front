import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileElement } from '../common/elements-types/profile-element';
import { OtherSpringService } from '../common/services/spring-backend/other/other-spring.service';

export type sentenceElement = {
  id: string,
  criteria: string,
  response: string
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  profileToPost!: ProfileElement;
  inputValue!: String;
  errorMessage!: String
  profiles!: ProfileElement[];
  profilesAfterDeletion!: ProfileElement[];
  startSentence = "To compare two mma fighters the ";
  endSentence = "";
  selectedIndex: number = 0;
  selectedAnswer: string = 'fights';

  endSentences: sentenceElement[] = [
    { id: "fights", criteria: "experience criteria is", response: "..." },
    { id: "wins", criteria: "winning percentage is", response: "..." },
    { id: "kowins", criteria: "winning by KO percentage is", response: "..." },
    { id: "submissionwins", criteria: "winning by submission percentage is", response: "..." },
    { id: "strikes", criteria: "strike accuracy is", response: "..." },
    { id: "strikesratio", criteria: "ratio of blows given and blows received is", response: "..." },
    { id: "takedowns", criteria: "successfull takedown percentage is", response: "..." },
    { id: "takedowndefense", criteria: "takedown defense percentage is", response: "..." },
    { id: "takedownsratio", criteria: "ratio of takedowns given and takedowns received is", response: "..." }
  ]

  formProfile!: FormGroup
  panelOpenState = false;

  constructor(
    private formBuilder: FormBuilder,
    private otherSpringService: OtherSpringService,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.formProfile = this.formBuilder.group({
      profileDescription: this.formBuilder.control(""),
      fights: this.formBuilder.control(""),
      wins: this.formBuilder.control(""),
      kowins: this.formBuilder.control(""),
      submissionwins: this.formBuilder.control(""),
      strikes: this.formBuilder.control(""),
      strikesratio: this.formBuilder.control(""),
      takedowns: this.formBuilder.control(""),
      takedowndefense: this.formBuilder.control(""),
      takedownsratio: this.formBuilder.control(""),
    });

    this.loadFighterProfiles();
    this.handleReset();
  }

  loadFighterProfiles() {
    this.otherSpringService.loadAllFighterProfiles$()
      .subscribe({
        next: (data: ProfileElement[]) => {
          data.sort((a, b) => b.id - a.id);
          this.profiles = data;
        },
        error: (err: any) => console.error('An error occurred:', err)
      })
  }

  loadProfile(profileId: number) {
    this.otherSpringService.loadFighterProfile$(profileId)
      .subscribe({
        next: (data: any) => {
          this.inputValue = data.name;
          this.profileToPost = data;
        },
        error: (err: any) => console.error('An error occurred:', err)
      })
  }

  handleDelete(profileId: number) {
    this.otherSpringService.deleteFighterProfile$(profileId)
      .subscribe({
        next: () => {
          this.handleReset();
          this.loadFighterProfiles();
        },
        error: (err: any) => console.error('An error occurred:', err)
      });
  }

  handleProfile() {

    console.log(this.formProfile.value.profileDescription);

    console.log(this.formProfile.value.fights);
    console.log(this.formProfile.value.wins);
    console.log(this.formProfile.value.kowins);
    console.log(this.formProfile.value.submissionwins);
    console.log(this.formProfile.value.strikes);
    console.log(this.formProfile.value.strikesratio);
    console.log(this.formProfile.value.takedowns);
    console.log(this.formProfile.value.takedowndefense);
    console.log(this.formProfile.value.takedownsratio);
  }

  // Post the profile to database
  handlePostProfile() {
    const descriptionToSend = this.formProfile.value.profileDescription;

    if (descriptionToSend != null) {
      this.profileToPost.description = descriptionToSend;
    } else {
      this.profileToPost.description = "preference" + this.profileToPost.id;
    }

    this.otherSpringService.postFighterProfile$(this.profileToPost)
      .subscribe({
        next: () => {
          this.loadFighterProfiles();
          this.handleReset();
        },
        error: (err: any) => { console.log(err.status); }
      });
  }

  handleUpdateProfile() {
    let input = this.formProfile.value.profileDescription;
    let isNamePresent = false;
    let isInputEqualPost = false;

    console.log("intput = " + input);

    if (input == null) {
      input = this.inputValue;
    }

    console.log("intput after = " + input);

    if (this.profileToPost.description == input) {

      isInputEqualPost = true;
      console.log("preferenceToPost.name = " + this.profileToPost.description);
      console.log("preferenceToPost.id = " + this.profileToPost.id);
    }

    if (isInputEqualPost) {

      isInputEqualPost = false;

      this.otherSpringService.deleteFighterProfile$(this.profileToPost.id)
        .subscribe({
          next: () => {

            this.otherSpringService.loadAllFighterProfiles$()
              .subscribe({
                next: (data: ProfileElement[]) => {

                  this.profilesAfterDeletion = data;

                  const profileDescriptionToSend = this.formProfile.value.profileDescription;

                  if (profileDescriptionToSend != null) {
                    this.profileToPost.description = profileDescriptionToSend;

                    for (let fighterProfile of this.profilesAfterDeletion) {
                      if (this.profileToPost.description == fighterProfile.description) {
                        isNamePresent = true;
                      }
                    }
                  }

                  if (!isNamePresent) {

                    this.errorMessage = "";
                    this.otherSpringService.postFighterProfile$(this.profileToPost)
                      .subscribe({
                        next: () => {
                          this.loadFighterProfiles();
                          this.handleReset();
                        },
                        error: (err: any) => {
                          console.log(err.status);
                        }
                      });

                  } else {

                    isNamePresent = false;
                    this.errorMessage = "This name is already use";
                    console.log(this.errorMessage);

                  }
                },

                error: (err: any) => console.error('An error occurred:', err)
              })
          },

          error: (err: any) => console.error('An error occurred:', err)
        });
    } else {

      const profileDescriptionToSend = this.formProfile.value.profileDescription;

      if (profileDescriptionToSend != null) {
        this.profileToPost.description = profileDescriptionToSend;

        for (let fighterProfile of this.profiles) {
          if (this.profileToPost.description == fighterProfile.description) {
            isNamePresent = true;
          }
        }
      }

      if (!isNamePresent) {

        this.otherSpringService.deleteFighterProfile$(this.profileToPost.id)
          .subscribe({
            next: () => {

              this.otherSpringService.loadAllFighterProfiles$()
                .subscribe({
                  next: (data: ProfileElement[]) => {

                    this.profilesAfterDeletion = data;

                    this.errorMessage = "";
                    this.otherSpringService.postFighterProfile$(this.profileToPost)
                      .subscribe({
                        next: () => {
                          this.loadFighterProfiles();
                          this.handleReset();
                        },
                        error: (err: any) => {
                          console.log(err.status);
                        }
                      });
                  },

                  error: (err: any) => console.error('An error occurred:', err)
                })
            },

            error: (err: any) => console.error('An error occurred:', err)
          });

      } else {

        isNamePresent = false;
        this.errorMessage = "This name is already use";
        console.log(this.errorMessage);

      }
    }
  }

  handleReset() {
    this.formProfile.reset();
    this.profileToPost = {
      id: 0,
      description: '',
      fights: 1,
      wins: 1,
      kowins: 1,
      submissionwins: 1,
      strikes: 1,
      strikesratio: 1,
      takedowns: 1,
      takedowndefense: 1,
      takedownsratio: 1,
      level: 1,
      isActive: false
    };
  }

  handleActivate(fighterProfile: ProfileElement) {

    if (fighterProfile.isActive == false) {

      for (let element of this.profiles) {

        if (element.isActive == true && element.id != fighterProfile.id) {
          this.otherSpringService.deleteFighterProfile$(element.id)
            .subscribe({
              next: () => {

                element.isActive = false;
                this.otherSpringService.postFighterProfile$(element)
                  .subscribe({
                    next: () => this.loadFighterProfiles()
                  });
              }
            });
        }
      }

      setTimeout(() => {
        this.otherSpringService.deleteFighterProfile$(fighterProfile.id)
          .subscribe({
            next: () => {

              fighterProfile.isActive = true;
              this.otherSpringService.postFighterProfile$(fighterProfile)
                .subscribe({
                  next: () => this.loadFighterProfiles()
                });
            }
          });
      }, 100)
    }
  }

  scrollToSection(sectionId: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  selectSentence() {
    if (this.selectedIndex <= this.endSentences.length - 1) {
      this.selectedIndex++;
    }
  }

  getAnswer(id: string) {

    this.selectSentence();

    switch (id) {
      case 'fights':
        console.log("fights :" + this.formProfile.value.fights);
        this.endSentences[0].response = this.convertSelection(this.formProfile.value.fights);
        break;

      case 'wins':
        console.log("wins :" + this.formProfile.value.wins);
        this.endSentences[1].response = this.convertSelection(this.formProfile.value.wins);
        break;

      case 'kowins':
        console.log("kowins :" + this.formProfile.value.kowins);
        this.endSentences[2].response = this.convertSelection(this.formProfile.value.kowins);
        break;

      case 'submissionwins':
        console.log("submissionwins :" + this.formProfile.value.submissionwins);
        this.endSentences[3].response = this.convertSelection(this.formProfile.value.submissionwins);
        break;

      case 'strikes':
        console.log("strikes :" + this.formProfile.value.strikes);
        this.endSentences[4].response = this.convertSelection(this.formProfile.value.strikes);
        break;

      case 'takedowns':
        console.log("takedowns :" + this.formProfile.value.takedowns);
        this.endSentences[5].response = this.convertSelection(this.formProfile.value.takedowns);
        break;

      case 'takedowndefense':
        console.log("takedowndefense :" + this.formProfile.value.takedowndefense);
        this.endSentences[6].response = this.convertSelection(this.formProfile.value.takedowndefense);
        break;

      case 'strikesratio':
        console.log("strikesratio :" + this.formProfile.value.strikesratio);
        this.endSentences[7].response = this.convertSelection(this.formProfile.value.strikesratio);
        break;

      case 'takedownsratio':
        console.log("takedownsratio :" + this.formProfile.value.takedownsratio);
        this.endSentences[8].response = this.convertSelection(this.formProfile.value.takedownsratio);
        break;

      default:
        break;
    }
  }

  convertSelection(selectedResponse: number): string {

    if (selectedResponse == 1) {
      return 'not important';
    }

    if (selectedResponse == 2) {
      return 'important';
    }

    if (selectedResponse == 3) {
      return 'very important'
    }

    if (selectedResponse == 4) {
      return 'essential'
    }

    return "";

  }

  updateProfileToPostProperty(id: string, value: number) {

  }
}
