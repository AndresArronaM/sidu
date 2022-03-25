import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock, faEye, faEyeSlash, faAt, faLandmark, faKey, faTag, faHashtag, faCalendarDay, faCopyright, faFileSignature } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@/assets/tailwind.css'
import '@/assets/style/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

import AutoComplete from 'primevue/autocomplete'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
import BadgeDirective from 'primevue/badgedirective'
import BlockUI from 'primevue/blockui'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import CascadeSelect from 'primevue/cascadeselect'
import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import Chips from 'primevue/chips'
import ColorPicker from 'primevue/colorpicker'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import ContextMenu from 'primevue/contextmenu'
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import DeferredContent from 'primevue/deferredcontent'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dock from 'primevue/dock'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'
import FileUpload from 'primevue/fileupload'
import Galleria from 'primevue/galleria'
import Image from 'primevue/image'
import InlineMessage from 'primevue/inlinemessage'
import Inplace from 'primevue/inplace'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import MegaMenu from 'primevue/megamenu'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import OrderList from 'primevue/orderlist'
import OrganizationChart from 'primevue/organizationchart'
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Password from 'primevue/password'
import PickList from 'primevue/picklist'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Rating from 'primevue/rating'
import RadioButton from 'primevue/radiobutton'
import Ripple from 'primevue/ripple'
import Row from 'primevue/row'
import SelectButton from 'primevue/selectbutton'
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop'
import Skeleton from 'primevue/skeleton'
import Slider from 'primevue/slider'
import Sidebar from 'primevue/sidebar'
import SpeedDial from 'primevue/speeddial'
import SplitButton from 'primevue/splitbutton'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Steps from 'primevue/steps'
import StyleClass from 'primevue/styleclass'
import TabMenu from 'primevue/tabmenu'
import TieredMenu from 'primevue/tieredmenu'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import Toolbar from 'primevue/toolbar'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Terminal from 'primevue/terminal'
import Timeline from 'primevue/timeline'
import ToggleButton from 'primevue/togglebutton'
import Tooltip from 'primevue/tooltip'
import Tree from 'primevue/tree'
import TreeSelect from 'primevue/treeselect'
import TreeTable from 'primevue/treetable'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import VirtualScroller from 'primevue/virtualscroller'

import CRUD from '@/template/crud'
import Panels from '@/template/panels'
import Registro from '@/template/registro'

import Link from '@/components/link'

import CreatedUser from '@/components/create/user'
import CreatedBienes from '@/components/create/bienes'
import CreatedDepartamentos from '@/components/create/departamentos'
import CreatedCategorias from '@/components/create/categorias'
import CreatedDocumento from '@/components/create/documento'

const app = createApp(App)
app.use(router)
app.use(PrimeVue,
  {
    ripple: true,
    locale: {}
  })

library.add(faUser, faLock, faEye, faEyeSlash, faAt, faLandmark, faKey, faTag, faHashtag, faCalendarDay, faCopyright, faFileSignature)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(ConfirmationService)
app.use(ToastService)

app.directive('tooltip', Tooltip)
app.directive('badge', BadgeDirective)
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)

app.component('pv-accordion', Accordion)
app.component('pv-accordionTab', AccordionTab)
app.component('pv-autoComplete', AutoComplete)
app.component('pv-avatar', Avatar)
app.component('pv-avatarGroup', AvatarGroup)
app.component('pv-badge', Badge)
app.component('pv-blockUI', BlockUI)
app.component('pv-breadcrumb', Breadcrumb)
app.component('pv-button', Button)
app.component('pv-calendar', Calendar)
app.component('pv-card', Card)
app.component('pv-carousel', Carousel)
app.component('pv-cascadeSelect', CascadeSelect)
app.component('pv-checkbox', Checkbox)
app.component('pv-chip', Chip)
app.component('pv-chips', Chips)
app.component('pv-colorPicker', ColorPicker)
app.component('pv-column', Column)
app.component('pv-columnGroup', ColumnGroup)
app.component('pv-confirmDialog', ConfirmDialog)
app.component('pv-confirmPopup', ConfirmPopup)
app.component('pv-contextMenu', ContextMenu)
app.component('pv-dataTable', DataTable)
app.component('pv-dataView', DataView)
app.component('pv-dataViewLayoutOptions', DataViewLayoutOptions)
app.component('pv-deferredContent', DeferredContent)
app.component('pv-dialog', Dialog)
app.component('pv-divider', Divider)
app.component('pv-dock', Dock)
app.component('pv-dropdown', Dropdown)
app.component('pv-fieldset', Fieldset)
app.component('pv-fileUpload', FileUpload)
app.component('pv-galleria', Galleria)
app.component('pv-image', Image)
app.component('pv-inlineMessage', InlineMessage)
app.component('pv-inplace', Inplace)
app.component('pv-inputMask', InputMask)
app.component('pv-inputNumber', InputNumber)
app.component('pv-inputSwitch', InputSwitch)
app.component('pv-inputText', InputText)
app.component('pv-knob', Knob)
app.component('pv-listbox', Listbox)
app.component('pv-megaMenu', MegaMenu)
app.component('pv-menu', Menu)
app.component('pv-menubar', Menubar)
app.component('pv-message', Message)
app.component('pv-multiSelect', MultiSelect)
app.component('pv-orderList', OrderList)
app.component('pv-organizationChart', OrganizationChart)
app.component('pv-overlayPanel', OverlayPanel)
app.component('pv-paginator', Paginator)
app.component('pv-panel', Panel)
app.component('pv-panelMenu', PanelMenu)
app.component('pv-password', Password)
app.component('pv-pickList', PickList)
app.component('pv-progressBar', ProgressBar)
app.component('pv-progressSpinner', ProgressSpinner)
app.component('pv-radioButton', RadioButton)
app.component('pv-rating', Rating)
app.component('pv-row', Row)
app.component('pv-selectButton', SelectButton)
app.component('pv-scrollPanel', ScrollPanel)
app.component('pv-scrollTop', ScrollTop)
app.component('pv-slider', Slider)
app.component('pv-sidebar', Sidebar)
app.component('pv-skeleton', Skeleton)
app.component('pv-speedDial', SpeedDial)
app.component('pv-splitButton', SplitButton)
app.component('pv-splitter', Splitter)
app.component('pv-splitterPanel', SplitterPanel)
app.component('pv-steps', Steps)
app.component('pv-tabMenu', TabMenu)
app.component('pv-tabView', TabView)
app.component('pv-tabPanel', TabPanel)
app.component('pv-tag', Tag)
app.component('pv-textarea', Textarea)
app.component('pv-terminal', Terminal)
app.component('pv-tieredMenu', TieredMenu)
app.component('pv-timeline', Timeline)
app.component('pv-toast', Toast)
app.component('pv-toolbar', Toolbar)
app.component('pv-toggleButton', ToggleButton)
app.component('pv-tree', Tree)
app.component('pv-treeSelect', TreeSelect)
app.component('pv-treeTable', TreeTable)
app.component('pv-triStateCheckbox', TriStateCheckbox)
app.component('pv-virtualScroller', VirtualScroller)

app.component('du-crud', CRUD)
app.component('du-panels', Panels)
app.component('du-registro', Registro)

app.component('du-link', Link)

app.component('du-createdUser', CreatedUser)
app.component('du-createdBienes', CreatedBienes)
app.component('du-createdDepartamentos', CreatedDepartamentos)
app.component('du-createdCategorias', CreatedCategorias)
app.component('du-createdDocumento', CreatedDocumento)

app.mount('#app')
