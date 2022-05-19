import '@/plugins';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import dateFilter from '@/filters/date';
import AppSpinner from '@/components/utils/AppSpinner';
import AppAlert from '@/components/utils/AppAlert';
import AppVotingWidget from '@/components/utils/AppVotingWidget';

Vue.filter( 'date', dateFilter );

Vue.component( 'AppSpinner', AppSpinner );
Vue.component( 'AppAlert', AppAlert );
Vue.component( 'AppVotingWidget', AppVotingWidget );