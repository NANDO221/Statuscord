const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE_NAME = "The name of the image", osamason
  LARGE_TEXT = "Large text on the status",Watch
  SMALL_TEXT = "Small text on the status",watch
  LINK = https://youtu.be/-KKbdErJkiY?si=JsP_m-UadrkyXUge;
 
module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
  .then(image => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName("twitch")
      .setUrl(LINK)
      .setType("STREAMING")
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setAssetsLargeText(SMALL_TEXT)
      .setDetails(LARGE_TEXT)
      .toDiscord()
  ));
