/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StyleService } from './style.service';

describe('Service: Style', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleService]
    });
  });

  it('should ...', inject([StyleService], (service: StyleService) => {
    expect(service).toBeTruthy();
  }));
});
