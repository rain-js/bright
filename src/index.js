import Button from './components/button'
import Icon from './components/icon'

const COMPONENTS = [
  Button,
  Icon
]

function install (Vue, option = {}) {
  console.log(option)
  COMPONENTS.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Button,
  Icon
}