import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-content',
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss']
})
export class FooterContentComponent {
  catogoties_link =['Popular', 'Chair', 'Table', 'Sofa', 'Cupboard', 'Lamp'];
  customer_service =['My Account', 'Discount', 'Returns', 'Order History', 'Order Tracking'];
  furniture_link = ['Living Room Furniture', 'Bar Furniture', 'Bedroom Furniture', 'Kids Furniture', 'Accent Furniture', 'Book Shelves'];
  usefule_link = ['Promotions', 'Sitemap'];
}
