ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    
    event.register(Commands.literal('clean') // The name of the command
      .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
      .executes(c => clean()) // Toggle flight for the player that ran the command if the `target` argument isn't included
    )
    let clean = () => {
        Utils.server.runCommand('kill @e[type=item]')
        return 1
    }
  })
