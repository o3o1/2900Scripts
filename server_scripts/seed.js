// priority: 1000
ServerEvents.loaded((e) => {
  e.server.runCommandSilent("reload");
});

// ServerEvents.afterRecipes((e)=>{
//   const server = Utils.getServer();
//   console.log("aaaaaaa"+server);
//   if(!server)
//     global.SHOULD_RELOAD = true;
//   else
//   {
//     global.SHOULD_RELOAD = false;
//   }
// });
