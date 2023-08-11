import { AdminModule } from './admin.module';
import { JwtService } from '@nestjs/jwt/dist';
import { CreateAdminDto } from './dto/create-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly AdminModule: Model<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;
    if (password !== confirm_password) {
      return new BadRequestException('dfgfgd');
    }
    const hashed_password = await bcrypt.hash(password, 7);
    const createAdmins = new this.AdminModule({
      ...CreateAdminDto,
      hashed_password,
    });

    const hashed_token = await bcrypt.hash(password, 7);
    const updateAdmin = await this.AdminModule.findByIdAndUpdate(
      createAdmins._id,
      { hashed_token },
      { new: true },
    );
    return updateAdmin;
  }

  async findAll(): Promise<Admin[]> {
    const admins = await this.AdminModule.find();
    return admins;
  }

  findOne(id: string) {
    return this.AdminModule.findById(id).exec();
  }

  // async update(id:string, updateAdminDto:UpdateAdminDto) => {

  //     const existingAdmin = await this.AdminModule
  //     .findByIdAndUpdate(id, updateAdminDto,{new:true})
  //     .exec();
  //     if(!existingAdmin){
  //         throw new NotFoundException(`Admin #${id}not found`);
  //     }
  //     return existingAdmin
  // }

  // remove(id:string){
  //     return this.AdminModule.findByIdAndDelete(id);
  // }

  //   async GenerateToken(admin: AdminDocument) {
  //     const jwtPayload = {
  //       id: admin._id,
  //       is_active: admin.is_active,
  //       is_creator: admin.is_creator,
  //     };
  //     const [accessToken, refreshToken] = await Promise.all([
  //       this.jwtService.signAsync(jwtPayload, {
  //         secret: process.env.ACCESS_TOKEN_KEY,
  //         expiresIn: process.env.ACCESS_TOKEN_TIME,
  //       }),
  //       this.jwtService.signAsync(jwtPayload, {
  //         secret: process.env.ACCESS_TOKEN_KEY,
  //         expiresIn: process.env.ACCESS_TOKEN_TIME,
  //       }),
  //     ]);
  //     const response = {
  //       accessToken: accessToken,
  //       refreshToken: refreshToken,
  //     };
  //     return response;
  //   }

  //  REFRESH TOKEN
  //   async refreshToken(Admin_id: number, refreshToken: string, res: Response) {
  //     const decodedToken = this.jwtService.decode(refreshToken);
  //     if (Admin_id != decodedToken['id']) {
  //       throw new BadRequestException('Admin id not found');
  //     }
  //     const Admin = await this.AdminModule.findOne({ where: { id: Admin_id } });
  //     if (!Admin || !Admin.hashed_token) {
  //       throw new BadRequestException('Admin not found');
  //     }

  //     const tokenMatch = await bcrypt.compare(
  //       refreshToken,
  //       Admin.hashed_password,
  //     );
  //     if (!tokenMatch) {
  //       throw new ForbiddenException('forbidden');
  //     }
  //     const tokens = await this.GenerateToken(Admin);
  //     const hashed_password_token = await bcrypt.hash(tokens.refreshToken, 7);

  //     const updatedAdmin = await this.AdminModule.update(
  //       { hashed_refresh_token: hashed_password_token },
  //       { where: { id: Admin.id }, returning: true },
  //     );

  //     res.cookie('RefreshToken:', tokens.refreshToken, {
  //       maxAge: 15 * 24 * 60 * 60 * 1000,
  //       httpOnly: true,
  //     });

  //     const response = {
  //       message: 'Admins token refreshed',
  //       Admin: updatedAdmin[1][0],
  //       tokens,
  //     };
  //     return response;
  //   }

  //  FIND Admin
  //   async findAll(): Promise<Admin[]> {
  //     const admin = await this.AdminModule.findAll({
  //       include: { all: true },
  //     });
  //     if (admin.length > 0) {
  //       return admin;
  //     }
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
}
