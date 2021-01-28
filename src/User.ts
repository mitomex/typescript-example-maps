import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // 上記にある location は TypeScript に型を入れていくと伝えているのみで
    // 実際に値があるわけではないので以下のようにすると this.location が undefined で
    // .lat に値を代入できない。
    // this.location.lat = faker.address.latitude(); 
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}