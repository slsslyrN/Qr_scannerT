import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsumoApiService } from './consumoapi.service';

describe('ConsumoApiService', () => {
  let service: ConsumoApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsumoApiService]
    });
    service = TestBed.inject(ConsumoApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch classes for estudiante', () => {
    const mockClases = [
      { nombre: 'Programación de aplicaciones móviles', id: 'PGY4121', horario: '19:00 - 22:30', imagen: 'assets/icon/Mat.jpg' },
      { nombre: 'Programación Web', id: 'PGY4141', horario: '15:00 - 18:30', imagen: 'assets/icon/fisica.jpg' }
    ];

    service.getClasesEstudiante().subscribe(clases => {
      expect(clases.length).toBe(2);
      expect(clases).toEqual(mockClases);
    });

    const req = httpMock.expectOne('http://localhost:5000/estudiante/clases');
    expect(req.request.method).toBe('GET');
    req.flush(mockClases);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
