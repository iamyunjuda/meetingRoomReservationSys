//
// import {IsString} from "class-validator";
// import {BaseMeetingRoomDto} from "./base-meetingroom.dto";
// import {SchemaFactory} from "@nestjs/mongoose";
// import {CreateMeetingRoomDto} from "./create-meetingroom.dto";
//
//
//
// export type CreateMeetingRoomScheduleDtoDocument = CreateMeetingRoomScheduleDto & Document;


import {IsBoolean} from "class-validator";
import {BaseMeetingRoomScheduleDto} from "./base-meetingroom-schedule.dto";

export class UpdateMeetingRoomScheduleDto extends BaseMeetingRoomScheduleDto {
    @IsBoolean()
    isActivated? : boolean;
}
// export const  CreateMeetingRoomScheduleDtoSchema = SchemaFactory.createForClass(CreateMeetingRoomScheduleDto);
