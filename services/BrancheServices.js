import Service from './Service'
import { API_URL } from '../config'

const resource = `${API_URL}`

export default {
  getAllBranchess() {
    debugger
        return Service.get(`${resource}/branches?restaurant_id=6`)
            .then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    },
}
