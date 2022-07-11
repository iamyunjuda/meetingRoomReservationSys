import { Module } from '@nestjs/common';
import {MeetingRoomService} from "./meeting-room.service";
import {MeetingRoomController} from "./meeting-room.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {MeetingRoomInfo, MeetingRoomInfoSchema} from "./schema/meetingRoomInfo";




@Module({
    providers:[MeetingRoomService],
    controllers :[MeetingRoomController],
    imports:[MongooseModule.forFeature([{name : MeetingRoomInfo.name , schema: MeetingRoomInfoSchema}])],
})
export class MeetingRoomModule {}
