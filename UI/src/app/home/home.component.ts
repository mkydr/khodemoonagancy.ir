import { Component } from '@angular/core';
import {BannerComponent} from "../sections/banner/banner.component";
import {BlogComponent} from "../sections/blog/blog.component";
import {BrandsComponent} from "../sections/brands/brands.component";
import {CallToActionComponent} from "../sections/call-to-action/call-to-action.component";
import {CounterUpComponent} from "../sections/counter-up/counter-up.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {OffcanvasMenuComponent} from "../offcanvas-menu/offcanvas-menu.component";
import {ProjectsComponent} from "../sections/projects/projects.component";
import {ServicesComponent} from "../sections/services/services.component";
import {TestimonialComponent} from "../sections/testimonial/testimonial.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        BannerComponent,
        BlogComponent,
        BrandsComponent,
        CallToActionComponent,
        CounterUpComponent,
        FooterComponent,
        HeaderComponent,
        OffcanvasMenuComponent,
        ProjectsComponent,
        ServicesComponent,
        TestimonialComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
