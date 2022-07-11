import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {
    MeetingRoomScheduleInfo,
    MeetingRoomScheduleInfoDocument
} from "./schema/meetingScheduleInfo";
import {CreateMeetingRoomScheduleDto} from "./dto/create-meetingroom-schedule.dto";
import {UpdateMeetingRoomScheduleDto} from "./dto/update-meetingroom-schedule.dto";



@Injectable()
export class MeetingRoomScheduleService{
   constructor(@InjectModel(MeetingRoomScheduleInfo.name)  private readonly model: Model<MeetingRoomScheduleInfoDocument>){}

    async create(createMeetingRoomScheduleData: CreateMeetingRoomScheduleDto): Promise<MeetingRoomScheduleInfo>{
        return await new this.model({
            ...createMeetingRoomScheduleData,
        }).save();
    };

   async findAll():Promise<MeetingRoomScheduleInfo[]>{
       return await this.model.find().exec();
   }

   async update(meetingRoomId: number, updateMeetingRoomScheduleData :UpdateMeetingRoomScheduleDto):Promise<MeetingRoomScheduleInfo> {
       const updateModel: any = {...updateMeetingRoomScheduleData};
       return await this.model.findOneAndUpdate({meetingRoomId: meetingRoomId}, {$set: updateModel}, {new: true}).exec();

   }

    async delete(meetingRoomScheduleId: number) {
        return this.model.deleteOne({meetingRoomScheduleId: meetingRoomScheduleId});
    }
}
