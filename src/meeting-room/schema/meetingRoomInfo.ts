import {IsNumber, IsString} from "class-validator";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type MeetingRoomInfoDocument = MeetingRoomInfo & Document;

@Schema({timestamps : {createdAt:"createdAt", updatedAt:"updatedAt"}})
class MeetingRoomInfo {
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

}

export const MeetingRoomInfoSchema = SchemaFactory.createForClass(MeetingRoomInfo)