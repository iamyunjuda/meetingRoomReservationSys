//
// import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
// import * as mongoose from "mongoose";
//
// // export type MeetingScheduleInfoDocument = MeetingScheduleInfo & Document;
//
// export const MeetingScheduleInfoSchema = new mongoose.Schema({
//
//     createdAt: {
//         type: Date,
//         required: true,
//     },
//
//     updatedAt:  {
//         type: Date,
//         required: true,
//     },
//
//     meetingRoomId :{
//         type:Date,
//         required: true,
//     },
//     meetingRoomName: {
//         type: String,
//         required :true,
//     },
//     isActivated:{
//         type: Boolean,
//         default: true,},
//     booker: {
//         type: String,
//         required : true,
//     },
//     meetingStarts:{
//         type:Date,
//         required:true,
//     },
//     meetingEnds:{
//         type:Date,
//         required: true,
//     }
// });
// const MeetingScheduleInfo = mongoose.model('meetingScheduleInfo', MeetingScheduleInfoSchema);
//
//
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {MeetingRoomInfo} from "./meetingRoomInfo";


export type MeetingRoomScheduleInfoDocument = MeetingRoomScheduleInfo & Document;

@Schema()
export class MeetingRoomScheduleInfo {
    @Prop({default: new Date()})
    createdAt: Date;
    @Prop({default: new Date()})
    updatedAt: Date;

    @Prop()
    description : string;

    @Prop()
    readonly meetingRoomScheduleId: number;

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


export const MeetingRoomScheduleInfoSchema = SchemaFactory.createForClass(MeetingRoomScheduleInfo)


