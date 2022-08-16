import Display from './display/index.vue';
import Edit from './edit/index.vue';
import SideToolbar from './edit/SideToolbar.vue';
import TopToolbar from './edit/TopToolbar.vue';

/**
 * Method used to create the initial state of the data by declaring the
 * defaults for the elements props. Does not need to be defined.
 */
const initState = () => ({});

/**
 * The fields that need to be customized are:
 * name: a string that is displayed to a user in the editor
 * ui->icon: a string representing the name of the MDI (https://materialdesignicons.com/)
 * icon that is displayed to the user in the editor
 * ui->forceFullWidth: a boolean value which defines if the element can only be
 * added as full width element
 */

const manifest = {
  type: 'CUSTOM_ELEMENT', // a unique string used by Tailor to identify this element
  version: '1.0',
  name: 'Custom element',
  initState,
  Edit,
  TopToolbar,
  SideToolbar,
  Display,
  ui: {
    icon: 'mdi-help-circle',
    forceFullWidth: true
  }
};

export default manifest;
