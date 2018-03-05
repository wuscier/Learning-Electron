// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer

const syncMsgBtn = document.getElementById('sendSyncMsgBtn')

syncMsgBtn.addEventListener('click', function () {
	const reply = ipc.sendSync('synchronous-message', 'Mr. Watson, come here.')
		console.log(reply)
		const message =  `Synchronous message reply: ${reply}`
		document.getElementById('syncReply').innerHTML = message
})

const asyncMsgBtn = document.getElementById('sendAsyncMsgBtn')

asyncMsgBtn.addEventListener('click', function(){
	ipc.send('async-msg','async_test')
	ipc.on('async-reply',function(event, arg){
		const message = `asynchronous message reply:${arg}`
		document.getElementById('asyncReply').innerHTML = message
	})
})