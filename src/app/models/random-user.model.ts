export enum CountryEnums {
  Australia = 'AU',
  Brazil = 'BR',
  Canada = 'CA',
  Switzerland = 'CH',
  Germany = 'DE',
  Denmark = 'DK',
  Spain = 'ES',
  Finland = 'FI',
  France = 'FR',
  UnitedKingdom = 'GB',
  Ireland = 'IE',
  Iran = 'IR',
  Norway = 'NO',
  Netherlands = 'NL',
  NewZealand= 'NZ',
  Turkey = 'TR',
  UnitedStates = 'US'
}

export enum GenderEnums {
  Male = 'male',
  Female = 'female'
}

export interface RandomUserRequest {
  results: number
  nat: CountryEnums[] | null
  gender: GenderEnums | null
}

export interface RandomUserResponse {
  gender: GenderEnums
  name: UserName
  location: UserLocation
  email: string
  login: UserLogin
  dob: UserDateAndAge
  registered: UserDateAndAge
  phone: string
  cell: string
  id: UserId
  picture: UserPicture
  nat: string
}

interface UserName {
  title: string
  first: string
  last: string
}

interface UserLocation {
  street:{
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone:{
    offset: string
    description: string
  }
}

interface UserLogin {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface UserDateAndAge {
  date: Date
  age: number
}

interface UserId {
  name: string
  value: string
}

export interface UserPicture {
  large: string
  medium: string
  thumbnail: string
}
