import { Entity } from './Entity';

export class Vehicle extends Entity {
	public type = 'vehicle';
	constructor(handle: number) {
		super(handle);
	}
}
