import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateMeetingRoomDto} from "./dto/create-meetingroom.dto";
import {MeetingRoomInfo, MeetingRoomInfoDocument} from "./schema/meetingRoomInfo";
import {UpdateMeetingRoomDto} from "./dto/update-meetingroom.dto";

@Injectable()
export class MeetingRoomService {
   constructor(@InjectModel(MeetingRoomInfo.name)  private readonly model: Model<MeetingRoomInfoDocument>){}

    async create(createMeetingRoom: CreateMeetingRoomDto): Promise<MeetingRoomInfo>{
       console.log(createMeetingRoom)
        return await new this.model({
            ...createMeetingRoom,
        }).save();
    };

   async findAll():Promise<MeetingRoomInfo[]>{
       return await this.model.find().exec();
   }

   async update(meetingRoomId: number, updateMeetingRoomData :UpdateMeetingRoomDto):Promise<MeetingRoomInfo> {
       const updateModel: any = {...updateMeetingRoomData};
       return await this.model.findOneAndUpdate({meetingRoomId: meetingRoomId}, {$set: updateModel}, {new: true}).exec();

   }

    async delete(meetingRoomId: number) {
       return this.model.deleteOne({meetingRoomId: meetingRoomId});
    }
}
