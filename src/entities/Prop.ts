import { Entity } from "./Entity";

export class Prop extends Entity {
	public type = "prop";
	constructor(handle: number) {
		super(handle);
	}
}
