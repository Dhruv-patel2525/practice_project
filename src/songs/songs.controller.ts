import { Controller, Delete, Get, Post, Put,Body, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {
    constructor(private songService:SongsService) {}
    @Post()
    create(@Body() createSongDTO:CreateSongDTO){
        return this.songService.create(createSongDTO);
    }
    @Get()
    findAll():Object{
        try
        {
        return this.songService.findAll();
        }
        catch(e)
        {
            throw new HttpException('server error',HttpStatus.INTERNAL_SERVER_ERROR,{
                cause:e,
            });
        }
    }
    @Get(':id')
    findOne(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number)
    {
        return `Song based on id ${typeof id}`;
    }
    @Put(":id")
    update()
    {
        return "Update song based on id";
    }
    @Delete(":id")
    delete()
    {
        return "delete song based on id";
    }
}
