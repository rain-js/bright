import Button from './components/button'

const COMPONENTS = [
  Button
]

function install (Vue, option = {}) {
  console.log(option)
  COMPONENTS.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Button
}