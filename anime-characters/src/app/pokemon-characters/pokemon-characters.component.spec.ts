import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharactersComponent } from './pokemon-characters.component';

describe('PokemonCharactersComponent', () => {
  let component: PokemonCharactersComponent;
  let fixture: ComponentFixture<PokemonCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCharactersComponent]
    });
    fixture = TestBed.createComponent(PokemonCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
