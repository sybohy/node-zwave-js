/// <reference types="node" />
import { IDriver } from "../driver/IDriver";
import { Duration } from "../values/Duration";
import { Maybe } from "../values/Primitive";
import { CommandClass } from "./CommandClass";
export declare enum BinarySwitchCommand {
    Set = 1,
    Get = 2,
    Report = 3
}
export declare class BinarySwitchCC extends CommandClass {
    nodeId: number;
    ccCommand?: BinarySwitchCommand;
    constructor(driver: IDriver, nodeId?: number);
    constructor(driver: IDriver, nodeId: number, ccCommand: BinarySwitchCommand.Get);
    constructor(driver: IDriver, nodeId: number, ccCommand: BinarySwitchCommand.Set, targetValue: boolean, duration?: Duration);
    currentValue: Maybe<boolean>;
    targetValue: boolean;
    duration: Duration;
    serialize(): Buffer;
    deserialize(data: Buffer): void;
}
