import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST', 'localhost'),  // Lấy giá trị DB_HOST từ môi trường, mặc định localhost nếu không có
  port: parseInt(configService.get<string>('DB_PORT', '5432'), 10),  // Lấy giá trị DB_PORT từ môi trường, mặc định 5432 nếu không có
  username: configService.get<string>('DB_USER', 'postgres'),
  password: configService.get<string>('DB_PASSWORD', '123456789'),
  database: configService.get<string>('DB_NAME', 'ums'),
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  synchronize: true,
});
