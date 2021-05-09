import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  private name: string;
  location: {
    lat: number;
    lng: number;
  }

  getName() {
    return `Company name: ${this.name}`;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}