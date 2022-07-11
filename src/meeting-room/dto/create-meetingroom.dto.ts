import {BaseMeetingRoomDto} from "./base-meetingroom.dto";


// export type CreateMeetingRoomDtoDocument = CreateMeetingRoomDto & Document;
export class CreateMeetingRoomDto extends BaseMeetingRoomDto{

    updatedAt:string;
}
// export const CreateMeetingRoomDtoSchema = SchemaFactory.createForClass(CreateMeetingRoomDto);
