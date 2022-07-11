import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { MeetingRoomScheduleService } from './meeting-room-schedule.service';
import {MeetingRoomScheduleController} from "./meeting-room-schedule.controller";
import {MeetingRoomScheduleInfo, MeetingRoomScheduleInfoSchema} from "./schema/meetingScheduleInfo";



@Module({
    providers:[MeetingRoomScheduleService],
    controllers :[MeetingRoomScheduleController],
    imports:[MongooseModule.forFeature([{name : MeetingRoomScheduleInfo.name , schema: MeetingRoomScheduleInfoSchema}])],
})
export class MeetingRoomScheduleModule {}
