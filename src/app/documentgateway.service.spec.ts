import { TestBed } from '@angular/core/testing';

import { DocumentgatewayService } from './documentgateway.service';

describe('DocumentgatewayService', () => {
  let service: DocumentgatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentgatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
