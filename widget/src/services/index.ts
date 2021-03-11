import axios from 'axios'
import FeedbacksService from './feedbacks'

type ApiEnvProps = {
	production: string
	local: string
}

const API_ENVS: ApiEnvProps = {
	production: 'https://backend-treinamento-vue3.vercel.app',
	local: 'http://localhost:3000',
}

const nodeEnv = process.env.NODE_ENV

const httpClient = axios.create({
	baseURL: API_ENVS[nodeEnv] || API_ENVS.local,
})

httpClient.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		const canThrowAnError =
			error.request.status === 0 || error.request.status === 500

		if (canThrowAnError) {
			throw new Error(error.message)
		}
		return error
	}
)
export default {
	feedbacks: FeedbacksService(httpClient),
}
