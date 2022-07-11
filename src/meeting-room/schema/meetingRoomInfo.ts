
import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


// export const MeetingRoomInfoSchema = new mongoose.Schema({
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
//
//     meetingRoomId :{
//         type:Date,
//         required: true,
//     },
//      meetingRoomName: {
//         type: String,
//          required :true,
//      },
//     isActivated:{
//         type: Boolean,
//         default: true,
//     }
//
//
// });
// const MeetingRoomInfo =mongoose.model('MeetingRoomInfo',MeetingRoomInfoSchema );


export type MeetingRoomInfoDocument = MeetingRoomInfo & Document;

@Schema()
export class MeetingRoomInfo {
    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
     meetingRoomId : number;

    @Prop()
     meetingRoomName: string;

    @Prop()
     isActivated: boolean;

}

export const MeetingRoomInfoSchema = SchemaFactory.createForClass(MeetingRoomInfo);