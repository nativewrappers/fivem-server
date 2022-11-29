import { Game } from './Game';

/**
 * Class to create and manage entity models.
 */
export class Model {
	/**
	 * Hash of this model.
	 */
	private hash: number;

	/**
	 * Creates a model object based on the hash key or model string.
	 *
	 * @param hash A number or string of the model's hash. Example: "mp_m_freemode_01"
	 */
	constructor(hash: number | string) {
		if (typeof hash === 'string') {
			this.hash = Game.generateHash(hash);
		} else {
			this.hash = hash;
		}
	}

	/**
	 * Gets the hash of the model.
	 *
	 * @returns The hash key.
	 */
	public get Hash(): number {
		return this.hash;
	}
}
