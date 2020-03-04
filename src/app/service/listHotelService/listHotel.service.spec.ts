/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListHotelService } from './listHotel.service';

describe('Service: ListHotel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListHotelService]
    });
  });

  it('should ...', inject([ListHotelService], (service: ListHotelService) => {
    expect(service).toBeTruthy();
  }));
});
