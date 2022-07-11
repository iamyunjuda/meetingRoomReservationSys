
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

import {BaseMeetingRoomDto} from "./base-meetingroom.dto";
import {IsDate, IsNumber, IsString} from "class-validator";

export class  BaseMeetingRoomScheduleDto {
    @IsString()
    booker? : string;

    @IsString()
    description?: string;

    @IsString()
    startTime? : string;

    @IsString()
    endTime?: string;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;

    @IsNumber()
    meetingRoomScheduleId: number;

}