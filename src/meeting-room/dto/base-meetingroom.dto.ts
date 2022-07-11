
import {IsBoolean, IsNumber, IsString} from "class-validator";
import {Injectable} from "@nestjs/common";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

//
// export type BaseMeetingRoomDtoDocument = BaseMeetingRoomDto & Document;

// @Schema()
// export class BaseMeetingRoomDto {
//
//     @IsString()
//     @Prop()
//     createdAt: string;
//
//     // @IsString()
//     // /updatedAt: string;
//
//     @IsNumber()
//     @Prop()
//     meetingRoomId : number;
//
//     @IsString()
//     @Prop()
//     meetingRoomName: string;
//
//     @IsBoolean()
//     @Prop()
//     isActivated: boolean;
//
//     // @IsString()
//     // booker : string;
//     //
//     // @IsString()
//     // startTime? : string;
//     //
//     // @IsString()
//     // endTime: string;
//
//
//
// }
// export const BaseMeetingRoomInfoSchema = SchemaFactory.createForClass(BaseMeetingRoomDto);

export class BaseMeetingRoomDto{

    createdAt: string;

    meetingRoomId : number;

    meetingRoomName: string;

    isActivated: boolean;

    // @IsString()
    // booker : string;
    //
    // @IsString()
    // startTime? : string;
    //
    // @IsString()
    // endTime: string;

}