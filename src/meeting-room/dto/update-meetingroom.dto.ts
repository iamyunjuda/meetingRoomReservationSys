import {BaseMeetingRoomDto} from "./base-meetingroom.dto";


// export type CreateMeetingRoomDtoDocument = CreateMeetingRoomDto & Document;
export class UpdateMeetingRoomDto{
    meetingRoomName?: string;
    isActivated?: boolean;
}
// export const CreateMeetingRoomDtoSchema = SchemaFactory.createForClass(CreateMeetingRoomDto);
