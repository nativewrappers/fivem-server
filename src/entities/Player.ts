import { Ped } from "./Ped";

export class Player {
	constructor(public readonly source: number){}

	public get Ped(): Ped {
		return new Ped(GetPlayerPed(this.source as any));
	}

}
