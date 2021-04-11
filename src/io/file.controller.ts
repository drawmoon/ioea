import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { FileDTO } from './dto/file.dto';
import { FILE_SERVICE, IFileService } from './services/file.service';

/**
 * 文件服务
 */
@ApiTags('文件服务')
@Controller('api/v1/file')
export class FileController {
  constructor(
    @Inject(FILE_SERVICE)
    private readonly fileService: IFileService,
  ) {}

  /**
   * 获取文件列表
   * @param search 检索关键字
   * @param sortBy 排序
   * @param page 页码
   * @param pageSize 页码大小
   */
  @ApiOperation({
    summary: '获取文件列表',
    description: '获取文件列表',
  })
  @ApiQuery({
    name: 'search',
    description: '检索关键字',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    description: '排序',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'pageSize',
    description: '页码大小',
    type: Number,
    required: false,
  })
  @ApiOkResponse({
    description: '返回文件列表',
    type: FileDTO,
  })
  @ApiBadRequestResponse({
    description: '模型验证失败',
  })
  @ApiUnauthorizedResponse({
    description: '鉴权失败',
  })
  @Get()
  async getAll(
    @Query('search') search?: string | undefined,
    @Query('sortBy') sortBy?: string | undefined,
    @Query('page') page?: number | undefined,
    @Query('pageSize') pageSize?: number | undefined,
  ): Promise<FileDTO[]> {
    return await this.fileService.getAll(search, sortBy, page, pageSize);
  }

  /**
   * 获取文件详情
   * @param id 文件的id
   */
  @ApiParam({
    name: 'id',
    description: '文件的id',
    type: Number,
  })
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取文件的信息
   * @param id 文件的id
   */
  @Get(':id/manifest')
  getManifest(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 预览文件
   * @param id 文件的id
   * @param version 文件的版本
   */
  @Get(':id/preview')
  preview(
    @Param('id', ParseIntPipe) id: number,
    @Query('version') version?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  /**
   * 下载文件
   * @param id 文件的id
   */
  @Get(':id/download')
  download(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 导出
   * @param id 文件的id
   * @param type 文件类型
   */
  @Get(':id/:type')
  export(@Param('id', ParseIntPipe) id: number, @Param('type') type: string) {
    throw new Error('not implemented.');
  }

  /**
   * 新增文件
   */
  @Post()
  post() {
    throw new Error('not implemented.');
  }

  /**
   * 上传文件
   */
  @Post('upload')
  upload() {
    throw new Error('not implemented.');
  }

  /**
   * 复制文件
   * @param id 文件的id
   */
  @Post(':id/clone')
  clone(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 更新文件
   * @param id 文件的id
   */
  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 重命名文件
   * @param id 文件的id
   * @param name 文件的名称
   */
  @Put(':id/name')
  rename(@Param('id', ParseIntPipe) id: number, @Body('name') name: string) {
    throw new Error('not implemented.');
  }

  /**
   * 移动文件
   * @param id 文件的id
   * @param parentId 父目录的id
   */
  @Put(':id/move')
  move(
    @Param('id', ParseIntPipe) id: number,
    @Query('parentId') parentId?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  /**
   * 置顶文件
   * @param id 文件的id
   */
  @Put(':id/top')
  top(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 删除文件
   * @param id 文件的id
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }
}
