/**
 * @template T 
 * @param {Promise<T>} promise 
 * @returns {Promise<[Error, T]>} 
 */
export default function awaitTo<T>(promise: Promise<T>): Promise<[Error|null, T]> {
	return promise
			.then((data: T) => [null, data])
			.catch((err: Error) => [err, null as any]) 
}