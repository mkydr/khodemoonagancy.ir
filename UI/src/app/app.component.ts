import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {OffcanvasMenuComponent} from "./offcanvas-menu/offcanvas-menu.component";
import {CallToActionComponent} from "./sections/call-to-action/call-to-action.component";
import {BlogComponent} from "./sections/blog/blog.component";
import {BannerComponent} from "./sections/banner/banner.component";
import {TestimonialComponent} from "./sections/testimonial/testimonial.component";
import {CounterUpComponent} from "./sections/counter-up/counter-up.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {ServicesComponent} from "./sections/services/services.component";
import {BrandsComponent} from "./sections/brands/brands.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OffcanvasMenuComponent, CallToActionComponent, BlogComponent, BannerComponent, TestimonialComponent, CounterUpComponent, ProjectsComponent, ServicesComponent, BrandsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
