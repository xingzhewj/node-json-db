export interface JsonDBConfig {
  filename: string,
  saveOnPush: boolean,
  humanReadable: boolean,
  separator: string
}

export class Config implements JsonDBConfig {
  filename: string
  humanReadable: boolean
  saveOnPush: boolean
  separator: string


  constructor(filename: string, saveOnPush: boolean = true, humanReadable: boolean = false, separator: string = '/') {
    this.filename = filename

    if (!filename.endsWith(".json")) {
      this.filename += ".json"
    }

    this.humanReadable = humanReadable
    this.saveOnPush = saveOnPush
    this.separator = separator
  }
}