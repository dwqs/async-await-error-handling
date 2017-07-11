/**
 * @export
 * @template T 
 * @param {Promise<T>} promise 
 * @returns {(Promise<T[] | Error[]>)} 
 */
export default function awaitTo<T>(promise: Promise<T>): Promise<T[] | Error[]> {
	return promise
			.then((data: T) => [null as any, data])
			.catch((err: Error) => [err, null as any]) 
}