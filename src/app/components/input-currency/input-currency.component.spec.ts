import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCurrencyComponent } from './input-currency.component';
import { CurrencyPipe } from 'src/app/helpers/pipes/currency.pipe';
import { By } from '@angular/platform-browser';

describe('InputCurrencyComponent', () => {
  let component: InputCurrencyComponent;
  let fixture: ComponentFixture<InputCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputCurrencyComponent, CurrencyPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        CurrencyPipe,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show number wiht currency format', () => {
    component = fixture.componentInstance;
    component.onInput('45345343.45632');
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('input[type=text]')).nativeElement;
    expect(element.value).toEqual('45,345,343.4563');
  });

  it('should show span wiht UDS when Iput() symbol is equal to USD', () => {
  });

});
