import Vue from 'vue'

import {
  LayoutPlugin,
  CardPlugin,
  NavbarPlugin,
  NavPlugin,
  CarouselPlugin,
  ImagePlugin,
  ButtonPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormSelectPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  ListGroupPlugin,
  BreadcrumbPlugin,
  TabsPlugin,
  ToastPlugin
} from 'bootstrap-vue'

export default () => {
  Vue.use(LayoutPlugin)
  Vue.use(CardPlugin)
  Vue.use(NavbarPlugin)
  Vue.use(NavPlugin)
  Vue.use(CarouselPlugin)
  Vue.use(ImagePlugin)
  Vue.use(ButtonPlugin)
  Vue.use(FormPlugin)
  Vue.use(FormGroupPlugin)
  Vue.use(FormSelectPlugin)
  Vue.use(FormInputPlugin)
  Vue.use(FormTextareaPlugin)
  Vue.use(ListGroupPlugin)
  Vue.use(BreadcrumbPlugin)
  Vue.use(TabsPlugin)
  Vue.use(ToastPlugin)
}
