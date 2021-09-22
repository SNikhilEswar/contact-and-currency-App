import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  amount = 0;
  have = 'USD';
  want = 'EUR';
  total = 0;
  currencies: string[] = ["USD", "EUR", "POUND", "COP", "JPY", "IRR", "INR", "TTD", "AUD"];


  constructor() { }

  ngOnInit(): void {
  }

  convert() {
    switch (this.have) {
      case 'USD':
        switch (this.want) {
          case 'USD':
            this.total = this.amount;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.71;
            break;
          case 'COP':
            this.total = this.amount * 3607.50;
            break;
          case 'JPY':
            this.total = this.amount * 128.508398;
            break;
          case 'IRR':
            this.total = this.amount * 3607.50;
            break;
          case 'INR':
            this.total = this.amount * 86.687512;
            break;
          case 'TTD':
            this.total = this.amount * 7.981355;
            break;
          case 'AUD':
            this.total = this.amount * 1.618387;
            break;
        }
        break;

      case 'EUR':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount;
            break;
          case 'POUND':
            this.total = this.amount * 0.86;
            break;
          case 'COP':
            this.total = this.amount * 4389.08;
            break;
            case 'JPY':
              this.total = this.amount * 128.508398;
              break;
            case 'IRR':
              this.total = this.amount * 3607.50;
              break;
            case 'INR':
              this.total = this.amount * 86.687512;
              break;
            case 'TTD':
              this.total = this.amount * 7.981355;
              break;
            case 'AUD':
              this.total = this.amount * 1.618387;
              break;
        }
        break;
      case 'POUND':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount;
            break;
          case 'COP':
            this.total = this.amount * 5108.47;
            break;
            case 'JPY':
              this.total = this.amount * 128.508398;
              break;
            case 'IRR':
              this.total = this.amount * 3607.50;
              break;
            case 'INR':
              this.total = this.amount * 86.687512;
              break;
            case 'TTD':
              this.total = this.amount * 7.981355;
              break;
            case 'AUD':
              this.total = this.amount * 1.618387;
              break;
        }
        break;
      case 'COP':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
          case 'COP':
            this.total = this.amount;
            break;
            case 'JPY':
              this.total = this.amount * 128.508398;
              break;
            case 'IRR':
              this.total = this.amount * 3607.50;
              break;
            case 'INR':
              this.total = this.amount * 86.687512;
              break;
            case 'TTD':
              this.total = this.amount * 7.981355;
              break;
            case 'AUD':
              this.total = this.amount * 1.618387;
              break;
        }
        break;
      case 'JPY':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
          case 'COP':
            this.total = this.amount * 5108.47 ;
            break;
            case 'JPY':
              this.total = this.amount ;
              break;
            case 'IRR':
              this.total = this.amount * 3607.50;
              break;
            case 'INR':
              this.total = this.amount * 86.687512;
              break;
            case 'TTD':
              this.total = this.amount * 7.981355;
              break;
            case 'AUD':
              this.total = this.amount * 1.618387;
              break;
        }
        break;
      case 'IRR':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
          case 'COP':
            this.total = this.amount * 5108.47 ;
            break;
            case 'COP':
              this.total = this.amount * 5108.47 ;
              break;
              case 'JPY':
                this.total = this.amount * 128.508398 ;
                break;
              case 'IRR':
                this.total = this.amount * 3607.50 ;
                break;
              case 'INR':
                this.total = this.amount * 86.687512;
                break;
              case 'TTD':
                this.total = this.amount * 7.981355;
                break;
              case 'AUD':
                this.total = this.amount * 1.618387;
                break;
        }
        break;
      case 'INR':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
            case 'COP':
              this.total = this.amount * 5108.47 ;
              break;
                case 'JPY':
                  this.total = this.amount * 128.508398 ;
                  break;
                case 'IRR':
                  this.total = this.amount * 3607.50 ;
                  break;
                case 'INR':
                  this.total = this.amount ;
                  break;
                case 'TTD':
                  this.total = this.amount * 7.981355;
                  break;
                case 'AUD':
                  this.total = this.amount * 1.618387;
                  break;
        }
        break;
      case 'TTD':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
            case 'COP':
              this.total = this.amount * 3607.50;
              break;
            case 'JPY':
              this.total = this.amount * 128.508398;
              break;
            case 'IRR':
              this.total = this.amount * 3607.50;
              break;
            case 'INR':
              this.total = this.amount * 86.687512;
              break;
            case 'TTD':
              this.total = this.amount ;
              break;
            case 'AUD':
              this.total = this.amount * 1.618387;
              break;
        }
        break;
      case 'AUD':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.17333;
            break;
          case 'EUR':
            this.total = this.amount * 1;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
            case 'COP':
              this.total = this.amount * 3607.50;
              break;
            case 'JPY':
              this.total = this.amount * 128.508398;
              break;
            case 'IRR':
              this.total = this.amount * 3607.50;
              break;
            case 'INR':
              this.total = this.amount * 86.687512;
              break;
            case 'TTD':
              this.total = this.amount * 7.981355;
              break;
            case 'AUD':
              this.total = this.amount  ;
              break;
        }
        break;
    }
  }
}
