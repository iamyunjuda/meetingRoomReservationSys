import {Body, Controller, Post} from '@nestjs/common';
import {CreateMeetingRoomDto} from "./dto/create-meetingroom.dto";
import {MeetingRoomService} from "./meeting-room.service";

@Controller('meeting-room')
export class MeetingRoomController {
    constructor(private readonly service:MeetingRoomService) {
    }

    @Post()
    async create(@Body() createMeetingRoomData : CreateMeetingRoomDto){
        console.log(createMeetingRoomData)
        return await this.service.create(createMeetingRoomData);
    }

}
