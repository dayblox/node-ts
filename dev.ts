import env from "./env"

Object.assign(process.env, env)

type ENV = typeof env
declare global {
	namespace NodeJS {
		// biome-ignore lint/suspicious/noEmptyInterface:
		interface ProcessEnv extends ENV {}
	}
}
