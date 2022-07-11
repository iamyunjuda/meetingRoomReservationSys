import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingRoomModule } from './meeting-room/meeting-room.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({

  controllers: [AppController],
  providers: [AppService],
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"),MeetingRoomModule],
})
export class AppModule {}
