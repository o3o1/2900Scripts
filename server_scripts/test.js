BlockEvents.leftClicked(event => {
    event.server.runCommandSilent(`say ${event.block.getId()}`)
})
