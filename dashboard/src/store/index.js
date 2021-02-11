import { readonly } from 'vue'
import UserModule from './user'
import GlobalMudule from './global'

export default readonly({
	User: UserModule,
	Global: GlobalMudule,
})
