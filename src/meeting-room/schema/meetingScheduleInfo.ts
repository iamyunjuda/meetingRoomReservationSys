
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type MeetingScheduleInfoDocument = MeetingScheduleInfo & Document;

@Schema({timestamps : {createdAt:"createdAt", updatedAt:"updatedAt"}})
class MeetingScheduleInfo {
    @Prop({default: new Date(), type: mongoose.Schema.Types.Date})
    createdAt: Date;
    @Prop({default: new Date(), type: mongoose.Schema.Types.Date})
    updatedAt: Date;

    @Prop({required: true})
    readonly meetingRoomId : number;

    @Prop({required : true})
    readonly meetingRoomName: string;

    @Prop({default : true})
    readonly isActivated: boolean;

    @Prop({required : true})
    readonly booker : string;

    @Prop({required : true})
    readonly startTime : string;

    @Prop({required : true})
    readonly endTime: string;
}


export const MeetingScheduleInfoSchema = SchemaFactory.createForClass(MeetingScheduleInfo)


