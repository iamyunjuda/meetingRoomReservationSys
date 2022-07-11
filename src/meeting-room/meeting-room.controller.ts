import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateMeetingRoomDto} from "./dto/create-meetingroom.dto";
import {MeetingRoomService} from "./meeting-room.service";
import {UpdateMeetingRoomDto} from "./dto/update-meetingroom.dto";

@Controller('meeting-room')
export class MeetingRoomController {
    constructor(private readonly service:MeetingRoomService) {
    }

    @Post()
    async create(@Body() createMeetingRoomData : CreateMeetingRoomDto){
        console.log(createMeetingRoomData)
        return await this.service.create(createMeetingRoomData);
    }

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

    @Patch(':meetingRoomId')
    async update(@Param('meetingRoomId')  meetingRoomId:number, @Body() updateMeetingRoomData : UpdateMeetingRoomDto){
        console.log(updateMeetingRoomData)
        console.log(meetingRoomId)
        return await this.service.update(meetingRoomId, updateMeetingRoomData);
    }


}
