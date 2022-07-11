//
// import {IsString} from "class-validator";
// import {BaseMeetingRoomDto} from "./base-meetingroom.dto";
// import {SchemaFactory} from "@nestjs/mongoose";
// import {CreateMeetingRoomDto} from "./create-meetingroom.dto";
//
//
//
// export type CreateMeetingRoomScheduleDtoDocument = CreateMeetingRoomScheduleDto & Document;
//
// export class CreateMeetingRoomScheduleDto extends BaseMeetingRoomDto {
//     @IsString()
//     booker : string;
//
//     @IsString()
//     startTime? : string;
//
//     @IsString()
//     endTime: string;
//
// }
// export const  CreateMeetingRoomScheduleDtoSchema = SchemaFactory.createForClass(CreateMeetingRoomScheduleDto);
