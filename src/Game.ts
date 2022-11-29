import { Vector3 } from './utils/Vector3';

export abstract class Game {
	// A map containing generated hashes.
	public static hashCache: Map<string, number> = new Map();
	/**
	 * Calculate the Jenkins One At A Time (joaat) has from the given string.
	 *
	 * @param input The input string to calculate the hash
	 */
	public static generateHash(input: string): number {
		if (typeof input === 'undefined') {
			return 0;
		}

		const _hash = this.hashCache.get(input);
		if (_hash) return _hash;
		const hash = GetHashKey(input);
		this.hashCache.set(input, hash);
		return hash;
	}

	/**
	 * Gets how many milliseconds the game has been open this session
	 */
	public static get GameTime(): number {
		return GetGameTimer();
	}

	/**
	 * Get an iterable list of players currently on server.
	 * @returns Iterable list of Player objects.
	 */
	public static *playerList(excludeLocalPlayer = false): IterableIterator<Player> {
		for (const id of getPlayers() as number[]) {
			if (excludeLocalPlayer && localPlayer.Handle === id) {
				continue;
			}
			yield new Player(id);
		}
	}
}
