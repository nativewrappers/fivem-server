import { Entity } from './Entity';

export class Ped extends Entity {
	public type = 'ped';
	constructor(handle: number) {
		super(handle);
	}
}
