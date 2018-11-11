import * as actions from './actions'
import * as mutations from './mutations'

const wizardModule = () => {
  return {
    state: () => {
      return {
        steps: [
          {
            title: 'Service setup',
            path: '/dashboard/services/setup'
          },
          {
            title: 'Image Setup',
            path: 'service/image'
          },
          {
            title: 'Environment variables',
            path:'services/environment_variables'
          },
          {
            title: 'Volume',
            path:'services/volume'
          },
          {
            title: 'Port Mapping',
            path:'services/port_mapping'
          },
          {
            title: 'Health check',
            path:'services/health_check'
          }
        ]
      }
    },
    actions: actions,
    mutations: mutations
  }
}

export default wizardModule()