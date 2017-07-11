/**
 * @template T 
 * @param {Promise<T>} promise 
 * @returns {Promise<[Error, T]>} 
 */
export default function awaitTo<T>(promise: Promise<T>): Promise<[Error, T]> {
	return promise
			.then((data: T) => [null as any, data])
			.catch((e: Error) => [e, null as any]) 
}