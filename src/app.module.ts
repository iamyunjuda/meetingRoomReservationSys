import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingRoomController } from './meeting-room/meeting-room.controller';
import { MeetingRoomService } from './meeting-room/meeting-room.service';
import { MeetingRoomModule } from './meeting-room/meeting-room.module';

@Module({
  imports: [MeetingRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
