/**
 * @author Sotero
 * @author Frank Dip
 * @author robt9095wssas
 * @author rskovronuc6g
 * @desc Calls the JSON file from Google Docs to make the cards
 * @version 1.2
 */

/** ***************************************
 * DOM selectors
 ******************************************/
const $cardRow = $("#cardRow");

/** ***************************************
 * Model
 ******************************************/
/** @desc URL for the google sheets with student info */
const api = "https://script.googleusercontent.com/macros/echo?user_content_key=rPswN3mE0GY8EgmnDOYcNKWiv0CT28n9CIrUaRG3kTrGbp74wWqOttwqBZLG_CD2p3ny42g63whN_6iDnP45BeIkE9tHDbekOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp8eidpIA163SiTYYksqCwBqx6YpZaDrVY_lcUEZWvYHQol3WVQ7nIi3OJamMs-n04TQJv8DXWa1h6YynRodI14iC1FYEJlGtPA&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx";

/** ***************************************
 * Controller
 ******************************************/
/**
 * @desc jQuery doc ready shorthand
 * When ready, makes an AJAX call
 */
$(function() {
  /**
   * @desc Pulls JSON data from google doc spreadsheets
   * @param {string} api It's the URL for the data
   * @param {object} data JSON data from google sheets
   */
  $.getJSON(api).done(function(data) {
    /** @desc Array of JSON data */
    let arr = Array.from(data["Form Responses 1"]);
    console.log(arr);
    /**
     * @desc Loops through the array of JSON to make cards
     * @param {object} element Each element the array with student data
     */
    arr.forEach(function(element) {
      /** @desc Conditional incase empty field for GIthub */
      if (element.Github_ID === "") {
        let defaultAvatar = "public/images/studentProfile.png";
        makeCard(element, defaultAvatar);
      } else {
        /**
         * @desc Github URL for each student
         * Conditional incase of full URL or just name
         */
        let githubName =
          element.Github_ID.includes("https") ?
            element.Github_ID.slice(element.Github_ID.lastIndexOf("/") + 1) :
            element.Github_ID;
        let githubURL = `https://api.github.com/users/${githubName}`;
        /**
         * @desc Makes a call to github to get avatar image
         * @param {string} githubURL URL to direct the call
         * @param {object} data JSON data from github
         */
        $.getJSON(githubURL).done(function(data) {
          /** @desc Image URL for each student from github */
          let avatar = data.avatar_url;
          /**
           * @desc Calling the makeCard functionb
           * @arg {object} element JSON data from googlesheets
           * @arg {string} avatar Avatar URL from Github
           */
          makeCard(element, avatar);
        });
      }
    });
  })
  .fail(function() {
    alert('error getting google data!');
  });
});

/** ***************************************
 * View
 ******************************************/
/**
 * @desc Makes the cards with JSON data
 * @param {object} e Takes an object to build each card
 * @param {string} avatar Avatar URL from Github
 */
function makeCard(e, avatar) {
  /** @desc Checks for full URL or just ID */
  const githubURL =
    e.Github_ID.includes("https") ?
      e.Github_ID :
      `https://github.com/${e.Github_ID}`;
  /** @desc Checks for numbers or Name */
  const googlePlusURL =
    e["Google+_ID"][0] < 65 ?
      `https://plus.google.com/u/0/${e["Google+_ID"]}` :
      `https://plus.google.com/u/0/+${e["Google+_ID"]}`;
  /** @desc Converts twitter handle to full URL or just empty strings */
  const twitterURL =
    e.Twitter_ID ?
      `https://twitter.com/${e.Twitter_ID}` :
      "";
  const $divCols = $(`
    <div class="col-md-4 col-sm-6">
      <div class="card-container">
        <article class="card">
          <div class="front">
            <div class="cover"></div>
            <div class="user"><img class="img-circle" src=${avatar} /></div>
            <div class="content">
              <div class="main">
                <h3 class="name">${e.First_Name} ${e.Last_Name}</h3>
                <p class="profession">Current or Future Profession</p>
                <p class="text-center">${e.Udacity_Statement}</p>
              </div>
              <footer class="footer">
                <div class="rating"></div>
              </footer>
            </div>
          </div>
          <div class="back">
            <div class="header">
              <h5 class="motto">${e.Catchy_Phrase}</h5>
            </div>
            <div class="content">
              <div class="main">
                <h4 class="text-center">Front End Favorites:</h4>
                <p class="text-center">HTML5, CSS3, and JavaScript! </p>
                <div class="stats-container">
                  <div class="stats">
                    <h4></h4>
                    <p></p>
                  </div>
                  <div class="stats">
                    <h4>Portfolio</h4>
                    <p><a href=${e["Portfolio/Website_URL"]} target="_blank">Portfolio</a></p>
                  </div>
                  <div class="stats">
                    <h4></h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <footer class="footer">
              <div class="social-links text-center">
                <a class="github" href="${githubURL}" target="_blank"><i class="fa fa-github fa-fw"></i></a>
                <a class="google" href="${googlePlusURL}" target="_blank"><i class="fa fa-google-plus fa-fw"></i></a>
                <a class="twitter" href="${twitterURL}" target="_blank"><i class="fa fa-twitter fa-fw"></i></a>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  `);

  $cardRow.append($divCols);
}
