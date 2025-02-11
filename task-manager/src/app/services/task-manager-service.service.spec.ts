import { TestBed } from '@angular/core/testing';

import { TaskManagerServiceService } from './task-manager-service.service';

describe('TaskManagerServiceService', () => {
  let service: TaskManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
