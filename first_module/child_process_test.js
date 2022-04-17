const {spawn} = require('child_process')

spawn('git', ['help']).stdout.pipe(process.stdout)