import { User } from "./User";
import { UserDevice } from "./UserDevice";
import { UserAddress } from "./UserAddress";
import { Car } from "./Cars";
import { CarMake } from "./CarMake";
import { CarCategory } from "./CarCategory";
import { AdminUser } from "./AdminUser";
import { Banner } from "./Banner";
import { Service } from "./Service";
import { AdminToken } from "./AdminToken";
import { AdminFile } from "./AdminFile";
import { File } from "./File";
import { UserToken } from "./UserToken";
import { UserOtp } from "./UserOtp";
import { UserFile } from "./UserFile";
import { Vendor } from "./Vendor";
import { VendorFile } from "./VendorFile";
import { BannerAudienceType } from "./BannerAudienceType";
import { BannerUserTarget } from "./BannerUserTarget";
import { BannerUserTargetConfig } from "./BannerUserTargetConfig";
import { ServiceList } from "./ServiceList";
import { BannerCategory } from "./BannerCategory";
// import { Product } from './Product';

// Entities owned by this microservice (managed by migrations here)
export const entities = [
  Car,
  CarCategory,
  CarMake,
  AdminUser,
  Banner,
  Service,
  AdminToken,
  AdminFile,
  File,
  UserDevice,
  UserAddress,
  User,
  UserToken,
  UserOtp,
  UserFile,
  Vendor,
  VendorFile,
  BannerAudienceType,
  BannerUserTarget,
  BannerUserTargetConfig,
  ServiceList,
  BannerCategory,
];

// Export individual entities and types
export { User, type User as UserType } from "./User";
export { UserDevice, type UserDevice as UserDeviceType } from "./UserDevice";
export {UserAddress,type UserAddress as UserAddressType,} from "./UserAddress";
export { Car, type Car as CarType } from "./Cars";
export {CarCategory,type CarCategory as CarCategoryType,} from "./CarCategory";
export { CarMake, type CarMake as CarMakeType } from "./CarMake";
export { AdminUser, type AdminUser as AdminUserType } from "./AdminUser";
export { Banner, type Banner as BannerType } from "./Banner";
export { Service, type Service as ServiceType } from "./Service";
export { AdminToken, type AdminToken as AdminTokenType } from "./AdminToken";
export { AdminFile, type AdminFile as AdminFileType } from "./AdminFile";
export { File, type File as FileType } from "./File";
export { UserToken, type UserToken as UserTokenType } from "./UserToken";
export { UserOtp, type UserOtp as UserOtpType } from "./UserOtp";
export { UserFile, type UserFile as UserFileType } from "./UserFile";
export { ServiceList, type ServiceList as ServiceListType } from "./ServiceList";
// export { Product, type Product as ProductType } from './Product';
