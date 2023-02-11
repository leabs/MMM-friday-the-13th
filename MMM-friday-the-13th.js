/* MagicMirror²
 * Module: MMM-friday-the-13th
 *
 * By Steven Leabo https://stevenleabo.com
 * MIT Licensed.
 */
Module.register("MMM-friday-the-13th", {
	// Module config defaults.
	defaults: {
	  //update every 60 minutes
	  updateInterval: 60 * 60 * 1000,
	  scary: false
	},
	getHeader: function () {
	  return "Is it Friday the 13th?";
	},
	getStyles: function () {
	  return [
		"style.css", // will try to load it from the vendor folder, otherwise it will load is from the module folder.
	  ];
	},
// Override dom generator.
getDom: function () {
    var wrapper = document.createElement("div");
	//If scary is true we need to test the result bool to display the scary image if true, otherwise display the message
	if(this.config.scary === true){
		//If result is true and config is set to scary, display the scary image
		if (result === true) {
			//DONT CLICK THIS IMAGE IT IS SCARY!!!
			wrapper.innerHTML = "<img src='https://i.ibb.co/9cn2BvB/scary.png' alt='FRIDAY 13th IMAGE SCARY!!!' >";
			return wrapper;
		} else {
			wrapper.innerHTML = message;
    		return wrapper;
		}
	} else {
		wrapper.innerHTML = message;
		return wrapper;
	}
  },
});

// Declare a variable to hold the message
let message = "";
// Declare a function to test if today is friday the 13th
function friday() {
  //Get today's date, day of the week, and day of the month
  let today = new Date();
  let day = today.getDay();
  let date = today.getDate();
  //Test if today is friday the 13th
  if (day === 5 && date === 13) {
	//If it is, set message
	result = true;
	message = "YES IT IS FRIDAY THE 13TH!!!";
	//If it is not, set message
  } else {
	result = false;
	message = "Nope, not today";
  }
  //Return message
  return message;
}

// Call the function
friday();

