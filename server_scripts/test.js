ItemEvents.firstLeftClicked(event => {
    event.server.runCommandSilent(`say ${event.target}`)
})
