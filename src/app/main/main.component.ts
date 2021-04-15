import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

interface Itoy { imageUrl: string; price: number; isSelected: boolean; }


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  toysList: Itoy[] = [
    {imageUrl: '/assets/images/presents/toy1.png', price: 40, isSelected: false},
    {imageUrl: '/assets/images/presents/toy4.png', price: 50, isSelected: false},
    {imageUrl: '/assets/images/presents/toy2.png', price: 70, isSelected: false},
    {imageUrl: '/assets/images/presents/toy5.png', price: 100, isSelected: false},
    {imageUrl: '/assets/images/presents/toy3.png', price: 150, isSelected: false},
    {imageUrl: '/assets/images/presents/toy6.png', price: 200, isSelected: false},
    ];

  donationSum = 0;
  donationLink: string;
  cardNumber = environment.cardNumber;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
  }

  toggleToy(toy: Itoy): void {
    toy.isSelected = !toy.isSelected;
    this.reCalculateDonations();
  }

  reCalculateDonations(): void {
    this.donationSum = 0;
    this.toysList.forEach((toy: Itoy) => {
      if (toy.isSelected) {
        this.donationSum += toy.price;
      }
    });
    this.donationSum ? this.setDonationLink() : this.resetDonationLink();
  }

  acceptDonation(event): void {
     if (!this.donationLink) {
       event.preventDefault();
     }
  }

  setDonationLink(): void {
    this.donationLink = `https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%22${this.cardNumber}%22%2C%22amt%22%3A%22${this.donationSum}%22%2C%22ccy%22%3A%22UAH%22%7D`;
  }

  resetDonationLink(): void {
    this.donationLink = null;
  }
}
