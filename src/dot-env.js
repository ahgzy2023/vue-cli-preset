const { readFileSync, existsSync } = require('fs')
const { parse } = require('dotenv')
const { resolve } = require('path')

function load(filename) {
  const envPath = resolve(__dirname, '../', filename)
  if (existsSync(envPath)) {
    return parse(readFileSync(envPath))
  }
  return {}
}

function correctValueType(value, stringify = false) {
  if (/^\d+(\.\d*)?$/i.test(value)) {
    return Number(value)
  }

  if (/^(true|false)$/.test(value)) {
    return value === 'true'
  }

  return typeof value === 'string' && stringify ? JSON.stringify(value) : value
}

function formatValueType(options) {
  return Object.keys(options).reduce((target, key) => {
    target[key] = correctValueType(options[key])
    return target
  }, {})
}

function envLoad(env = 'production') {
  const base = load('.env')
  const main = load(`.env.${env}`)
  const local = load(`.env.${env}.local`)
  return formatValueType({ ...base, ...main, ...local })
}

function paseWebEnv(options, key, value) {
  options[key] = correctValueType(value, true)
  return options
}

function filterWebEnv(config) {
  return Object.keys(config).filter(key => {
    return ['__VUE_', 'ENV', 'PRESET_APP'].some(prefix => key.startsWith(prefix))
  }).reduce((options, key) => paseWebEnv(options, key, config[key]), {})
}

const devEnv = envLoad('development')
const prodEnv = envLoad('production')
const devWebEnv = filterWebEnv(devEnv)
const prodWebEnv = filterWebEnv(prodEnv)

module.exports = {
  development: {
    hostname: `${devEnv.DEV_SERVER_PORT}`,
    node: devEnv,
    browser: devWebEnv,
  },
  production: {
    node: prodEnv,
    browser: prodWebEnv
  }
}
