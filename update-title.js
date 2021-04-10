var

function updateTitle(){
	document.title = game.settings.get("update-title", "pagetitle");
}

/* Call back after init to include module settings.
*/
Hooks.on("init", function() {
	// Register a client setting
	game.settings.register("update-title", "pagetitle", {
	  name: "Page Title",
	  hint: "The title that appears on the browser tab",
	  scope: "world",     // This specifies a client-stored setting
	  config: true,        // This specifies that the setting appears in the configuration view
	  type: String,
	  default: " • Foundry Virtual Tabletop",        // The default value for the setting
	  onChange: value => { // A callback function which triggers when the setting is changed
		console.log(value)
	  }
	});	
	
});

Hooks.on("renderApplication", function() {
  console.log("This code runs when Foundry VTT renders a scene.");
  updateTitle();
});