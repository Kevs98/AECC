import { TestBed } from '@angular/core/testing';

import { ClientsconsgService } from './clientsconsg.service';

describe('ClientsconsgService', () => {
  let service: ClientsconsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsconsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
