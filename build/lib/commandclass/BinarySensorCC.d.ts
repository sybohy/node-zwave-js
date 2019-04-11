/// <reference types="node" />
import { IDriver } from "../driver/IDriver";
import { CommandClass } from "./CommandClass";
export declare enum BinarySensorCommand {
    Get = 2,
    Report = 3,
    SupportedGet = 1,
    SupportedReport = 4
}
export declare class BinarySensorCC extends CommandClass {
    nodeId: number;
    ccCommand?: BinarySensorCommand;
    constructor(driver: IDriver, nodeId?: number);
    constructor(driver: IDriver, nodeId: number, ccCommand: BinarySensorCommand.Get, sensorType?: BinarySensorType);
    constructor(driver: IDriver, nodeId: number, ccCommand: BinarySensorCommand.SupportedGet);
    sensorType: BinarySensorType;
    value: boolean;
    private _supportedSensorTypes;
    readonly supportedSensorTypes: BinarySensorType[];
    serialize(): Buffer;
    deserialize(data: Buffer): void;
}
export declare enum BinarySensorType {
    "General Purpose" = 1,
    Smoke = 2,
    CO = 3,
    CO2 = 4,
    Heat = 5,
    Water = 6,
    Freeze = 7,
    Tamper = 8,
    Aux = 9,
    "Door/Window" = 10,
    Tilt = 11,
    Motion = 12,
    "Glass Break" = 13,
    Any = 255
}
