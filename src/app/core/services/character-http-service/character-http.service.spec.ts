import { TestBed } from '@angular/core/testing';

import { CharacterHttpService } from './character-http.service';

describe('CharacterHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterHttpService = TestBed.get(CharacterHttpService);
    expect(service).toBeTruthy();
  });
});
