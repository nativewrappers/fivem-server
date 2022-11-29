import { Ped, Prop, Vehicle, Entity } from "./entities";
import { Player } from "./entities/Player";
import { Vector2, Vector3, Vector4 } from "./utils";

export type NetEvent = (player: Player, ...args: any[]) => void;

export class Events {
	public onNet = (eventName: string, event: NetEvent) => {
		onNet(eventName, (...args: any[]) => {
			const ply = new Player(source);

			const newArgs: any[] = [];

			for (const arg of args) {
				switch (arg.type) {
					case "vec3": {
						newArgs.push(Vector3.create(arg));
						continue;
					}
					case "vec4": {
						newArgs.push(Vector4.create(arg));
						continue;
					}
					case "vec2": {
						newArgs.push(Vector2.create(arg));
						continue;
					}
					case "ped": {
						newArgs.push(new Ped(arg.handle));
						continue;
					}
					case "player": {
						newArgs.push(new Player(arg.source));
						continue;
					}
					case "prop": {
						newArgs.push(new Prop(arg.handle));
						continue;
					}
					case "vehicle": {
						newArgs.push(new Vehicle(arg.handle));
						continue;
					}
					case "entity": {
						newArgs.push(new Entity(arg.handle));
						continue;
					}
					default: {
						newArgs.push(arg);
					}
				}
			}

			event(ply, ...newArgs);
		});
	};
}
