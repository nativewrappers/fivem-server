import { EntityType } from '../enum/EntityType';
import { PopulationType } from '../enum/PopulationType';
import { Vector3 } from '../utils/Vector3';
import { Player } from './Player';

export class Entity {
	public type = 'entity';
	constructor(public handle: number) {}

	public get Handle(): number {
		return this.Handle;
	}

	public get Exists(): boolean {
		return DoesEntityExist(this.handle);
	}

	public get AttachedTo(): Entity {
		return new Entity(GetEntityAttachedTo(this.handle));
	}

	public get Position(): Vector3 {
		return Vector3.fromArray(GetEntityCoords(this.handle));
	}

	public get Heading(): number {
		return GetEntityHeading(this.handle);
	}

	public get Health(): number {
		return GetEntityHealth(this.handle);
	}

	public get MaxHealth(): number {
		return GetEntityMaxHealth(this.handle);
	}

	public get Model(): number {
		return GetEntityModel(this.handle);
	}

	public get PopulationType(): PopulationType {
		return GetEntityPopulationType(this.handle);
	}

	public get Rotation(): Vector3 {
		return Vector3.fromArray(GetEntityRotation(this.handle));
	}

	public get RotationVelocity(): Vector3 {
		return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
	}

	public get RoutingBucket(): number {
		return GetEntityRoutingBucket(this.handle);
	}

	/**
	 * @returns The script that made the entity
	 */
	public get Script(): string {
		return GetEntityScript(this.handle);
	}

	public get Speed(): number {
		return GetEntitySpeed(this.handle);
	}

	public get Type(): EntityType {
		return GetEntityType(this.handle);
	}

	/**
	 * @returns the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)
	 */
	public get Velocity(): Vector3 {
		return Vector3.fromArray(GetEntityVelocity(this.handle));
	}

	public get Owner(): Player {
		return new Player(NetworkGetEntityOwner(this.handle));
	}

	public get IsVisible(): boolean {
		return IsEntityVisible(this.handle);
	}

	public get NetworkId(): number {
		return NetworkGetNetworkIdFromEntity(this.handle);
	}

	public get IsNoLongerNeeded(): boolean {
		return HasEntityBeenMarkedAsNoLongerNeeded(this.handle);
	}

	public delete() {
		DeleteEntity(this.handle);
	}
}
