# Know-Your-Notes

Know Your Notes is a web tool that aims to help users studying an instrument or music theory to get used to the notes on the stave. The site is intended for users who wish to build up a fluency in reading sheet music. 

This tool tests the users knowledge of both the treble and bass clefs using images and a note selector below.

The live link can be found here - [Know Your Notes](https://fergalmulvey.github.io/know-your-notes/)

![Am I Responsive Image](assets/images/responsiveness.png)

## Site Owner Goals 
- To provide the user with a useful tool that is simple to use.
- To ensure the study tool is effective and helps the user build fluency in reading and writing sheet music.

## Features
- Study either the bass clef, treble clef, or both!
- Clear question image area in the centre of the application.
- Real-time feedback on each answer.
- Tracker for the number of correct and incorrect answers.
- Will run indefinitely to really reinforce the correct notes in the user's head.

## Design

### Question displayer
In order to display a random notes of a specific typle, the names of the image files were stored in an array of strings and then the index for the current image comes from using math.random to generate a number from 0-12 for bass, 13-25 for treble and 0-25 for both.

### Answer Validator
The correct answer in the answer checker function is read from the src of the image displayed, with the name of the noters being the first letter in each image file name. The user answer is passed to this function using an action listener for the answer buttons. The id value of each button is the name of the note. These character are then compared using the === comparator.

### Imagery and Color
The backround image is very much on theme displaying music on the stave. The coulour theme used throughout the application ties in nicely with the background while maintaining a 100% accessability score.


## Testing

### Validator Testing
- #### HTML
    - No errors were returned when passing through the official W3C Markup Validator
- #### CSS
    - No errors were found when passing through the official W3C CSS Validator 
- #### Accessibility 
    - The site achieved a Lighthouse accessibility score of 100% which confirms that the colours and fonts chosen are easy to read and accessible

![Lighthouse score](assets/images/lighthouse.png)

### Browser Testing
- The Website was tested on Google Chrome, Firefox, Microsoft Edge, Safari browsers with no issues noted.
    
### Device Testing
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 8, iPhoneX and iPad to ensure responsiveness on various screen sizes. The website performed as intended. The responsive design was also checked using Chrome developer tools across multiple devices with structural integrity holding for the various sizes.
- I also used the following websites to test responsiveness:
    - [Responsinator](http://www.responsinator.com/)
    - [Am I Responsive](http://ami.responsivedesign.is/)


### Friends and Family User Testing
Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Fixed Bugs
#### Images Within a Button
There was an issue wherein having an image in a button container would affect the position of the button on the page. This was resolved by makking the clef selector area, as well a the buttons themselves, flexbox containers witrh appropriately justified content.


## Technologies Used

### Languages
- HTML5
- CSS
- JavaScript

### Frameworks - Libraries - Programs Used
- [Am I Responsive](http://ami.responsivedesign.is/) - Used to verify responsiveness of website on different devices.
- [Responsinator](http://www.responsinator.com/) - Used to verify responsiveness of website on different devices.
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - Used for overall development and tweaking, including testing responsiveness and performance.
- [GitHub](https://github.com/) - Used for version control and hosting.
- [Google Fonts](https://fonts.google.com/) - Used to import and alter fonts on the page.
- [TinyPNG](https://tinypng.com/) - Used to compress images to reduce file size without a reduction in quality.
- [W3C](https://www.w3.org/) - Used for HTML & CSS Validation.


## Deployment

The project was deployed using GitHub pages. The steps to deploy using GitHub pages are:

1. Go to the repository on GitHub.com
2. Select 'Settings' near the top of the page.
3. Select 'Pages' from the menu bar on the left of the page.
4. Under 'Source' select the 'Branch' dropdown menu and select the main branch.
5. Once selected, click the 'Save'.
6. Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.

The live link can be found here - [Know Your Notes](https://fergalmulvey.github.io/know-your-notes/)

## Credits


### Media

Background image by starline on Freepik.


## Acknowledgments
My mentor Antonio for his support and advice.

The Code Institute slack community for their quick responses and very helpful feedback!

