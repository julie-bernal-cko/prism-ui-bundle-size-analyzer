import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const directory: string = core.getInput('directory')

    core.setOutput('directory', directory)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
