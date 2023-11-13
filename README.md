# Project name

perform-front

# Description

Perform-front is a frontend application designed with Angular to be part of a set of separate bricks and micro services which communicate with each other as needed. This set of bricks and micro services constitute the architecture of a web application named perform MMA. Perform-front manages users interarctions with the web application.

Click on the following link for more details on Perform MMA web application =>
<a href="https://docs.google.com/presentation/d/e/2PACX-1vSzRUSTdUaM2xpnRheKOzhWK3UeApCFwF-Qn_Nl0KEetrUcBNHhpZ1nt6GdtnWPDutZzQquVGiIEMkr/pub?start=false&loop=false&delayms=3000">Perform MMA presentation</a> <br>

To test the perform MMA application click on the following link =>
<a href="https://perfmma.surge.sh/#/ngr-home">Perform MMA</a> <br>

The other bricks and micro services constituting the Perform MMA application:

* <a href="https://gitlab.com/perform_project/perform-front">perform-back-nodejs</a>
* <a href="https://gitlab.com/perform_project/perform-robot">perform-robot</a>
* <a href="https://gitlab.com/perform_project/perform-back-spring">perform-back-spring</a>

# Installation

You need to install :
 
* <a href="https://www.oracle.com/fr/java/technologies/javase/jdk11-archive-downloads.html">Java 11</a>
* <a href="https://angular.io/cli">Angular CLI</a>
	
I haven't tested with other versions but the ones above worked for me

Clone the project and open it with your favorite text editor, I used eclipse.

# Local utilisation

Create file : environments/environment.ts

Modify the file like this : 

export const environment = {
    production: false,
    backNodeUrl: your node backend URI here,
    backSpringUrl: your spring backend URI here
};

Run the following commands : 

* ng serve -O

# Contact

Email : yannickkamdemkouam@yahoo.fr

# Project status

Developpement in progress
