import { IsArray, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    readonly title:string;
    @IsNotEmpty()
    @IsArray()
    readonly artists:string[];
    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate:Date;
    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration:Date;

}