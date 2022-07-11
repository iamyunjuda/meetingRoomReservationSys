import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateMeetingRoomDto} from "./dto/create-meetingroom.dto";
import {UpdateMeetingRoomDto} from "./dto/update-meetingroom.dto";
import {CreateMeetingRoomScheduleDto} from "./dto/create-meetingroom-schedule.dto";
import {MeetingRoomScheduleService} from "./meeting-room-schedule.service";
import {UpdateMeetingRoomScheduleDto} from "./dto/update-meetingroom-schedule.dto";

@Controller('meeting-room-schedule')
export class MeetingRoomScheduleController {
    constructor(private readonly service:MeetingRoomScheduleService) {
    }

    @Post()
    async create(@Body() createMeetingRoomScheduleData : CreateMeetingRoomScheduleDto){
        return await this.service.create(createMeetingRoomScheduleData);
    }

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

    @Patch(':meetingRoomScheduleId')
    async update(@Param('meetingRoomScheduleId')  meetingRoomScheduleId:number, @Body() updateMeetingRoomScheduleData : UpdateMeetingRoomScheduleDto){
        return await this.service.update(meetingRoomScheduleId, updateMeetingRoomScheduleData);
    }

    @Delete(':meetingRoomScheduleId')
    async delete(@Param('meetingRoomScheduleId') meetingRoomScheduleId : number){
        return await this.service.delete(meetingRoomScheduleId);
    }




}
