import { TestBed, inject} from '@angular/core/testing';
import { HeroService } from './hero.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

describe('test hero service', ()=>{
    let service: HeroService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[HeroService, HttpClient, MessageService]
        })
        service = TestBed.get(HeroService)
    })
    it('should be created', inject([HeroService], (service:HeroService)=>{
        expect(service).toBeTruthy();
    }))
})