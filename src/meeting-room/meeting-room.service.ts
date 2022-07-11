import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateMeetingRoomDto} from "./dto/create-meetingroom.dto";
import {MeetingRoomInfo, MeetingRoomInfoDocument} from "./schema/meetingRoomInfo";



@Injectable()
export class MeetingRoomService {
   constructor(@InjectModel(MeetingRoomInfo.name)  private readonly model: Model<MeetingRoomInfoDocument>){}

    async create(createMeetingRoom: CreateMeetingRoomDto): Promise<MeetingRoomInfo>{
       console.log(createMeetingRoom)
        return await new this.model({
            ...createMeetingRoom,
        }).save();
    };


}
