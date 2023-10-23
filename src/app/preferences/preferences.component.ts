import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OtherSpringService } from '../common/services/spring-services/other-spring.service';
import { PreferenceElement } from '../common/utils/preference-elements';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})

export class PreferencesComponent implements OnInit {

  preferenceToPost!: PreferenceElement;
  inputValue!: String;
  errorMessage!: String
  preferences!: PreferenceElement[];
  afterDeletePreferences!: PreferenceElement[];

  formPreference!: FormGroup
  panelOpenState = false;

  constructor(private formBuilder: FormBuilder, private otherSpringService: OtherSpringService) { }

  ngOnInit(): void {
    this.formPreference = this.formBuilder.group({
      preferenceName: this.formBuilder.control("")
    });

    this.loadPreferences();
    this.handleResetPreference();
  }

  loadPreferences() {
    this.otherSpringService.loadAllUserPreferences()
      .subscribe({
        next: (data: PreferenceElement[]) => {
          data.sort((a, b) => b.id - a.id);
          this.preferences = data;
        },
        error: err => console.error('An error occurred:', err)
      })
  }

  loadPreference(preferenceId: number) {
    this.otherSpringService.loadUserPreference(preferenceId)
      .subscribe({
        next: data => {
          this.inputValue = data.name;
          this.preferenceToPost = data;
        },
        error: err => console.error('An error occurred:', err)
      })
  }

  handleDelete(preferenceId: number) {
    this.otherSpringService.deletePreference(preferenceId)
      .subscribe({
        next: () => {
          this.handleResetPreference();
          this.loadPreferences();
        },
        error: err => console.error('An error occurred:', err)
      });
  }

  handlePreference() {
    if (this.preferenceToPost.id == 0) {
      this.handlePostPreference();
    }

    if (this.preferenceToPost.id > 0) {
      this.handleUpdatePreference();
    }
  }

  handlePostPreference() {
    const preferenceNameToSend = this.formPreference.value.preferenceName;
    if (preferenceNameToSend != null) {
      this.preferenceToPost.name = preferenceNameToSend;
    } else {
      this.preferenceToPost.name = "preference" + this.preferenceToPost.id;
    }

    this.otherSpringService.postPreference(this.preferenceToPost)
      .subscribe({
        next: () => {
          this.loadPreferences();
          this.handleResetPreference();
        },
        error: err => {
          console.log(err.status);
        }
      });
  }

  handleUpdatePreference() {
    let input = this.formPreference.value.preferenceName;
    let isNamePresent = false;
    let isInputEqualPost = false;

    console.log("intput = " + input);

    if (input == null) {
      input = this.inputValue;
    }

    console.log("intput after = " + input);

    if (this.preferenceToPost.name == input) {

      isInputEqualPost = true;
      console.log("preferenceToPost.name = " + this.preferenceToPost.name);
      console.log("preferenceToPost.id = " + this.preferenceToPost.id);
    }

    if (isInputEqualPost) {

      isInputEqualPost = false;

      this.otherSpringService.deletePreference(this.preferenceToPost.id)
        .subscribe({
          next: () => {

            this.otherSpringService.loadAllUserPreferences()
              .subscribe({
                next: (data: PreferenceElement[]) => {

                  this.afterDeletePreferences = data;

                  const preferenceNameToSend = this.formPreference.value.preferenceName;

                  if (preferenceNameToSend != null) {
                    this.preferenceToPost.name = preferenceNameToSend;

                    for (let preference of this.afterDeletePreferences) {
                      if (this.preferenceToPost.name == preference.name) {
                        isNamePresent = true;
                      }
                    }
                  }

                  if (!isNamePresent) {

                    this.errorMessage = "";
                    this.otherSpringService.postPreference(this.preferenceToPost)
                      .subscribe({
                        next: () => {
                          this.loadPreferences();
                          this.handleResetPreference();
                        },
                        error: err => {
                          console.log(err.status);
                        }
                      });

                  } else {

                    isNamePresent = false;
                    this.errorMessage = "This name is already use";
                    console.log(this.errorMessage);

                  }
                },

                error: err => console.error('An error occurred:', err)
              })
          },

          error: err => console.error('An error occurred:', err)
        });
    } else {

      const preferenceNameToSend = this.formPreference.value.preferenceName;

      if (preferenceNameToSend != null) {
        this.preferenceToPost.name = preferenceNameToSend;

        for (let preference of this.preferences) {
          if (this.preferenceToPost.name == preference.name) {
            isNamePresent = true;
          }
        }
      }

      if (!isNamePresent) {

        this.otherSpringService.deletePreference(this.preferenceToPost.id)
          .subscribe({
            next: () => {

              this.otherSpringService.loadAllUserPreferences()
                .subscribe({
                  next: (data: PreferenceElement[]) => {

                    this.afterDeletePreferences = data;

                    this.errorMessage = "";
                    this.otherSpringService.postPreference(this.preferenceToPost)
                      .subscribe({
                        next: () => {
                          this.loadPreferences();
                          this.handleResetPreference();
                        },
                        error: err => {
                          console.log(err.status);
                        }
                      });
                  },

                  error: err => console.error('An error occurred:', err)
                })
            },

            error: err => console.error('An error occurred:', err)
          });

      } else {

        isNamePresent = false;
        this.errorMessage = "This name is already use";
        console.log(this.errorMessage);

      }
    }
  }

  handleResetPreference() {
    this.formPreference.reset();
    this.preferenceToPost = {
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

  handleActivate(preference: PreferenceElement) {

    if (preference.isActive == false) {

      for (let element of this.preferences) {

        if (element.isActive == true && element.id != preference.id) {
          this.otherSpringService.deletePreference(element.id)
            .subscribe({
              next: () => {

                element.isActive = false;
                this.otherSpringService.postPreference(element)
                  .subscribe({
                    next: () => this.loadPreferences()
                  });
              }
            });
        }
      }

      setTimeout(() => {
        this.otherSpringService.deletePreference(preference.id)
          .subscribe({
            next: () => {

              preference.isActive = true;
              this.otherSpringService.postPreference(preference)
                .subscribe({
                  next: () => this.loadPreferences()
                });
            }
          });
      }, 100)
    }
  }
}