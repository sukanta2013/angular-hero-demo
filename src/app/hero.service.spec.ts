import { TestBed, inject} from '@angular/core/testing';
import { HeroService } from './hero.service'
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes'
describe('test hero service', ()=>{
    let service: HeroService;
    let httpMock: HttpTestingController;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[HeroService, MessageService]
        })
        service = TestBed.get(HeroService)
        httpMock = TestBed.get(HttpTestingController)
    })
    it('should be created', ()=>{
        expect(service).toBeTruthy();
    })
    it("should get heroes from hero service getHeroes",()=>{
        const dummyHeroes = HEROES;
        service.getHeroes().subscribe(heroes=>{
            expect(heroes.length).toBe(10);
            expect(heroes).toEqual(dummyHeroes)
        })

        const request = httpMock.expectOne(service.heroesUrl)
        expect(request.request.method).toBe('GET');
        request.flush(dummyHeroes)
    })
    
})