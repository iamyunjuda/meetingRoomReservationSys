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
// // @Schema({timestamps : {createdAt:"createdAt", updatedAt:"updatedAt"}})
// // class MeetingScheduleInfo {
// //     @Prop({default: new Date(), type: mongoose.Schema.Types.Date})
// //     createdAt: Date;
// //     @Prop({default: new Date(), type: mongoose.Schema.Types.Date})
// //     updatedAt: Date;
// //
// //     @Prop({required: true})
// //     readonly meetingRoomId : number;
// //
// //     @Prop({required : true})
// //     readonly meetingRoomName: string;
// //
// //     @Prop({default : true})
// //     readonly isActivated: boolean;
// //
// //     @Prop({required : true})
// //     readonly booker : string;
// //
// //     @Prop({required : true})
// //     readonly startTime : string;
// //
// //     @Prop({required : true})
// //     readonly endTime: string;
// // }
// //
// //
// // export const MeetingScheduleInfoSchema = SchemaFactory.createForClass(MeetingScheduleInfo)
//
//
