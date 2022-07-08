import { Module } from '@nestjs/common';
import {MeetingRoomService} from "./meeting-room.service";
import {MeetingRoomController} from "./meeting-room.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {MeetingRoomInfoSchema} from "./schema/meetingRoomInfo";



@Module({
    //imports:[MongooseModule.forFeature([{name : MeetingRoomInfoSchema , schema: MeetingRoomInfoSchema}]),
    controllers :[MeetingRoomController],
    providers:[MeetingRoomService]
})
export class MeetingRoomModule {}
