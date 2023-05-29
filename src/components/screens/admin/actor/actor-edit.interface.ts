import { IActor } from '@/shared/interfaces/actor.interface';

export interface IActorEditInput extends Omit<IActor, '_id'> {}
