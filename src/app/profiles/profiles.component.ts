import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileElement } from '../common/elements-types/profile-element';
import { OtherSpringService } from '../common/services/spring-backend/other/other-spring.service';

export type SentenceElement = {
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
  activeProfile!: ProfileElement;
  inactiveProfiles: ProfileElement[] = [];

  defaultActiveProfile: ProfileElement = {

    id: 0,
    description: "Default profile",
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
    isActive: true
  }

  profilesAfterDeletion!: ProfileElement[];
  startSentence = "To compare two mma fighters the ";
  endSentence = "";
  selectedIndex: number = 0;
  selectedAnswer: string = 'fights';
  successMessage = "";
  selectedIndexValues: number[] = [];

  endSentences: SentenceElement[] = [
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

    this.initActiveProfile();

    this.formProfile = this.formBuilder.group({
      profileDescription: this.formBuilder.control("", Validators.required),
      fights: this.formBuilder.control("", Validators.required),
      wins: this.formBuilder.control("", Validators.required),
      kowins: this.formBuilder.control("", Validators.required),
      submissionwins: this.formBuilder.control("", Validators.required),
      strikes: this.formBuilder.control("", Validators.required),
      strikesratio: this.formBuilder.control("", Validators.required),
      takedowns: this.formBuilder.control("", Validators.required),
      takedowndefense: this.formBuilder.control("", Validators.required),
      takedownsratio: this.formBuilder.control("", Validators.required),
    });

    this.loadFighterProfiles();
    this.handleReset();
  }

  handleActivateDefault(activeElement: ProfileElement) {

    this.otherSpringService.deleteFighterProfile$(activeElement.id)
      .subscribe({
        next: () => {

          activeElement.isActive = false;
          this.otherSpringService.postFighterProfile$(activeElement)
            .subscribe({
              next: () => {
                this.initActiveProfile();
                this.loadFighterProfiles();
              },
              error: (err: any) => console.log(err.status)
            });
        }
      })
  }

  handleActivate(activeElement: ProfileElement, elementToActivate: ProfileElement) {

    if (activeElement.id != 0) {

      this.otherSpringService.deleteFighterProfile$(activeElement.id)
        .subscribe({
          next: () => {

            activeElement.isActive = false;
            this.otherSpringService.postFighterProfile$(activeElement)
              .subscribe({
                next: () => this.loadFighterProfiles(),
                error: (err: any) => console.log(err.status)
              });
          }
        })
    }

    elementToActivate.isActive = true;

    setTimeout(() => {
      this.otherSpringService.deleteFighterProfile$(elementToActivate.id)
        .subscribe({
          next: () => {

            elementToActivate.isActive = true;
            this.otherSpringService.postFighterProfile$(elementToActivate)
              .subscribe({
                next: () => {
                  this.loadFighterProfiles()
                },
                error: (err: any) => console.log(err.status)
              });
          }
        });
    }, 100)

  }


  // To activate the default profile
  initActiveProfile() {
    this.activeProfile = this.defaultActiveProfile;
  }


  loadActiveProfile(tab: ProfileElement[]) {

    tab.forEach(profile => {
      if (profile.isActive) {
        this.activeProfile = profile;
      }
    })

    if (!this.activeProfile) {
      this.initActiveProfile();
    }
  }

  loadInactiveProfiles(tab: ProfileElement[]) {
    this.inactiveProfiles = [];

    tab.forEach(profile => {
      if (!profile.isActive) {
        this.inactiveProfiles.push(profile);
      }
    })
  }

  validateField(field: string) {
    const control = this.getControl(field);

    if (control && control.invalid) {
      control.markAsTouched();
    }
  }

  loadFighterProfiles() {
    this.otherSpringService.loadAllFighterProfiles$()
      .subscribe({
        next: (data: ProfileElement[]) => {
          data.sort((a, b) => b.id - a.id);

          this.loadActiveProfile(data);
          this.loadInactiveProfiles(data);
        },
        error: (err: any) => console.error('An error occurred:', err)
      })
  }

  loadProfileToModify(profileId: number) {
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

  getControl(field: string) {
    return this.formProfile.get(field);
  }

  handleProfile() {

    const description = this.getControl("profileDescription");
    const fights = this.getControl("fights");
    const wins = this.getControl("wins");
    const kowins = this.getControl("kowins");
    const submissionwins = this.getControl("submissionwins");
    const strikes = this.getControl("strikes");
    const strikesratio = this.getControl("strikesratio");
    const takedowns = this.getControl("takedowns");
    const takedowndefense = this.getControl("takedowndefense");
    const takedownsratio = this.getControl("takedownsratio");

    if (fights && fights.invalid) {
      this.validateField("fights");
      return
    }

    if (wins && wins.invalid) {
      this.validateField("wins");
      return
    }

    if (kowins && kowins.invalid) {
      this.validateField("kowins");
      return
    }

    if (submissionwins && submissionwins.invalid) {
      this.validateField("submissionwins");
      return
    }

    if (strikes && strikes.invalid) {
      this.validateField("strikes");
      return
    }

    if (strikesratio && strikesratio.invalid) {
      this.validateField("strikesratio");
      return
    }

    if (takedowns && takedowns.invalid) {
      this.validateField("takedowns");
      return
    }

    if (takedowndefense && takedowndefense.invalid) {
      this.validateField("takedowndefense");
      return
    }

    if (takedownsratio && takedownsratio.invalid) {
      this.validateField("takedownsratio");
      return
    }

    if (takedownsratio && takedownsratio.valid) {
      if (description && description.invalid) {
        this.validateField("profileDescription");
        return
      }
    }

    this.handlePostProfile();

    this.endSentences.forEach(sentenceItem => {
      sentenceItem.response = "..."
    })

    this.selectedIndex = 0;
    this.selectedIndexValues = [];
    this.formProfile.reset();
    this.successMessage = "saved !"
  }

  // Post the profile to database
  handlePostProfile() {
    this.profileToPost.description = this.formProfile.value.profileDescription
    this.profileToPost.fights = this.formProfile.value.fights;
    this.profileToPost.wins = this.formProfile.value.wins;
    this.profileToPost.kowins = this.formProfile.value.kowins;
    this.profileToPost.submissionwins = this.formProfile.value.submissionwins;
    this.profileToPost.strikes = this.formProfile.value.strikes;
    this.profileToPost.strikesratio = this.formProfile.value.strikesratio;
    this.profileToPost.takedowns = this.formProfile.value.takedowns;
    this.profileToPost.takedowndefense = this.formProfile.value.takedowndefense;
    this.profileToPost.takedownsratio = this.formProfile.value.takedownsratio;

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

    if (input == null) {
      input = this.inputValue;
    }


    if (this.profileToPost.description == input) {

      isInputEqualPost = true;
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


  scrollToSection(sectionId: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  getIndexInEnSentences(index: string): number {
    let indexInEndsentences = 0
    this.endSentences.forEach(sentenceItem => {
      if (sentenceItem.id == index) {
        indexInEndsentences = this.endSentences.indexOf(sentenceItem)
      }
    })
    return indexInEndsentences;
  }

  selectSentence(index: string) {
    if (this.selectedIndex <= this.endSentences.length - 1 && this.getIndexInEnSentences(index) == this.selectedIndex) {
      this.selectedIndexValues.push(this.selectedIndex)
      this.selectedIndex++;
    }
  }

  manageAnswer(id: string, selectedValue: number) {

    this.resetSuccessMessage();
    this.selectSentence(id);

    switch (id) {
      case 'fights':
        this.endSentences[0].response = this.convertSelection(selectedValue);
        break;

      case 'wins':
        this.endSentences[1].response = this.convertSelection(selectedValue);
        break;

      case 'kowins':
        this.endSentences[2].response = this.convertSelection(selectedValue);
        break;

      case 'submissionwins':
        this.endSentences[3].response = this.convertSelection(selectedValue);
        break;

      case 'strikes':
        this.endSentences[4].response = this.convertSelection(selectedValue);
        break;

      case 'takedowns':
        this.endSentences[6].response = this.convertSelection(selectedValue);
        break;

      case 'takedowndefense':
        this.endSentences[7].response = this.convertSelection(selectedValue);
        break;

      case 'strikesratio':
        this.endSentences[5].response = this.convertSelection(selectedValue);
        break;

      case 'takedownsratio':
        this.endSentences[8].response = this.convertSelection(selectedValue);
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

  isKeyOfProfileElement(key: string): key is keyof ProfileElement {
    return key in this.profileToPost;
  }

  resetSuccessMessage() {
    this.successMessage = "";
  }
}
