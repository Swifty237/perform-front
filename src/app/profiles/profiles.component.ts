import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileElement } from '../common/elements-types/profile-element';
import { OtherSpringService } from '../common/services/spring-backend/other/other-spring.service';

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

  formProfile!: FormGroup
  panelOpenState = false;

  constructor(private formBuilder: FormBuilder, private otherSpringService: OtherSpringService) { }

  ngOnInit(): void {
    this.formProfile = this.formBuilder.group({
      preferenceName: this.formBuilder.control("")
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

  handlePreference() {
    if (this.profileToPost.id == 0) {
      this.handlePostPreference();
    }

    if (this.profileToPost.id > 0) {
      this.handleUpdatePreference();
    }
  }

  handlePostPreference() {
    const profileNameToSend = this.formProfile.value.profileName;
    if (profileNameToSend != null) {
      this.profileToPost.name = profileNameToSend;
    } else {
      this.profileToPost.name = "preference" + this.profileToPost.id;
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

  handleUpdatePreference() {
    let input = this.formProfile.value.profileName;
    let isNamePresent = false;
    let isInputEqualPost = false;

    console.log("intput = " + input);

    if (input == null) {
      input = this.inputValue;
    }

    console.log("intput after = " + input);

    if (this.profileToPost.name == input) {

      isInputEqualPost = true;
      console.log("preferenceToPost.name = " + this.profileToPost.name);
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

                  const profileNameToSend = this.formProfile.value.profileName;

                  if (profileNameToSend != null) {
                    this.profileToPost.name = profileNameToSend;

                    for (let fighterProfile of this.profilesAfterDeletion) {
                      if (this.profileToPost.name == fighterProfile.name) {
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

      const profileNameToSend = this.formProfile.value.profileName;

      if (profileNameToSend != null) {
        this.profileToPost.name = profileNameToSend;

        for (let fighterProfile of this.profiles) {
          if (this.profileToPost.name == fighterProfile.name) {
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
      name: '',
      fights: 1,
      wins: 1,
      kowins: 1,
      submissionwins: 1,
      strikes: 1,
      strikesratio: 1,
      takedowns: 1,
      takedowndefense: 1,
      takedownsratio: 1,
      ipsg: 1,
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
}
