import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { RolController } from './rol/rol.controller';
import { RolModule } from './rol/rol.module';
import { RolService } from './rol/rol.service';
import { City, CitySchema } from './schemas/city.schema';
import { Rol, RolSchema } from './schemas/rol.schema';
import { State, StateSchema } from './schemas/state.schema';
import { Task, TaskSchema } from './schemas/task.schema';
import { TipeDocument, TipeDocumentSchema } from './schemas/tipe-document.schema';
import { User, UserSchema } from './schemas/user.schema';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';
import { TipeDocumentController } from './tipe-document/tipe-document.controller';
import { TipeDocumentModule } from './tipe-document/tipe-document.module';
import { TipeDocumentService } from './tipe-document/tipe-document.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin123*@pruebadb.eioiafk.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: State.name, schema: StateSchema }]),
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
    MongooseModule.forFeature([{ name: Rol.name, schema: RolSchema }]),
    MongooseModule.forFeature([{ name: TipeDocument.name, schema: TipeDocumentSchema }]),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    TaskModule, UserModule, AuthModule, RolModule, TipeDocumentModule
],
  controllers: [AppController, AuthController, RolController, TipeDocumentController, UserController, TaskController],
  providers: [AppService, AuthService, RolService, TipeDocumentService, UserService, TaskService, JwtService],
})
export class AppModule {}
