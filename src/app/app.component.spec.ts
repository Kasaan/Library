import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentInstance } from '@angular/core/src/render3/interfaces/player';
import { ComponentsModule } from './components/components.module';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ComponentsModule,
            ],
            declarations: [
                AppComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
    }));

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });


    //   it(`should have as title 'library'`, () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('library');
    //   });

    //   it('should render title in a h1 tag', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to library!');
    //   });
});
